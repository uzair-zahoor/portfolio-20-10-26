import { 
  ProjectDetail, 
  ExperienceItem, 
  SkillCategory, 
  ImpactStat, 
  ArchitectureBlueprint, 
  CredentialItem, 
  EndorsementItem 
} from '@/types/portfolio';

export const personalInfoUrdu = {
  name: 'عزیر ظہور',
  initials: 'ع ظ',
  role: 'سافٹ ویئر انجینئر',
  specialization: 'اسکیل ایبل نیکسٹ جے ایس ساس اور ریئل ٹائم ملٹی ٹیننٹ سسٹمز',
  company: 'پکساکو ٹیکنالوجیز (Pixako Technologies)',
  location: 'اسلام آباد، پاکستان',
  email: 'uzairalam724@gmail.com',
  linkedin: 'https://linkedin.com/in/uzair-zahoor-1a46a0194',
  github: 'https://github.com/uzair-zahoor',
  experienceYears: '۳+ سال',
  education: {
    degree: 'بی ایس سافٹ ویئر انجینئرنگ',
    institution: 'ایبٹ آباد یونیورسٹی آف سائنس اینڈ ٹیکنالوجی',
    year: '2022'
  },
  bioSummary: `پروڈکشن گریڈ ویب ایپلی کیشنز اور ملٹی ٹیننٹ ساس (SaaS) پلیٹ فارمز کی تیاری میں ۳+ سال کا پیشہ ورانہ تجربہ رکھنے والے سافٹ ویئر انجینئر۔ نیکسٹ جے ایس (Next.js)، ری ایکٹ (React)، ٹائپ اسکرپٹ (TypeScript)، نوڈ جے ایس (Node.js)، گراف کیو ایل (GraphQL)، مونگو ڈی بی (MongoDB)، اور ریڈس (Redis) میں خصوصی مہارت۔`,
  tagline: 'اسکیل ایبل نیکسٹ جے ایس ساس کی تیاری اور پیچیدہ سسٹمز کا حل۔',
  shortBio: `میں عزیر ظہور ہوں، ایک سافٹ ویئر انجینئر جس کے پاس پروڈکشن گریڈ ری ایکٹ/نیکسٹ جے ایس ویب سسٹمز، ملٹی ٹیننٹ ٹرانسپورٹ ساس پلیٹ فارمز، اور گراف کیو ایل مائیکرو سروسز کی تیاری کا ۳+ سال کا عملی تجربہ ہے۔`
};

export const heroStatsUrdu = [
  { value: '۳+ سال', label: 'فل اسٹیک تجربہ', color: 'text-blue-400' },
  { value: 'ملٹی ٹیننٹ', label: 'ساس (SaaS) پلیٹ فارمز', color: 'text-indigo-400' },
  { value: 'گراف کیو ایل', label: 'اے پی آئیز اور سبسکرپشنز', color: 'text-emerald-400' },
  { value: 'الوٹراک', label: 'ٹرانسپورٹ ساس کور', color: 'text-amber-400' }
];

export const heroBadgesUrdu = [
  'نیکسٹ جے ایس اور ری ایکٹ',
  'ٹائپ اسکرپٹ اور جدید جاوا اسکرپٹ',
  'نوڈ جے ایس اور ایکسپریس',
  'گراف کیو ایل اور اپولو',
  'مونگو ڈی بی اور ریڈس',
  'اے آئی ایجنٹس اور جدید ورک فلوز'
];

export const experienceDataUrdu: ExperienceItem[] = [
  {
    company: 'پکساکو ٹیکنالوجیز (Pixako Technologies Pvt. Ltd.)',
    role: 'سافٹ ویئر انجینئر',
    period: 'فروری 2023 – تا حال',
    type: 'work',
    description: 'الوٹراک (Allotrac) کی مسلسل تیاری اور اصلاح—ایک اعلیٰ صلاحیت کا ملٹی ٹیننٹ ٹرانسپورٹ مینجمنٹ ساس پلیٹ فارم جو لاجسٹکس اور فلیٹ ڈسپیچز کے لیے نیکسٹ جے ایس فرنٹ اینڈ اور نوڈ جے ایس/گراف کیو ایل بیک اینڈ پر چلتا ہے۔',
    bullets: [
      'ٹیننٹ آئسولیشن ڈیٹا ماڈلز ڈیزائن کیے تاکہ مختلف کارپوریٹ اداروں کا ڈیٹا مکمل محفوظ رہے اور ساتھ ہی جابز کی باہمی شراکت داری بھی ممکن ہو۔',
      'ڈرائیور ڈسپیچز، گاڑیوں کے اسٹاپس، اور لائیو فلیٹ ٹیلی میٹری کے لیے گراف کیو ایل کوئیریز، میوٹیشنز، اور ریئل ٹائم سبسکرپشنز تیار کیں۔',
      'ڈرائیورز اور جابز کی صورتحال کو فوری اپ ڈیٹ رکھنے کے لیے ریڈس پب/سب (Redis Pub/Sub) کے ذریعے ریئل ٹائم ویب ساکٹ چینلز بنائے۔',
      'گراف کیو ایل ڈیٹا لوڈر (DataLoader) کے ذریعے ڈیٹا بیس کی تاخیر اور N+1 کا مسئلہ حل کر کے رسپانس ٹائم میں 85 فیصد بہتری حاصل کی۔',
      'خودکار ٹیننٹ انوائسنگ اور مالیاتی رپورٹنگ کے لیے زیرو (Xero) اکاؤنٹنگ انجن اے پی آئیز کو کامیابی سے مربوط کیا۔'
    ],
    tech: ['Next.js', 'TypeScript', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'Redis Pub/Sub', 'DataLoader', 'Xero API']
  },
  {
    company: 'کوڈ میٹکس (Codematics Inc.)',
    role: 'ویب ڈویلپمنٹ انٹرن',
    period: 'اگست 2022 – نومبر 2022',
    type: 'internship',
    description: 'صارف دوست ریسپانسو ویب انٹرفیس بنانے اور کراس براؤزر کوالٹی ایشورنس کے عمل میں کلیدی کردار ادا کیا۔',
    bullets: [
      'HTML5، CSS3، جدید جاوا اسکرپٹ (ES6+)، اور Vue.js کے استعمال سے ریسپانسو ویب اجزاء تیار کیے۔',
      'یوزر انٹرفیس کے مسائل حل کیے اور مختلف اسکرین سائزز پر ایپلی کیشن کے بہترین ڈسپلے کے لیے QA ٹیموں کے ساتھ کام کیا۔',
      'ماڈیولر کمپوننٹ پیٹرنز اور گٹ (Git) ورژن کنٹرول ورک فلوز میں گہری مہارت حاصل کی۔'
    ],
    tech: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Git', 'Responsive Design']
  }
];

