'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Play, 
  Pause, 
  RotateCcw, 
  Radio, 
  Database, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SimulatedEvent {
  id: string;
  timestamp: string;
  type: 'GPS_PING' | 'GEOFENCE_ARRIVAL' | 'STOP_COMPLETED' | 'XERO_INVOICE' | 'DISPATCH_ASSIGNED';
  vehicle: string;
  driver: string;
  tenant: string;
  latencyMs: number;
  payload: string;
}

const SAMPLE_TENANTS = [
  { id: 'tenant_apex_8092', name: 'Apex Haulage Australia', code: 'APEX', fleetSize: 84 },
  { id: 'tenant_nexus_4107', name: 'Nexus Logistics Pty', code: 'NEXUS', fleetSize: 52 },
  { id: 'tenant_metro_1109', name: 'Metro Express Couriers', code: 'METRO', fleetSize: 120 }
];

export default function TechnicalPlayground() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'simulator' | 'stream'>('simulator');

  const SAMPLE_QUERIES = [
    {
      id: 'dispatches',
      title: 'query GetTenantDispatches($status: "IN_TRANSIT")',
      desc: language === 'ur' 
        ? 'ڈیٹا لوڈر کے ساتھ ڈرائیورز کا مشترکہ ڈیٹا اور فعال ڈسپیچز نکالتا ہے۔' 
        : 'Fetches active driver stops with DataLoader batched driver lookups.'
    },
    {
      id: 'telematics',
      title: 'subscription OnFleetTelemetry($tenantId)',
      desc: language === 'ur'
        ? 'ریڈس پب/سب ویب ساکٹ بروکر سے لائیو جی پی ایس کوآرڈینیٹس سٹریم کرتا ہے۔'
        : 'Streams live GPS coordinates from Redis Pub/Sub WebSocket broker.'
    },
    {
      id: 'xero_sync',
      title: 'mutation TriggerXeroReconciliation($jobId)',
      desc: language === 'ur'
        ? 'زیرو (Xero) اکاؤنٹنگ میں خودکار انوائس بنانے کے لیے غیر متضاد ویب ہک بھیجتا ہے۔'
        : 'Dispatches asynchronous webhook to generate itemized Xero invoice.'
    }
  ];

  // Simulator State
  const [selectedTenantIndex, setSelectedTenantIndex] = useState<number>(0);
  const [selectedQueryIndex, setSelectedQueryIndex] = useState<number>(0);
  const [isExecutingQuery, setIsExecutingQuery] = useState<boolean>(false);
  const [queryOutput, setQueryOutput] = useState<any>(null);
  const [executionStats, setExecutionStats] = useState<{
    latency: number;
    dbQueries: number;
    dataLoaderBatchHits: number;
    tenantMatch: boolean;
  } | null>(null);

  // Stream State
  const [isStreaming, setIsStreaming] = useState<boolean>(true);
  const [events, setEvents] = useState<SimulatedEvent[]>([]);
  const streamBottomRef = useRef<HTMLDivElement | null>(null);

  const selectedTenant = SAMPLE_TENANTS[selectedTenantIndex];
  const selectedQuery = SAMPLE_QUERIES[selectedQueryIndex];

  // Execute Simulated GraphQL Query
  const handleExecuteQuery = () => {
    setIsExecutingQuery(true);
    setQueryOutput(null);

    setTimeout(() => {
      const latency = Math.floor(Math.random() * 20) + 18; // 18ms - 38ms
      let mockResult = {};

      if (selectedQuery.id === 'dispatches') {
        mockResult = {
          data: {
            tenantDispatches: [
              {
                id: `DSP-${selectedTenant.code}-9021`,
                manifestNo: `MNF-2026-X88`,
                status: 'IN_TRANSIT',
                origin: 'Sydney Distribution Center',
                destination: 'Melbourne Freight Depot',
                assignedDriver: {
                  id: `DRV-${selectedTenant.code}-04`,
                  name: selectedTenant.code === 'APEX' ? 'Mark Thompson' : 'David Wilson',
                  licenseStatus: 'VALID_HC',
                  currentSpeedKmh: 88.5
                },
                stopsRemaining: 2,
                tenantIsolationGuard: 'VERIFIED_STRICT_MATCH'
              },
              {
                id: `DSP-${selectedTenant.code}-9022`,
                manifestNo: `MNF-2026-X89`,
                status: 'IN_TRANSIT',
                origin: 'Brisbane Logistics Hub',
                destination: 'Gold Coast Terminal',
                assignedDriver: {
                  id: `DRV-${selectedTenant.code}-12`,
                  name: selectedTenant.code === 'APEX' ? 'Sarah Jenkins' : 'Liam Nguyen',
                  licenseStatus: 'VALID_MC',
                  currentSpeedKmh: 94.0
                },
                stopsRemaining: 1,
                tenantIsolationGuard: 'VERIFIED_STRICT_MATCH'
              }
            ]
          },
          meta: {
            tenantId: selectedTenant.id,
            executionTickMs: latency,
            dataLoaderStatus: 'BATCHED_OK_ZERO_N1'
          }
        };
      } else if (selectedQuery.id === 'telematics') {
        mockResult = {
          data: {
            fleetLiveStream: {
              activeUnits: selectedTenant.fleetSize,
              redisClusterChannel: `telemetry:${selectedTenant.id}`,
              recentPings: [
                { unit: 'TRK-108', lat: -33.8688, lng: 151.2093, heading: 184, p99JitterMs: 1.4 },
                { unit: 'TRK-214', lat: -37.8136, lng: 144.9631, heading: 92, p99JitterMs: 0.9 },
                { unit: 'TRK-302', lat: -27.4698, lng: 153.0251, heading: 270, p99JitterMs: 1.1 }
              ],
              pubsubStatus: 'STREAMING_SUBSCRIBED'
            }
          }
        };
      } else {
        mockResult = {
          data: {
            xeroReconciliation: {
              reconciliationJobId: `XR-${Date.now().toString().slice(-6)}`,
              tenantId: selectedTenant.id,
              xeroTenantLinked: true,
              invoiceDraftGenerated: true,
              totalAmountAud: 4850.75,
              fuelLevyPercent: 12.5,
              lineItemsCount: 4,
              idempotencyKey: `IDEMP-${selectedTenant.code}-${Date.now().toString().slice(-8)}`,
              status: 'SYNCHRONIZED_SUCCESS'
            }
          }
        };
      }

      setQueryOutput(mockResult);
      setExecutionStats({
        latency,
        dbQueries: selectedQuery.id === 'dispatches' ? 2 : 1,
        dataLoaderBatchHits: selectedQuery.id === 'dispatches' ? 2 : 0,
        tenantMatch: true
      });
      setIsExecutingQuery(false);
    }, 400);
  };

  // Initial query run
  useEffect(() => {
    handleExecuteQuery();
  }, [selectedTenantIndex, selectedQueryIndex]);

  // Event stream simulator
  useEffect(() => {
    if (!isStreaming) return;

    const drivers = ['Mark T.', 'David W.', 'Sarah J.', 'Liam N.', 'Elena R.', 'Hassan K.'];
    const vehicles = ['TRK-104', 'VAN-22', 'SEMI-88', 'TRK-310', 'B-DOUBLE-07'];
    const eventTypes: SimulatedEvent['type'][] = [
      'GPS_PING',
      'GEOFENCE_ARRIVAL',
      'STOP_COMPLETED',
      'XERO_INVOICE',
      'DISPATCH_ASSIGNED'
    ];

    const interval = setInterval(() => {
      const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const driver = drivers[Math.floor(Math.random() * drivers.length)];
      const vehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
      const tenant = SAMPLE_TENANTS[Math.floor(Math.random() * SAMPLE_TENANTS.length)].code;
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + '.' + Math.floor(now.getMilliseconds() / 10);

      let payload = '';
      if (type === 'GPS_PING') {
        payload = `coords: [-${(33 + Math.random() * 4).toFixed(4)}, ${(144 + Math.random() * 8).toFixed(4)}], spd: ${(80 + Math.random() * 25).toFixed(1)} km/h`;
      } else if (type === 'GEOFENCE_ARRIVAL') {
        payload = `geofence: "Sydney Gateway Depot #3" entered, trigger: STOP_ARRIVED`;
      } else if (type === 'STOP_COMPLETED') {
        payload = `stop: 03/05 delivered, POD signed: e-signature verified`;
      } else if (type === 'XERO_INVOICE') {
        payload = `invoice draft created in Xero: AUD $${(1200 + Math.random() * 3000).toFixed(2)}`;
      } else {
        payload = `driver assigned to dispatch manifest #${Math.floor(Math.random() * 9000 + 1000)}`;
      }

      const newEvent: SimulatedEvent = {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: timeStr,
        type,
        vehicle,
        driver,
        tenant,
        latencyMs: Math.floor(Math.random() * 15) + 12,
        payload
      };

      setEvents((prev) => [...prev.slice(-19), newEvent]);
    }, 1800);

    return () => clearInterval(interval);
  }, [isStreaming]);

  return (
    <section id="playground" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-inner">
          <Zap className="w-3.5 h-3.5" /> {t.playBadge}
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t.playTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          {t.playSubtitle}
        </p>

        {/* Tab switcher */}
        <div className="flex items-center justify-center gap-3 pt-6">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-blue-400/40 shadow-lg shadow-blue-500/20'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
            }`}
          >
            <Database className="w-4 h-4 text-blue-300" />
            {t.playTabSim}
          </button>
          <button
            onClick={() => setActiveTab('stream')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border cursor-pointer ${
              activeTab === 'stream'
                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white border-cyan-400/40 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 border-white/10 hover:text-white hover:bg-white/5'
            }`}
          >
            <Radio className="w-4 h-4 text-cyan-300" />
            {t.playTabStream}
          </button>
        </div>
      </div>

      {/* Simulator View */}
      {activeTab === 'simulator' && (
        <div className="backdrop-blur-xl bg-slate-900/85 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative z-10">
            {/* Tenant Selector */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {t.playSelectTenant}:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {SAMPLE_TENANTS.map((tenant, idx) => (
                  <button
                    key={tenant.id}
                    onClick={() => setSelectedTenantIndex(idx)}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all flex items-center justify-between text-xs cursor-pointer ${
                      selectedTenantIndex === idx
                        ? 'bg-blue-600/20 border-blue-500 text-white font-bold ring-1 ring-blue-500/30'
                        : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-white hover:bg-slate-950'
                    }`}
                  >
                    <div>
                      <div className="text-white font-semibold">{tenant.name}</div>
                      <div className="text-[11px] font-mono text-slate-400 force-ltr">{tenant.id}</div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {tenant.fleetSize} {language === 'ur' ? 'گاڑیاں' : 'units'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Query Selector */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                {t.playSelectQuery}:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {SAMPLE_QUERIES.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQueryIndex(idx)}
                    className={`p-3 rounded-xl border text-left rtl:text-right transition-all text-xs cursor-pointer ${
                      selectedQueryIndex === idx
                        ? 'bg-cyan-600/20 border-cyan-500 text-white font-bold ring-1 ring-cyan-500/30'
                        : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-white hover:bg-slate-950'
                    }`}
                  >
                    <div className="font-mono text-cyan-300 font-semibold force-ltr">{q.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{q.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Execute Button */}
            <div className="md:col-span-2">
              <button
                onClick={handleExecuteQuery}
                disabled={isExecutingQuery}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-blue-500/20 flex flex-col items-center justify-center gap-1 active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Play className={`w-4 h-4 ${isExecutingQuery ? 'animate-spin' : ''}`} />
                <span>{isExecutingQuery ? (language === 'ur' ? 'پروسیسنگ...' : 'Running...') : t.playExecBtn}</span>
              </button>
            </div>
          </div>

          {/* Performance & Security Stats Header */}
          {executionStats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/10 relative z-10">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5">
                <span className="text-[11px] text-slate-400 block">
                  {language === 'ur' ? 'ایگزیکیوشن تاخیر' : 'Execution Latency'}
                </span>
                <span className="text-base font-extrabold text-emerald-400 font-mono">
                  {executionStats.latency} ms
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {language === 'ur' ? '۵۰ ملی سیکنڈ سے کم' : 'Sub-50ms target'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5">
                <span className="text-[11px] text-slate-400 block">
                  {language === 'ur' ? 'ڈیٹا بیس کالز' : 'Database Roundtrips'}
                </span>
                <span className="text-base font-extrabold text-cyan-400 font-mono">
                  {executionStats.dbQueries} {language === 'ur' ? 'کوئیری (بیچ)' : 'query (batched)'}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {language === 'ur' ? 'N+1 مسئلہ ختم' : 'N+1 eliminated'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5">
                <span className="text-[11px] text-slate-400 block">
                  {language === 'ur' ? 'ڈیٹا لوڈر صورتحال' : 'DataLoader Status'}
                </span>
                <span className="text-base font-extrabold text-purple-400 font-mono">
                  {executionStats.dataLoaderBatchHits > 0 
                    ? (language === 'ur' ? 'کیشے اور بیچ ہٹ' : 'Cache & Batch Hit') 
                    : (language === 'ur' ? 'ڈائریکٹ لوک اپ' : 'Direct Lookup')}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {language === 'ur' ? 'میموری محفوظ' : 'Memory deduplicated'}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5">
                <span className="text-[11px] text-slate-400 block">
                  {language === 'ur' ? 'ٹیننٹ حد بندی' : 'Tenant Boundary'}
                </span>
                <span className="text-base font-extrabold text-green-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {language === 'ur' ? 'محفوظ و الگ' : 'Isolated'}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {language === 'ur' ? 'صفر ڈیٹا اخراج' : 'Zero cross-leak'}
                </span>
              </div>
            </div>
          )}

          {/* Response Terminal */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl relative z-10 font-mono text-xs force-ltr">
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80 bg-slate-900/80 text-slate-300">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-200">GraphQL Scoped Output:</span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
              <div className="text-[11px] text-slate-500">
                JWT Context: <span className="text-slate-300 font-bold">{selectedTenant.code}</span>
              </div>
            </div>
            <pre className="p-5 overflow-x-auto text-emerald-300/90 leading-relaxed max-h-80 overflow-y-auto">
              <code>{JSON.stringify(queryOutput, null, 2)}</code>
            </pre>
          </div>
        </div>
      )}

      {/* Stream View */}
      {activeTab === 'stream' && (
        <div className="backdrop-blur-xl bg-slate-900/85 rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>
                  {language === 'ur' ? 'کلسٹر ریڈس ٹیلی میٹری فیڈ:' : 'Cluster Redis Telemetry Feed:'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  WSS LIVE (TLS 1.3)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {language === 'ur' 
                  ? 'ڈرائیور موبائل ڈیوائسز سے موصول ہونے والے تیز رفتار ٹیلی میٹری سگنلز کی سمیولیشن۔' 
                  : 'Simulating high-throughput telemetry packets emitted from driver mobile devices.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsStreaming(!isStreaming)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                  isStreaming
                    ? 'bg-amber-600/20 border-amber-500/40 text-amber-300 hover:bg-amber-600/30'
                    : 'bg-emerald-600/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30'
                }`}
              >
                {isStreaming ? (
                  <>
                    <Pause className="w-3.5 h-3.5" /> {t.playStreamPause}
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" /> {t.playStreamResume}
                  </>
                )}
              </button>
              <button
                onClick={() => setEvents([])}
                className="px-3 py-2 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> {t.playStreamClear}
              </button>
            </div>
          </div>

          {/* Event Stream Terminal Window */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs max-h-[420px] overflow-y-auto space-y-2 force-ltr">
            {events.length === 0 ? (
              <div className="py-12 text-center text-slate-500 text-xs">
                {language === 'ur' ? 'ریڈس پب/سب ایونٹس کا انتظار ہو رہا ہے...' : 'Waiting for incoming Redis Pub/Sub events...'}
              </div>
            ) : (
              events.map((ev) => {
                let badgeColor = 'bg-blue-500/20 border-blue-500/40 text-blue-300';
                if (ev.type === 'GEOFENCE_ARRIVAL') badgeColor = 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300';
                if (ev.type === 'STOP_COMPLETED') badgeColor = 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
                if (ev.type === 'XERO_INVOICE') badgeColor = 'bg-amber-500/20 border-amber-500/40 text-amber-300';
                if (ev.type === 'DISPATCH_ASSIGNED') badgeColor = 'bg-purple-500/20 border-purple-500/40 text-purple-300';

                return (
                  <div
                    key={ev.id}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/15 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-600" />
                        {ev.timestamp}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${badgeColor}`}>
                        {ev.type}
                      </span>
                      <span className="text-[11px] text-white font-semibold">
                        {ev.vehicle} ({ev.driver})
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        [{ev.tenant}]
                      </span>
                    </div>

                    <div className="text-[11px] text-slate-300 truncate max-w-md font-mono bg-black/40 px-2 py-1 rounded">
                      {ev.payload}
                    </div>

                    <div className="text-[10px] text-emerald-400 font-mono shrink-0">
                      +{ev.latencyMs}ms
                    </div>
                  </div>
                );
              })
            )}
            <div ref={streamBottomRef} />
          </div>
        </div>
      )}
    </section>
  );
}