export const impactStatsUrdu: ImpactStat[] = [
  {
    value: '۱۰,۰۰۰+',
    label: 'روزانہ فلیٹ ڈسپیچز',
    sublabel: 'ملٹی ٹیننٹ ٹرانسپورٹ آپریشنز میں بلا تعطل پروسیسنگ',
    accentColor: 'from-blue-500 to-cyan-400'
  },
  {
    value: '۸۵%',
    label: 'کوئیری تاخیر میں کمی',
    sublabel: 'گراف کیو ایل ڈیٹا لوڈر بیجنگ اور کیشنگ کے ذریعے حاصل کردہ',
    accentColor: 'from-purple-500 to-indigo-400'
  },
  {
    value: '۹۹.۹۸%',
    label: 'پلیٹ فارم دستیابی',
    sublabel: 'چوبیس گھنٹے گاڑیوں کی لائیو ٹریکنگ کے لیے اعلیٰ معیار',
    accentColor: 'from-emerald-500 to-teal-400'
  },
  {
    value: '۱۰۰%',
    label: 'خودکار انوائسنگ سنک',
    sublabel: 'زیرو اکاؤنٹنگ کے ساتھ صفر غلطی پر مبنی مصالحت',
    accentColor: 'from-amber-500 to-orange-400'
  }
];

export const projectsDataUrdu: Record<string, ProjectDetail> = {
  allotrac: {
    id: 'allotrac',
    title: 'الوٹراک — ملٹی ٹیننٹ ٹرانسپورٹ پلیٹ فارم',
    subtitle: 'پکساکو ٹیکنالوجیز | انٹرپرائز فلیٹ آپریشنز',
    category: 'انٹرپرائز ساس اور فلیٹ لاجسٹکس',
    categoryTag: 'saas',
    badge: 'انٹرپرائز ساس',
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
    description: 'اعلیٰ صلاحیت کا لاجسٹکس اور فلیٹ مینجمنٹ ساس پلیٹ فارم جو ڈرائیور ڈسپیچنگ، ملٹی لیگ اسٹاپ مینجمنٹ، بین الٹیننٹ جابز، اور لائیو ٹیلی میٹری کے لیے تیار کیا گیا ہے۔',
    tech: ['Next.js', 'TypeScript', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'Redis Pub/Sub', 'WebSockets', 'DataLoader'],
    keyPoints: [
      'ملٹی ٹیننٹ ڈیٹا تنہائی اور پارٹنرز کے درمیان جابز کا اشتراک',
      'ریئل ٹائم ویب ساکٹس اور ریڈس پب/سب ٹریکنگ چینلز',
      'زیرو (Xero) اکاؤنٹنگ انضمام اور خودکار انوائس جنریشن'
    ],
    architectureHighlights: [
      'ٹیننٹ آئسولیٹڈ ڈیٹا بیس ماڈلز تشکیل دیے جن سے تمام کارپوریٹ اداروں کے ڈیٹا کی سخت رازداری یقینی بنتی ہے۔',
      'ڈرائیور ڈسپیچز اور روٹ اسٹاپس کے لیے لائیو گراف کیو ایل ریزولورز اور ریئل ٹائم سبسکرپشنز تعمیر کیے۔',
      'گاڑیوں کی لائیو پوزیشنز ٹریک کرنے کے لیے ریڈس پب/سب اور کلسٹرڈ ویب ساکٹس کا نیٹ ورک بنایا۔',
      'خودکار بلنگ اور انوائسنگ کے لیے زیرو کلاؤڈ اکاؤنٹنگ اے پی آئی اور جاب کیوز نافذ کیے۔',
      'ہائی فریکوئنسی ریزولورز میں ڈیٹا بیس پر بوجھ ختم کرنے کے لیے گراف کیو ایل ڈیٹا لوڈر کا نفاذ کیا۔'
    ],
    metrics: [
      { label: 'روزانہ ڈسپیچز', value: '۱۰,۰۰۰+' },
      { label: 'فعال کارپوریٹ ٹیننٹس', value: '۵۰+ کمپنیاں' },
      { label: 'کوئیری P99 تاخیر', value: '<۴۵ms' }
    ],
    problemStatement: 'بڑے لاجسٹک آپریٹرز کو سخت ڈیٹا تنہائی کی ضرورت تھی، لیکن ساتھ ہی انہیں دیگر پارٹنر بیڑوں کے ساتھ منتخب جابز شیئر کرنے اور سرور سلو ہوئے بغیر لائیو GPS ٹریکنگ درکار تھی۔',
    solutionOverview: 'ہم نے ہائبرڈ ملٹی ٹیننٹ مونگو ڈی بی اسکیمہ، ٹیننٹ اسکوپڈ گراف کیو ایل مڈل ویئر، اور ریڈس پب/سب پر مبنی ایونٹ براڈکاسٹر تیار کیا جس نے کارکردگی کو تیز اور محفوظ بنا دیا۔',
    architectureFlow: [
      { step: 1, title: 'تصدیق اور ٹیننٹ شناخت', desc: 'ہر آنے والی درخواست کے JWT ٹوکن سے ٹیننٹ کی شناخت اور رولز تصدیق کیے جاتے ہیں۔' },
      { step: 2, title: 'محفوظ کوئیری ایگزیکیوشن', desc: 'گراف کیو ایل مڈل ویئر خودکار طور پر ڈیٹا بیس کوئیری میں ٹیننٹ کا فلٹر شامل کر دیتا ہے۔' },
      { step: 3, title: 'ریڈس پب/سب براڈکاسٹ', desc: 'ڈسپیچ اپ ڈیٹس ریڈس کے مخصوص چینل پر شائع ہو کر لائیو ویب ساکٹس کے ذریعے ڈسپیچرز تک پہنچتی ہیں۔' },
      { step: 4, title: 'خودکار اکاؤنٹنگ سنک', desc: 'جاب مکمل ہونے پر خودکار ویب ہک چلتا ہے جو زیرو (Xero) میں تصدیق شدہ انوائس بنا دیتا ہے۔' }
    ],
    codeSnippet: {
      title: 'Tenant-Scoped Dispatch Resolver',
      language: 'typescript',
      code: `export const getTenantDispatches = async (_, args, { user, dataLoaders }) => {
  // Enforce tenant boundary at resolver root
  if (!user?.tenantId) throw new AuthenticationError('Unauthorized tenant');
  
  const dispatches = await DispatchModel.find({
    tenantId: user.tenantId,
    status: args.status ?? { $ne: 'ARCHIVED' }
  }).lean();

  // Batched resolution of assigned drivers to eliminate N+1
  return dataLoaders.driverLoader.loadMany(dispatches.map(d => d.driverId));
};`
    }
  },
  telematics: {
    id: 'telematics',
    title: 'فلیٹ آئی کیو ٹیلی میٹکس اور ریئل ٹائم جی پی ایس پائپ لائن',
    subtitle: 'گاڑیوں کی لائیو ٹریکنگ کا حساس انجن',
    category: 'ریئل ٹائم ٹیلی میٹری اور جیو فینسنگ',
    categoryTag: 'realtime',
    badge: 'ریئل ٹائم اسٹریمنگ',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
    description: 'ہائی فریکوئنسی جی پی ایس ٹریکنگ انجن جو کنٹرول سینٹرز کو لائیو کوآرڈینیٹس، روٹ کی تبدیلیوں، رفتار کے انتباہات اور جیو فینس ٹرگرز فوری پہنچاتا ہے۔',
    tech: ['Next.js', 'WebSockets', 'Redis Streams', 'Node.js', 'GeoJSON', 'Leaflet', 'TypeScript'],
    keyPoints: [
      'ریڈس پب/سب کلسٹرز کے ذریعے 100 ملی سیکنڈ سے بھی کم وقت میں GPS معلومات کی ترسیل',
      'جیو فینس پولین باؤنڈری ٹیسٹنگ اور آمد کے خودکار نوٹیفکیشنز',
      'کمزور موبائل نیٹ ورک پر خودکار اور محفوظ دوبارہ کنکشن پروٹوکول'
    ],
    architectureHighlights: [
      'ڈرائیور موبائل ایپ سے ہر ۵ سیکنڈ بعد آنے والے سگنلز کو ریڈس اسٹریمز میں محفوظ اور یکجا کیا۔',
      'کلسٹرڈ ویب ساکٹس کے ذریعے ڈسپیچرز کے براؤزر تک لائیو لوکیشن بغیر تاخیر کے پہنچائی۔',
      'ایس وی جی اور کینوس مارکرز بنائے جو ۵۰۰ سے زائد متحرک گاڑیوں کو بنا فریم ڈراپ کے خوبصورتی سے رینڈر کرتے ہیں۔',
      'جیو فینس ایریا میں داخلے یا روانگی پر اسٹاپ کی خودکار تصدیق کا عمل نافذ کیا۔'
    ],
    metrics: [
      { label: 'ایونٹ تھرو پٹ', value: '۲۵k ایونٹس فی منٹ' },
      { label: 'نیٹ ورک تاخیر', value: '<۸۰ms' },
      { label: 'ڈیٹا ڈیلیوری ریٹ', value: '۹۹.۹۹%' }
    ],
    problemStatement: 'سیکڑوں تیز رفتار گاڑیوں کو ٹریک کرتے وقت ڈسپیچرز کو اسکرین پر نقشے کی سست رفتار اور کنکشن ٹوٹنے کے سنگین مسائل کا سامنا تھا۔',
    solutionOverview: 'ہم نے ریڈس پب/سب پر مبنی میسج بروکر بنایا جو کوآرڈینیٹس کو بفر کر کے صرف تبدیلیوں (delas) کو ہلکے پھلکے ویب ساکٹ پیکٹس کے ذریعے بھیجتا ہے۔',
    architectureFlow: [
      { step: 1, title: 'موبائل ڈرائیور سگنل', desc: 'ڈرائیور ایپ TLS کے ذریعے انکرپٹڈ جی پی ایس ڈیٹا پیکٹ بھیجتی ہے۔' },
      { step: 2, title: 'ریڈس بفر اور جیو فینس', desc: 'ڈیٹا ریڈس اسٹریم میں وصول ہوتا ہے جہاں جیو فینس کی جانچ کی جاتی ہے۔' },
      { step: 3, title: 'ڈیلٹا براڈکاسٹ', desc: 'سرور بینڈوڈتھ بچانے کے لیے صرف فرق والے کوآرڈینیٹس براؤزر تک نشر کرتا ہے۔' }
    ]
  },
  'xero-sync': {
    id: 'xero-sync',
    title: 'ملٹی ٹیننٹ زیرو انوائسنگ اور لیجر آٹومیشن',
    subtitle: 'خودکار مالیاتی آپریشنز مائیکرو سروس',
    category: 'مالیاتی انضمام اور اکاؤنٹنگ اے پی آئیز',
    categoryTag: 'saas',
    badge: 'فنانس آٹومیشن',
    badgeColor: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    description: 'ایونٹ پر مبنی فنانشل مائیکرو سروس جو مکمل شدہ ٹرانسپورٹ جابز، ایندھن کے اضافی چارجز اور ٹول ٹیکسز کو براہ راست زیرو کلاؤڈ اکاؤنٹنگ میں منتقل کرتی ہے۔',
    tech: ['Next.js', 'Node.js', 'Xero OAuth 2.0 API', 'MongoDB', 'BullMQ', 'TypeScript', 'Express.js'],
    keyPoints: [
      'ملٹی ٹیننٹ OAuth 2.0 ٹوکن والٹ مع پس منظر میں خودکار تجدید',
      'ڈپلیکیٹ بلنگ سے بچاؤ کے لیے آئیڈیمپوٹینٹ ویب ہک پروسیسنگ',
      'متحرک ٹیکس ریٹ میپنگ اور آئٹم وائز سرچارج کا خودکار حساب'
    ],
    architectureHighlights: [
      'ایک محفوظ انکرپٹڈ ٹوکن والٹ بنایا جو ہر کلائنٹ کے زیرو کریڈینشلز کو انتہائی حفاظت سے رکھتا ہے۔',
      'ناکام ہونے والی سنک کوششوں کو خودکار طور پر دوبارہ چلانے کے لیے BullMQ اور ریڈس کی کیوز بنائیں۔',
      'پیچیدہ ٹرانسپورٹ مینڈیٹس کو قواعد کے مطابق درست زیرو انوائس آئٹمز میں تبدیل کیا۔',
      'ادائیگیوں کی صورتحال اپ ڈیٹ رکھنے کے لیے دو طرفہ ویب ہکس کا انضمام کیا۔'
    ],
    metrics: [
      { label: 'سنک درستگی', value: '۱۰۰%' },
      { label: 'ماہانہ انوائسنگ', value: '$۲.۵M+' },
      { label: 'ہفتہ وار وقت کی بچت', value: '۴۰ گھنٹے' }
    ],
    problemStatement: 'فنانس ٹیمیں ہر ہفتے گھنٹوں بیٹھ کر ڈلیوری رسیدوں سے ڈیٹا کاپی کرتیں اور پیچیدہ ایندھن چارجز کا حساب لگا کر دستی انوائسز بناتی تھیں۔',
    solutionOverview: 'ہم نے ایک لچکدار ایونٹ پائپ لائن بنائی جو جاب مکمل ہوتے ہی زیرو میں خودکار ڈرافٹ تیار کر دیتی ہے اور بلاتعطل مصالحت فراہم کرتی ہے۔'
  },
  hrms: {
    id: 'hrms',
    title: 'ایڈوانسڈ انٹرپرائز ایچ آر ایم ایس اور حاضری سسٹم',
    subtitle: 'انٹرپرائز افرادی قوت کے اینالیٹکس',
    category: 'افرادی قوت کا انتظام اور ایچ آر ٹیک',
    categoryTag: 'analytics',
    badge: 'افرادی قوت اینالیٹکس',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    description: 'افرادی قوت کے انتظام کا پلیٹ فارم جس میں AG Grid کے طاقتور ڈیش بورڈز، پرانے MS Access لاگز کا سنک، اور تاریخ کے مطابق حاضری کے تجزیات شامل ہیں۔',
    tech: ['Next.js', 'React.js', 'GraphQL', 'Node.js', 'MongoDB', 'AG Grid', 'Express.js', 'REST APIs'],
    keyPoints: [
      'گراف کیو ایل اے پی آئی مائیکرو سروسز اور انتظامی اختیارات (RBAC)',
      'ورچوئلائزڈ قطاروں کے ساتھ AG Grid حاضری اینالیٹکس ڈیش بورڈز',
      'پرانے ایم ایس ایکسس (MS Access) ڈیٹا بیس سے لاگز کا سنک اور ڈیٹا ٹرانسفارمیشن'
    ],
    architectureHighlights: [
      'ایک سیکنڈ سے بھی کم وقت میں رسپانس دینے والی گراف کیو ایل اٹینڈنس مائیکرو سروسز تیار کیں۔',
      'لاکھوں ملازمین کے لاگز کو بغیر کسی رکاوٹ کے دیکھنے کے لیے ورچوئلائزڈ AG Grid ٹیبلز بنائے۔',
      'تاریخی حاضری رپورٹس تیار کرنے کے لیے پرانے لوکل سسٹم کے ڈیٹا کو جدید کلاؤڈ فارمیٹ میں بدلا۔',
      'انتظامی درجہ بندی کے مطابق محفوظ رول بیسڈ پرمشنز (RBAC) لاگو کیے۔'
    ],
    metrics: [
      { label: 'رینڈر شدہ لاگ ریکارڈز', value: '۵۰۰,۰۰۰+' },
      { label: 'گرڈ اسکرولنگ اسپیڈ', value: '۶۰ FPS' },
      { label: 'تاریخی ڈیٹا سنک', value: '۵ سال کا ڈیٹا' }
    ],
    problemStatement: 'کمپنیاں پرانے لوکل سسٹم کی وجہ سے پریشان تھیں جہاں ڈیٹا سست تھا، تنخواہوں کی رپورٹنگ میں تاخیر ہوتی تھی، اور جدید تجزیات کی سہولت موجود نہ تھی۔',
    solutionOverview: 'ہم نے جدید گراف کیو ایل سروسز اور AG Grid فرنٹ اینڈ ڈیزائن کیا جو ۵ لاکھ سے زائد ریکارڈز کو پلک جھپکتے ہی فلٹر اور رینڈر کر دیتا ہے۔'
  },
  'genai-docs': {
    id: 'genai-docs',
    title: 'جین اے آئی مینی فیسٹ اور لاجسٹکس دستاویز ایجنٹ',
    subtitle: 'خودکار RAG اور منظم معلومات کا اخراج',
    category: 'اے آئی سسٹمز اور دستاویزات کی خودکاریت',
    categoryTag: 'ai',
    badge: 'اے آئی اور جدید ٹولز',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    description: 'خودکار دستاویز پارسنگ ایجنٹ جو Gemini 1.5 Pro اور RAG ویکٹر ورک فلوز کا استعمال کر کے دھندلے پی ڈی ایفز اور اسکین شدہ رسیدوں سے مطلوبہ ڈیٹا فوراً نکالتا ہے۔',
    tech: ['Next.js', 'Gemini 1.5 API', 'TypeScript', 'Vector Embeddings', 'RAG Pipelines', 'Tailwind CSS'],
    keyPoints: [
      'تصویر کشی شدہ باربرداری رسیدوں سے زیرو شاٹ منظم JSON ڈیٹا حاصل کرنا',
      'خطرناک سامان کے کوڈز اور فریٹ قوانین پر RAG ویکٹر سرچ کا نفاذ',
      'شک کی صورت میں انسانی تصدیق کے لیے کانفیڈنس اسکورنگ کا طریقہ کار'
    ],
    architectureHighlights: [
      'ڈرائیوروں کی ہاتھ سے لکھی گئی ڈلیوری رسیدوں کو سمجھنے کے لیے گوگل جیمنائی ملٹی موڈل اے پی آئیز کو جوڑا۔',
      'ایسا JSON پارسر ڈیزائن کیا جو ڈیٹا بیس کے ساتھ 100% مطابقت رکھتا ہے۔',
      'مبہم سامان کی درجہ بندی کو خطرناک اشیاء کے رجسٹر کے ساتھ ملانے کے لیے ویکٹر سرچ بنائی۔',
      'نیکسٹ جے ایس میں اصل دستاویز اور اخذ شدہ ڈیٹا کو ساتھ ساتھ دیکھنے کا انٹرفیس بنایا۔'
    ],
    metrics: [
      { label: 'ڈیٹا نکالنے کی درستگی', value: '۹۶.۴%' },
      { label: 'پروسیسنگ کی رفتار', value: '۲.۱ سیکنڈ / صفحہ' },
      { label: 'دستی انٹری میں کمی', value: '۷۰%' }
    ],
    problemStatement: 'لاجسٹک کوآرڈینیٹرز ہاتھ سے لکھی گئی کاغذی رسیدوں اور بلوں کو گھنٹوں ڈیٹا بیس میں دستی طور پر درج کرتے تھے جس میں غلطیوں کا اندیشہ رہتا تھا۔',
    solutionOverview: 'ایک ذہین AI سسٹم بنایا گیا جو کمپیوٹر وژن اور جدید زبان کے ماڈلز کا استعمال کر کے رسیدوں سے منٹوں میں درست ڈیٹا ڈیٹا بیس میں ڈال دیتا ہے۔'
  },
  'dispatch-board': {
    id: 'dispatch-board',
    title: 'ہائی تھرو پٹ ریئل ٹائم ڈسپیچ بورڈ',
    subtitle: 'انٹرایکٹو فلیٹ شیڈولنگ اور جاب کوآرڈینیشن',
    category: 'ریئل ٹائم آپریشنز اور ویب ساکٹس',
    categoryTag: 'realtime',
    badge: 'انٹرایکٹو یو آئی',
    badgeColor: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
    description: 'انتہائی تیز رفتار نیکسٹ جے ایس کنبان اور کیلنڈر گرڈ جو فلیٹ مینیجرز کو وزن کی حد اور ڈرائیور تھکاوٹ کی خودکار تصدیق کے ساتھ جابز تفویض کرنے کی سہولت دیتا ہے۔',
    tech: ['Next.js', 'React 19', 'GraphQL Subscriptions', 'Tailwind CSS', 'Framer Motion Patterns', 'TypeScript'],
    keyPoints: [
      'نیٹ ورک بند ہونے کی صورت میں خودکار بحالی کے ساتھ آپٹیمسٹک گراف کیو ایل یو آئی اپ ڈیٹس',
      'ڈرائیور کے کام کے اوقات اور گاڑی کے وزن کے تصادم کی خودکار جانچ',
      'ایک وقت میں متعدد ڈسپیچرز کے لیے لائیو کرسر اور لاک انڈیکیٹرز'
    ],
    architectureHighlights: [
      'فوری رسپانس کے لیے آپٹیمسٹک یو آئی میوٹیشنز تیار کیں تاکہ شیڈولنگ میں ایک سیکنڈ کا بھی وقفہ نہ آئے۔',
      'کئی ڈسپیچرز کے درمیان ڈیٹا سنک رکھنے کے لیے گراف کیو ایل ویب ساکٹ ٹاپکس کا استعمال کیا۔',
      'ڈرائیور کے آرام کے قوانین اور گاڑی کی بوجھ کی حد جانچنے کے لیے رولز انجن بنایا۔',
      'ماؤس کے بغیر تیزی سے کام کرنے کے لیے کی بورڈ شارٹ کٹس کا اضافہ کیا۔'
    ],
    metrics: [
      { label: 'جاب تفویض کا وقت', value: '۳ گنا تیز' },
      { label: 'سنک تاخیر', value: '<۵۰ms' },
      { label: 'بیک وقت صارفین', value: '۱۰۰+' }
    ],
    problemStatement: 'جب کئی ڈسپیچرز ایک ساتھ کام کرتے تھے تو اکثر دو آپریٹر ایک ہی ڈرائیور کو بیک وقت مختلف راستوں پر تفویض کر دیتے تھے۔',
    solutionOverview: 'ہم نے ریڈس کے ڈسٹری بیوٹڈ لاکس اور ریئل ٹائم سبسکرپشنز کے ذریعے ایک ایسا سسٹم بنایا جو کسی گاڑی پر کام شروع ہوتے ہی دیگر اسکرینز پر اسے فوراً لاک دکھا دیتا ہے۔'
  }
};

export const architectureBlueprintsUrdu: ArchitectureBlueprint[] = [
  {
    id: 'multi-tenant-isolation',
    title: 'ملٹی ٹیننٹ ساس ڈیٹا آئسولیشن آرکیٹیکچر',
    category: 'انٹرپرائز سیکیورٹی اور ڈیٹا بیس انجینئرنگ',
    tagline: 'مکمل ڈیٹا تنہائی اور پارٹنرز کے درمیان محفوظ وسائل کی شراکت داری کا نفاذ۔',
    summary: 'الوٹراک جیسے لاجسٹکس ساس پلیٹ فارمز میں ہر کمپنی کے ڈیٹا کی مکمل رازداری برقرار رہنی چاہیے، جبکہ منتخب جابز پارٹنر کمپنیوں کو آؤٹ سورس بھی کی جا سکیں۔ ہم نے مونگو ڈی بی میں مڈل ویئر کی مدد سے ایسا سیکیورٹی ڈھانچہ نافذ کیا جو ڈیٹا کے اخراج کو ناممکن بناتا ہے۔',
    diagramSteps: [
      {
        title: '۱. جے ڈبلیو ٹی کنٹیکسٹ کا معائنہ',
        desc: 'ہر ایچ ٹی ٹی پی یا ویب ساکٹ درخواست پر JWT ٹوکن سے ٹیننٹ کی شناخت اور اس کے اختیارات کی مکمل جانچ کی جاتی ہے۔',
        highlight: 'سیکیورٹی باؤنڈری'
      },
      {
        title: '۲. مڈل ویئر کوئیری انفلٹریشن',
        desc: 'گراف کیو ایل مڈل ویئر ڈیٹا بیس میں جانے والی ہر کوئیری میں خودکار طور پر ٹیننٹ کا شناختی فلٹر شامل کرتا ہے۔',
        highlight: 'صفر اخراج کی گارنٹی'
      },
      {
        title: '۳. باہمی اشتراک کا وفد',
        desc: 'سب کنٹریکٹ کی گئی جابز کے لیے الگ سے محدود ٹوکن جاری ہوتا ہے تاکہ اصل ڈیٹا دیکھے بغیر شراکت دار کام کر سکے۔',
        highlight: 'انتخابی رسائی'
      },
      {
        title: '۴. انکرپٹڈ آڈٹ لاگنگ',
        desc: 'ادارہ جاتی احتساب اور سیکیورٹی تصدیق کے لیے ہر ایکشن کا ان مٹ آڈٹ ٹریل محفوظ کیا جاتا ہے۔',
        highlight: 'مکمل آڈٹ لاگ'
      }
    ],
    benchmarks: [
      { label: 'ڈیٹا لیک کی شرح', value: '۰.۰۰%', subtext: '۳+ سالوں میں ٹیننٹس کے درمیان صفر اخراج' },
      { label: 'سیکیورٹی پروسیسنگ وقت', value: '<۱.۲ms', subtext: 'مڈل ویئر جانچ کا اوسط وقت' },
      { label: 'ملٹی ٹیننٹ اسکیل', value: '۵۰+ ادارے', subtext: 'بیک وقت فعال کارپوریٹ کلائنٹس' }
    ],
    codeTitle: 'middleware/tenantIsolationGuard.ts',
    codeSnippet: `// Tenant isolation middleware wrapping Mongoose queries
export function applyTenantIsolation(schema: Schema) {
  schema.pre(['find', 'findOne', 'countDocuments', 'updateMany'], function () {
    const tenantId = this.getOptions().tenantId;
    if (!tenantId) {
      throw new Error('[Security Exception] Operation attempted without verified tenantId');
    }
    
    // Auto-inject tenant discriminator unless cross-tenant delegation token exists
    const filter = this.getFilter();
    if (!filter.isDelegatedJob) {
      this.where({ tenantId });
    }
  });
}`
  },
  {
    id: 'redis-pubsub-telemetry',
    title: 'ہائی تھرو پٹ ریڈس پب/سب اور ویب ساکٹ ٹیلی میٹری',
    category: 'ریئل ٹائم اسٹریمنگ اور میسج کیوز',
    tagline: 'ڈرائیور کے موبائل سے ڈسپیچر کی اسکرین تک ۱۰۰ ملی سیکنڈ سے بھی کم وقت میں جی پی ایس ڈیٹا کی ترسیل۔',
    summary: 'جب درجنوں بیڑے سیکڑوں گاڑیاں بیک وقت چلاتے ہیں تو روایتی ڈیٹا بیس پولنگ سرور کو جام کر دیتی ہے۔ ہم نے کلسٹرڈ ویب ساکٹ ورکرز کے ساتھ ایونٹ ڈریون ریڈس پب/سب بیک پلین ڈیزائن کیا جس سے بلا تعطل تیز رفتار اپ ڈیٹس ملیں۔',
    diagramSteps: [
      {
        title: '۱. موبائل ڈرائیور انویسٹی گیشن',
        desc: 'موبائل ایپس محفوظ TLS گیٹ وے پر ہر ۵ سیکنڈ بعد جی پی ایس پنگ سرور کو بھیجتی ہیں۔',
        highlight: '۵ سیکنڈ پنگ'
      },
      {
        title: '۲. ریڈس کلسٹر ڈسٹری بیوشن',
        desc: 'کوآرڈینیٹس ٹیننٹ اور روٹ کے حساب سے ریڈس کے مخصوص چینلز پر فوری تقسیم ہوتے ہیں۔',
        highlight: 'تقسیم شدہ چینلز'
      },
      {
        title: '۳. ڈپلیکیٹ خاتمہ اور جیو فینس جانچ',
        desc: 'ورکر خودکار طور پر گاڑی کے مقام کا موازنہ جیو فینس سے کر کے آمد کا ٹائم ریکارڈ کرتا ہے۔',
        highlight: 'جیو فینس کا تعین'
      },
      {
        title: '۴. ری ایکٹو ڈسپیچر براڈکاسٹ',
        desc: 'آن لائن براؤزر سیشنز ڈیٹا بیس رائٹ کی تاخیر کے بغیر براہ راست لائیو لوکیشن موصول کرتے ہیں۔',
        highlight: '<۸۰ms مکمل چکر'
      }
    ],
    benchmarks: [
      { label: 'P95 ایونٹ تاخیر', value: '۶۴ms', subtext: 'ڈرائیور فون سے کنٹرول روم تک' },
      { label: 'سرور میموری کی بچت', value: '-۶۵%', subtext: 'پولنگ کے مقابلے میں نمایاں کمی' },
      { label: 'چوٹی کی انٹیک', value: '۲۵,۰۰۰ / منٹ', subtext: 'بیک وقت پروسیس شدہ جی پی ایس پوائنٹس' }
    ],
    codeTitle: 'services/telemetryStreamService.ts',
    codeSnippet: `// Redis Pub/Sub WebSocket broadcast handler
export async function broadcastDriverTelemetry(driverId: string, tenantId: string, coords: Coords) {
  const channel = \`telemetry:\${tenantId}\`;
  const payload = JSON.stringify({
    driverId,
    coords,
    timestamp: Date.now()
  });

  // Zero-latency publish across clustered Node.js worker nodes
  await redisClient.publish(channel, payload);

  // Asynchronously buffer latest point for instant new-session hydration
  await redisClient.hset(\`fleet:\${tenantId}:latest\`, driverId, payload);
}`
  },
  {
    id: 'dataloader-n1-optimization',
    title: 'گراف کیو ایل ڈیٹا لوڈر اور N+1 تاخیر کی اصلاح',
    category: 'اے پی آئی پرفارمنس اور کوئیری آپٹیمائزیشن',
    tagline: '۱۰۰ سے زائد اندرونی کوئیریز کو صرف ۲ بلک لوک اپس میں تبدیل کر کے ۴۰ ملی سیکنڈ سے کم رسپانس کا حصول۔',
    summary: 'لاجسٹک اے پی آئیز میں جب ۵۰ ڈسپیچز کی لسٹ منگوائی جاتی ہے اور ہر ایک کے لیے ڈرائیور، گاڑی اور کسٹمر کا ڈیٹا الگ منگوایا جائے تو سرور پر ۱۵۰ سے زائد راؤنڈ ٹرپس بن جاتے ہیں۔ ڈیٹا لوڈر بیچنگ کے ذریعے ہم نے اسے سمیٹ کر صرف ۳ آپریشنز میں سمیٹ دیا۔',
    diagramSteps: [
      {
        title: '۱. کوئیری کی آمد (۵۰ ڈسپیچز)',
        desc: 'کلائنٹ ڈسپیچز کے ساتھ تفویض کردہ ڈرائیور، گاڑی اور کمپنی کی معلومات طلب کرتا ہے۔',
        highlight: 'پیچیدہ کوئیری'
      },
      {
        title: '۲. ڈیٹا لوڈر جمع کرنے کی ونڈو',
        desc: 'ڈیٹا لوڈر سنگل ایونٹ لوپ ٹک میں تمام مطلوبہ کیز (IDs) کو یکجا کرتا ہے۔',
        highlight: 'مائیکرو بیجنگ'
      },
      {
        title: '۳. واحد $in کوئیری کا نفاذ',
        desc: '۵۰ انفرادی کالز کے بجائے ڈیٹا بیس میں صرف ایک جامع کوئیری چلائی جاتی ہے۔',
        highlight: 'بلک لوک اپ'
      },
      {
        title: '۴. اسکوپڈ میموری کیشنگ',
        desc: 'نتائج کو فوری طور پر میپ کر کے کیشے میں رکھا جاتا ہے تاکہ دہرائی جانے والی کوئیریز ختم ہو جائیں۔',
        highlight: 'صفر دہرائی'
      }
    ],
    benchmarks: [
      { label: 'اے پی آئی رسپانس ٹائم', value: '۳۸ms (پہلے ۴۵۰ms تھا)', subtext: '۹۱ فیصد تیز رفتار بہتری' },
      { label: 'ڈیٹا بیس راؤنڈ ٹرپس', value: '۳ (پہلے ۱۵۱ تھے)', subtext: '۹۸ فیصد کم نیٹ ورک کالز' },
      { label: 'ڈیٹا بیس CPU کا استعمال', value: '-۴۸%', subtext: 'سرور لوڈ میں شاندار کمی' }
    ],
    codeTitle: 'loaders/driverBatchLoader.ts',
    codeSnippet: `import DataLoader from 'dataloader';
import { DriverModel } from '@/models/driver';

export function createDriverLoader(tenantId: string) {
  return new DataLoader<string, Driver>(async (driverIds) => {
    // Single consolidated database query for all requested IDs
    const drivers = await DriverModel.find({
      tenantId,
      _id: { $in: driverIds }
    }).lean();

    // Preserve exact ordering required by DataLoader contracts
    const driverMap = new Map(drivers.map(d => [d._id.toString(), d]));
    return driverIds.map(id => driverMap.get(id.toString()) || null);
  }, { cache: true });
}`
  }
];

export const credentialsDataUrdu: CredentialItem[] = [
  {
    title: 'بی ایس سافٹ ویئر انجینئرنگ',
    issuer: 'ایبٹ آباد یونیورسٹی آف سائنس اینڈ ٹیکنالوجی',
    period: '2018 – 2022',
    type: 'degree',
    badge: 'اعزاز کے ساتھ گریجویشن',
    description: 'چار سالہ جامع ڈگری جس میں ڈسٹری بیوٹڈ سسٹمز، سافٹ ویئر آرکیٹیکچر، الگورتھم ڈیزائن، ڈیٹا بیس سسٹمز اور جدید ویب ایپلی کیشنز کا احاطہ کیا گیا۔',
    skills: ['سافٹ ویئر آرکیٹیکچر', 'ڈیٹا اسٹرکچرز اور الگورتھمز', 'ڈیٹا بیس سسٹمز', 'ڈسٹری بیوٹڈ سسٹمز']
  },
  {
    title: 'انٹرپرائز نیکسٹ جے ایس اور ری ایکٹ فل اسٹیک آرکیٹیکچر',
    issuer: 'پروڈکشن انجینئرنگ اسپیشلائزیشن',
    period: '2023 – تا حال',
    type: 'specialization',
    badge: 'مرکزی مہارت',
    description: 'نیکسٹ جے ایس ایپ راؤٹر، ری ایکٹ سرور کمپوننٹس، سرور ایکشنز، آپٹیمسٹک یو آئی، اور اسٹیٹ مینجمنٹ میں اعلیٰ مہارت۔',
    skills: ['Next.js App Router', 'React 19', 'Server Actions', 'Turbopack', 'Tailwind CSS']
  },
  {
    title: 'ہائی پرفارمنس گراف کیو ایل اور ڈسٹری بیوٹڈ سسٹمز',
    issuer: 'پروڈکشن امپلیمینٹیشن',
    period: '2023 – تا حال',
    type: 'certification',
    badge: 'آرکیٹیکچر ایکسپرٹ',
    description: 'پیچیدہ گراف کیو ایل اسکیمہ ڈیزائن، اپولو سرور ریزولورز، لائیو ویب ساکٹ سبسکرپشنز، اور ڈیٹا لوڈر بیجنگ کا کامیاب نفاذ۔',
    skills: ['Apollo Server', 'GraphQL Subscriptions', 'DataLoader', 'Schema Design', 'Microservices']
  },
  {
    title: 'ریئل ٹائم پب/سب اور کیشنگ مع ریڈس',
    issuer: 'پروڈکشن ساس امپلیمینٹیشن',
    period: '2023 – تا حال',
    type: 'specialization',
    badge: 'ہائی تھرو پٹ اسٹریمنگ',
    description: 'ریڈس پب/سب ٹیلی میٹری پائپ لائنز، تقسیم شدہ لاکس، ان میموری کیشنگ اور ہائی فریکوئنسی ایونٹ اسٹریمنگ کا وسیع تجربہ۔',
    skills: ['Redis Pub/Sub', 'Redis Streams', 'Distributed Locks', 'WebSockets', 'Real-Time Streaming']
  }
];

export const endorsementsDataUrdu: EndorsementItem[] = [
  {
    name: 'سینئر انجینئرنگ رفیق',
    role: 'لیڈ آرکیٹیکٹ',
    organization: 'پکساکو ٹیکنالوجیز',
    initials: 'ایل اے',
    tag: 'تکنیکی عمدگی',
    context: 'الوٹراک ملٹی ٹیننٹ آرکیٹیکچر پر مشترکہ کام',
    quote: 'عزیر پیچیدہ ملٹی ٹیننٹ سسٹمز کو غیر معمولی مہارت سے سمجھتے ہیں۔ انہوں نے ہمارے گراف کیو ایل ریزولورز اور ریڈس ٹیلی میٹری سسٹم کی باگ ڈور سنبھالی اور سست کوئیریز کو 50 ملی سیکنڈ سے بھی کم وقت میں سمیٹ دیا۔ ان کی انجینئرنگ رفتار اور نظم و ضبط واقعی قابل تعریف ہے۔'
  },
  {
    name: 'ساس پروڈکٹ مینیجر',
    role: 'پروڈکٹ لیڈ',
    organization: 'ٹرانسپورٹ فلیٹ سلوشنز',
    initials: 'پی ایم',
    tag: 'نمایاں نتائج کی فراہمی',
    context: 'ڈسپیچ اور انوائسنگ فیچرز کی نگرانی',
    quote: 'عزیر نے کاروباری ضروریات اور پائیدار بیک اینڈ آرکیٹیکچر کے درمیان شاندار پل کا کردار ادا کیا۔ زیرو اکاؤنٹنگ اے پی آئی اور لائیو ڈسپیچ بورڈ کے انضمام سے ہمارے آپریشنل کلائنٹس کے ہر ماہ سیکڑوں قیمتی گھنٹے بچے۔'
  },
  {
    name: 'فل اسٹیک ڈویلپر ساتھی',
    role: 'سافٹ ویئر انجینئر',
    organization: 'پکساکو ٹیکنالوجیز',
    initials: 'ایس ای',
    tag: 'ٹیم باہمی تعاون',
    context: 'نیکسٹ جے ایس اور نوڈ جے ایس پر پیئر پروگرامنگ',
    quote: 'عزیر کے ساتھ کام کرنا ہمیشہ ایک بہترین تجربہ رہا ہے۔ وہ صاف ستھرا اور ٹائپ سیف کوڈ لکھتے ہیں، قابل اعتبار اے پی آئی کنٹریکٹس بناتے ہیں، اور پیچیدہ ریئل ٹائم چیلنجز میں ہمیشہ ساتھیوں کی رہنمائی کے لیے تیار رہتے ہیں۔'
  }
];

export const skillsCategoriesUrdu: SkillCategory[] = [
  {
    title: 'پروگرامنگ زبانیں',
    subtitle: 'بنیادی بنیادیں',
    iconName: 'code',
    accentBorder: 'hover:border-blue-500/40',
    accentBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    skills: [
      { name: 'TypeScript', highlight: true, colorClass: 'bg-blue-900/40 border-blue-500/50 text-blue-300' },
      { name: 'JavaScript (ES6+)', highlight: true, colorClass: 'bg-amber-900/30 border-amber-500/40 text-amber-300' },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3 / Modern CSS', highlight: false }
    ]
  },
  {
    title: 'فرنٹ اینڈ فریم ورکس',
    subtitle: 'ری ایکٹو اور متحرک یوزر انٹرفیس',
    iconName: 'layout',
    accentBorder: 'hover:border-indigo-500/40',
    accentBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    skills: [
      { name: 'Next.js (App Router)', highlight: true, colorClass: 'bg-indigo-900/40 border-indigo-500/50 text-indigo-300' },
      { name: 'React.js (v18/19)', highlight: true, colorClass: 'bg-cyan-900/30 border-cyan-500/40 text-cyan-300' },
      { name: 'Tailwind CSS', highlight: true, colorClass: 'bg-sky-900/30 border-sky-500/40 text-sky-300' },
      { name: 'Material UI (MUI)', highlight: false },
      { name: 'AG Grid Virtualization', highlight: true, colorClass: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300' },
      { name: 'React Hook Form', highlight: false }
    ]
  },
  {
    title: 'بیک اینڈ اور گراف کیو ایل',
    subtitle: 'اے پی آئیز اور مائیکرو سروسز',
    iconName: 'server',
    accentBorder: 'hover:border-emerald-500/40',
    accentBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    skills: [
      { name: 'Node.js', highlight: true, colorClass: 'bg-emerald-900/30 border-emerald-500/40 text-emerald-300' },
      { name: 'GraphQL APIs', highlight: true, colorClass: 'bg-pink-900/30 border-pink-500/40 text-pink-300' },
      { name: 'Express.js', highlight: false },
      { name: 'Apollo Server', highlight: false },
      { name: 'REST APIs', highlight: false },
      { name: 'DataLoader Batching', highlight: true, colorClass: 'bg-purple-900/30 border-purple-500/40 text-purple-300' }
    ]
  },
  {
    title: 'ڈیٹا بیسز اور پب/سب',
    subtitle: 'ڈیٹا مینجمنٹ اور میسجنگ',
    iconName: 'database',
    accentBorder: 'hover:border-red-500/40',
    accentBg: 'bg-red-500/20 text-red-400 border-red-500/30',
    skills: [
      { name: 'MongoDB', highlight: true, colorClass: 'bg-green-900/30 border-green-500/40 text-green-300' },
      { name: 'Redis Pub/Sub', highlight: true, colorClass: 'bg-red-900/30 border-red-500/40 text-red-300' },
      { name: 'Mongoose ORM', highlight: false },
      { name: 'Aggregation Pipelines', highlight: true, colorClass: 'bg-teal-900/30 border-teal-500/40 text-teal-300' },
      { name: 'WebSockets', highlight: true, colorClass: 'bg-cyan-900/30 border-cyan-500/40 text-cyan-300' }
    ]
  },
  {
    title: 'ساس آرکیٹیکچر',
    subtitle: 'سیکیورٹی اور آئسولیشن',
    iconName: 'shield',
    accentBorder: 'hover:border-purple-500/40',
    accentBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    skills: [
      { name: 'Multi-Tenant Isolation', highlight: true, colorClass: 'bg-purple-900/30 border-purple-500/40 text-purple-300' },
      { name: 'Role-Based Auth (RBAC)', highlight: true, colorClass: 'bg-blue-900/30 border-blue-500/40 text-blue-300' },
      { name: 'JWT Security', highlight: false },
      { name: 'Xero API Integration', highlight: true, colorClass: 'bg-sky-900/30 border-sky-500/40 text-sky-300' }
    ]
  },
  {
    title: 'اے آئی اور ڈیولپر ٹولز',
    subtitle: 'جدید ورک فلوز اور مانیٹرنگ',
    iconName: 'git',
    accentBorder: 'hover:border-cyan-500/40',
    accentBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    skills: [
      { name: 'LLM & Gemini API', highlight: true, colorClass: 'bg-amber-900/30 border-amber-500/40 text-amber-300' },
      { name: 'RAG Vector Workflows', highlight: true, colorClass: 'bg-orange-900/30 border-orange-500/40 text-orange-300' },
      { name: 'Git & GitHub', highlight: false },
      { name: 'CI/CD Pipelines', highlight: false },
      { name: 'Agile & Code Reviews', highlight: false }
    ]
  }
];
