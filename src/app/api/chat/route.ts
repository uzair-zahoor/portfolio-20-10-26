import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, language } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const trimmedPrompt = prompt.trim().toLowerCase();
    const isUrduQuery = language === 'ur' || /[\u0600-\u06FF]/.test(prompt);

    // Check if an external Gemini API key is provided
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const systemPrompt = `You are an AI representative for Uzair Zahoor (عزیر ظہور), a Software Engineer with 3+ years of experience based in Islamabad, Pakistan.
Key details about Uzair:
- Current Role: Software Engineer at Pixako Technologies Pvt. Ltd. (Feb 2023 - Present).
- Primary Work: Allotrac (a multi-tenant transport management SaaS platform), GraphQL APIs, real-time WebSockets, Redis Pub/Sub, MongoDB aggregations, DataLoader optimization, Xero API integrations.
- Tech Stack: TypeScript, JavaScript, React.js, Next.js, Node.js, Express.js, GraphQL, MongoDB, Redis, AG Grid, Tailwind CSS.
- Education: BS Software Engineering from Abbottabad University of Science and Technology (2022).
- Email: uzairalam724@gmail.com
- LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
- GitHub: https://github.com/uzair-zahoor
${isUrduQuery ? 'CRITICAL: Answer in natural, professional, and grammatically accurate Urdu (اردو). Preserve technical names like Next.js, GraphQL, Redis, Allotrac, etc.' : 'Answer questions accurately, professionally, and warmly on behalf of Uzair.'}`;

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        const geminiRes = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        });

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const botText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (botText) {
            return NextResponse.json({ reply: botText });
          }
        }
      } catch (err) {
        console.error('Gemini API call failed, falling back to local expert engine:', err);
      }
    }

    // Intelligent local expert engine tailored for Uzair's engineering profile
    let reply = '';

    if (isUrduQuery) {
      // Urdu Response Engine
      if (trimmedPrompt.includes('pixako') || trimmedPrompt.includes('پکساکو') || trimmedPrompt.includes('allotrac') || trimmedPrompt.includes('الوٹراک') || trimmedPrompt.includes('ٹرانسپورٹ') || trimmedPrompt.includes('فلیٹ')) {
        reply = `پکساکو ٹیکنالوجیز (فروری 2023 – تا حال) میں عزیر الوٹراک (Allotrac) ساس کے مرکزی انجینئر ہیں:
• ملٹی ٹیننٹ تنہائی: ۵۰ سے زائد کارپوریٹ اداروں کے ڈیٹا کی سخت حفاظت اور باہمی جاب شیئرنگ کے ماڈلز تشکیل دیے۔
• ریئل ٹائم آپریشنز: ڈرائیورز کی لائیو ٹریکنگ کے لیے گراف کیو ایل سبسکرپشنز اور ریڈس پب/سب ویب ساکٹ چینلز بنائے۔
• کوئیری اسپیڈ: ڈیٹا لوڈر بیچنگ کے ذریعے P99 رسپانس ٹائم میں 85 فیصد کمی کی (450ms سے گھٹ کر 38ms)۔
• فنانشل آٹومیشن: ماہانہ $2.5M+ بلنگ کے لیے زیرو (Xero) اکاؤنٹنگ اے پی آئی اور BullMQ جاب کیوز کا کامیاب انضمام کیا۔`;
      } else if (trimmedPrompt.includes('architecture') || trimmedPrompt.includes('آرکیٹیکچر') || trimmedPrompt.includes('multi-tenant') || trimmedPrompt.includes('ملٹی ٹیننٹ') || trimmedPrompt.includes('تنہائی')) {
        reply = `عزیر کے سسٹمز آرکیٹیکچر کی اہم خصوصیات:
۱. ملٹی ٹیننٹ ساس تنہائی: محفوظ JWT تصدیق، مڈل ویئر کی سطح پر ڈیٹا بیس فلٹرز، اور منتخب باہمی شراکت داری کے ٹوکنز۔
۲. ریڈس پب/سب ٹیلی میٹری: کلسٹرڈ ویب ساکٹس کے ذریعے ۱۰۰ ملی سیکنڈ سے کم وقت میں گاڑیوں کے جی پی ایس کوآرڈینیٹس کی کنٹرول روم تک ترسیل (۲۵ ہزار ایونٹس فی منٹ)۔
۳. گراف کیو ایل ڈیٹا لوڈر N+1 اصلاح: درجنوں انفرادی کوئیریز کو صرف ۲ بلک لوک اپس میں سمیٹ کر رسپانس کو تیز ترین بنانا۔`;
      } else if (trimmedPrompt.includes('telematics') || trimmedPrompt.includes('ٹیلی میٹکس') || trimmedPrompt.includes('gps') || trimmedPrompt.includes('جی پی ایس') || trimmedPrompt.includes('redis') || trimmedPrompt.includes('ریڈس')) {
        reply = `فلیٹ آئی کیو ٹیلی میٹکس پائپ لائن میں عزیر کی انجینئرنگ:
• ڈرائیور ایپ سے ہر ۵ سیکنڈ بعد جی پی ایس پنگز ریڈس اسٹریمز میں وصول اور یکجا کرنا۔
• کلسٹرڈ ویب ساکٹس کے ذریعے ۸۰ ملی سیکنڈ سے کم تاخیر میں ڈسپیچرز تک لائیو لوکیشن براڈکاسٹ کرنا۔
• گاڑیوں کی اسٹاپس پر آمد کے خودکار نوٹیفکیشنز کے لیے جیو فینس باؤنڈری ٹیسٹنگ۔`;
      } else if (trimmedPrompt.includes('xero') || trimmedPrompt.includes('زیرو') || trimmedPrompt.includes('invoice') || trimmedPrompt.includes('انوائس') || trimmedPrompt.includes('بلنگ')) {
        reply = `ملٹی ٹیننٹ زیرو انوائسنگ مائیکرو سروس:
• ٹرانسپورٹ جابز مکمل ہوتے ہی خودکار طور پر زیرو کلاؤڈ اکاؤنٹنگ میں درست انوائس ڈرافٹس بناتی ہے۔
• ناکام ہونے والی سنک کوششوں کے لیے BullMQ اور ریڈس پر مبنی ری ٹرائی کیوز۔
• ایندھن کے سرچارجز اور ٹول ٹیکسز کا خودکار حساب، جس سے آپریشنل ٹیموں کے ہفتہ وار ۴۰ گھنٹے بچتے ہیں۔`;
      } else if (trimmedPrompt.includes('dataloader') || trimmedPrompt.includes('ڈیٹا لوڈر') || trimmedPrompt.includes('latency') || trimmedPrompt.includes('تاخیر') || trimmedPrompt.includes('n+1')) {
        reply = `گراف کیو ایل ڈیٹا لوڈر بیجنگ کا نفاذ:
• ۱۵۰ سے زائد انفرادی ڈیٹا بیس کوئیریز کو ختم کر کے صرف ۲ سے ۳ بلک $in کوئیریز میں تبدیل کیا۔
• API کی تاخیر کو 450ms سے کم کر کے 38ms پر لائے (85 فیصد بہتری)۔
• پیک اوقات میں ڈیٹا بیس CPU کے استعمال میں 48 فیصد نمایاں کمی حاصل کی۔`;
      } else if (trimmedPrompt.includes('skill') || trimmedPrompt.includes('مہارت') || trimmedPrompt.includes('stack') || trimmedPrompt.includes('اسٹیک')) {
        reply = `عزیر کا بنیادی ٹیکنالوجی اسٹیک:
• زبانیں: TypeScript، JavaScript (ES6+)، HTML5، Modern CSS۔
• فرنٹ اینڈ: Next.js (App Router)، React.js (v18/19)، Tailwind CSS، AG Grid ورچوئلائزیشن۔
• بیک اینڈ: Node.js، Express.js، GraphQL (Apollo Server)، REST APIs، DataLoader۔
• ڈیٹا بیسز اور میسجنگ: MongoDB، Redis Pub/Sub، Redis Streams، WebSockets۔
• آرکیٹیکچر: Multi-Tenant SaaS Isolation، RBAC، JWT سیکیورٹی، Xero OAuth 2.0 API۔`;
      } else if (trimmedPrompt.includes('contact') || trimmedPrompt.includes('رابطہ') || trimmedPrompt.includes('email') || trimmedPrompt.includes('ای میل') || trimmedPrompt.includes('hire') || trimmedPrompt.includes('ملازمت')) {
        reply = `آپ عزیر ظہور سے با آسانی رابطہ کر سکتے ہیں:
• ای میل: uzairalam724@gmail.com
• مقام: اسلام آباد، پاکستان (PKT UTC+5)
• لنکڈ اِن: https://linkedin.com/in/uzair-zahoor-1a46a0194
• گٹ ہب: https://github.com/uzair-zahoor
وہ سینئر سافٹ ویئر انجینئرنگ رولز، ساس آرکیٹیکچر مشاورت اور تکنیکی اشتراک کے لیے دستیاب ہیں!`;
      } else if (trimmedPrompt.includes('impact') || trimmedPrompt.includes('میٹرکس') || trimmedPrompt.includes('نتائج')) {
        reply = `عزیر کے کلیدی پیداواری نتائج:
• روزانہ ۱۰,۰۰۰+ فلیٹ ڈسپیچز کی بلا تعطل پروسیسنگ۔
• گراف کیو ایل ڈیٹا لوڈر کے ذریعے تاخیر میں ۸۵ فیصد کمی۔
• مشن کریٹیکل گاڑیوں کی لائیو ٹریکنگ کے لیے ۹۹.۹۸ فیصد پلیٹ فارم دستیابی۔
• زیرو اکاؤنٹنگ کے ساتھ $2.5M+ ماہانہ بلنگ کا ۱۰۰ فیصد خودکار انضمام۔`;
      } else {
        reply = `عزیر ظہور نیکسٹ جے ایس، گراف کیو ایل اور ملٹی ٹیننٹ ساس سسٹمز کے ماہر سافٹ ویئر انجینئر ہیں (پکساکو ٹیکنالوجیز میں الوٹراک پر کام کر رہے ہیں)۔ آپ مجھ سے ان کے پروجیکٹس، سسٹم آرکیٹیکچر، یا رابطے کے بارے میں بلا جھجھک دریافت کر سکتے ہیں!`;
      }
    } else {
      // English Response Engine
      if (trimmedPrompt.includes('pixako') || trimmedPrompt.includes('allotrac') || trimmedPrompt.includes('transport') || trimmedPrompt.includes('fleet')) {
        reply = `At Pixako Technologies (Feb 2023 – Present), Uzair is a core engineer on Allotrac—a mission-critical multi-tenant transport management SaaS platform. His major contributions include:
• Multi-Tenant Isolation: Architecting tenant-aware data schemas and cross-tenant job sharing mechanisms (50+ enterprise fleets, zero cross-tenant data leaks).
• Real-Time Operations: Building GraphQL subscriptions and WebSocket channels with Redis Pub/Sub for live driver telemetry and vehicle dispatching.
• Query Performance: Integrating GraphQL DataLoader batching to eliminate N+1 latency in nested dispatches (85% latency reduction, 450ms down to 38ms).
• Financial Automation: Connecting Xero Accounting APIs with BullMQ queues for automated tenant invoicing ($2.5M+ monthly invoiced with 100% sync accuracy).`;
      } else if (trimmedPrompt.includes('architecture') || trimmedPrompt.includes('multi-tenant') || trimmedPrompt.includes('isolation') || trimmedPrompt.includes('blueprint')) {
        reply = `Uzair's primary architectural specialties include:
1. Multi-Tenant SaaS Isolation: Verified JWT context inspection, resolver-level discriminator injection in Mongoose queries, and granular cross-tenant delegation tokens.
2. High-Throughput Redis Pub/Sub Telemetry: Sub-100ms GPS propagation from driver mobile apps to dispatcher browser sessions over clustered WebSockets (handling 25k events/min).
3. GraphQL DataLoader N+1 Latency Optimizer: Request-scoped micro-batching transforming 100+ individual roundtrips into 2 batched bulk lookups with sub-40ms P99.`;
      } else if (trimmedPrompt.includes('telematics') || trimmedPrompt.includes('gps') || trimmedPrompt.includes('redis') || trimmedPrompt.includes('websocket')) {
        reply = `Uzair engineered the FleetIQ Telematics & Real-Time GPS Pipeline:
• Ingests driver mobile GPS heartbeats every 5 seconds into Redis Streams.
• Broadcasts real-time vehicle positions to dispatcher browser sessions using clustered WebSockets with sub-80ms latency.
• Performs polygon geofence boundary testing for automated stop arrival notifications.`;
      } else if (trimmedPrompt.includes('xero') || trimmedPrompt.includes('invoice') || trimmedPrompt.includes('billing') || trimmedPrompt.includes('accounting')) {
        reply = `Uzair built the Multi-Tenant Xero Invoicing & Ledger Automation Microservice:
• Connects multi-tenant transport dispatches directly to Xero Cloud Accounting via OAuth 2.0.
• Built distributed job queues with BullMQ and Redis for retrying failed accounting events.
• Automates fuel levy and surcharge calculations, saving operations 40 hours per week with 100% reconciliation accuracy.`;
      } else if (trimmedPrompt.includes('dataloader') || trimmedPrompt.includes('n+1') || trimmedPrompt.includes('performance') || trimmedPrompt.includes('latency')) {
        reply = `Uzair implemented GraphQL DataLoader batching across Allotrac's dispatches and driver resolvers:
• Replaced 150+ individual database queries with 2-3 batched $in queries.
• Slashed P99 API latency from 450ms down to 38ms (an 85% performance improvement).
• Decreased database CPU utilization by 48% across peak dispatching hours.`;
      } else if (trimmedPrompt.includes('skill') || trimmedPrompt.includes('stack') || trimmedPrompt.includes('tech') || trimmedPrompt.includes('frontend') || trimmedPrompt.includes('backend')) {
        reply = `Uzair specializes in modern full-stack web and SaaS engineering:
• Core Languages: TypeScript, JavaScript (ES6+), HTML5, Modern CSS.
• Frontend: Next.js (App Router), React.js (v18/19), Tailwind CSS, AG Grid virtualized analytics, and React Hook Form.
• Backend & APIs: Node.js, Express.js, GraphQL (Apollo Server), REST APIs, DataLoader query batching.
• Databases & Messaging: MongoDB (Mongoose, aggregation pipelines), Redis Pub/Sub, Redis Streams, WebSockets.
• Architecture: Multi-tenant schemas, Role-Based Access Control (RBAC), JWT authentication, Xero accounting integrations.`;
      } else if (trimmedPrompt.includes('contact') || trimmedPrompt.includes('email') || trimmedPrompt.includes('hire') || trimmedPrompt.includes('reach') || trimmedPrompt.includes('phone') || trimmedPrompt.includes('location')) {
        reply = `You can easily connect with Uzair:
• Email: uzairalam724@gmail.com
• Location: Islamabad, Pakistan (PKT UTC+5)
• LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
• GitHub: https://github.com/uzair-zahoor
He is open to discussing senior software engineering roles, Next.js SaaS architecture consultations, and technical collaborations!`;
      } else if (trimmedPrompt.includes('hrms') || trimmedPrompt.includes('attendance') || trimmedPrompt.includes('ag grid')) {
        reply = `Uzair engineered the Advanced Enterprise HRMS & Attendance System featuring:
• High-performance GraphQL attendance tracking microservices with sub-second response times.
• High-density interactive data visualization using AG Grid rendering 500,000+ virtualized employee logs.
• Automated log sync ingestion from legacy MS Access databases for historical compliance reporting.
• Granular Role-Based Access Control (RBAC).`;
      } else if (trimmedPrompt.includes('ai') || trimmedPrompt.includes('agent') || trimmedPrompt.includes('rag') || trimmedPrompt.includes('manifest') || trimmedPrompt.includes('document')) {
        reply = `Uzair actively researches and builds AI integrations within Next.js systems, including:
• GenAI Manifest & Logistics Document Agent: Using Gemini 1.5 Pro and RAG vector search to extract structured JSON data from messy bills of lading and paper delivery receipts.
• RAG (Retrieval-Augmented Generation) vector workflows for contextual knowledge search.
• Agent tool-calling architectures and autonomous prompt execution.
• Gemini & LLM API integrations with streaming responses.`;
      } else if (trimmedPrompt.includes('education') || trimmedPrompt.includes('degree') || trimmedPrompt.includes('university') || trimmedPrompt.includes('graduate') || trimmedPrompt.includes('credential')) {
        reply = `Uzair graduated with a Bachelor of Science (BS) in Software Engineering from Abbottabad University of Science and Technology (2018–2022). He holds continuous specialized competencies in Enterprise Next.js Full-Stack Architecture, Distributed GraphQL, and High-Performance Redis Streaming.`;
      } else if (trimmedPrompt.includes('metric') || trimmedPrompt.includes('impact') || trimmedPrompt.includes('scale')) {
        reply = `Key engineering impact metrics achieved by Uzair:
• 10,000+ daily fleet dispatches processed across multi-tenant transport operations.
• 85% query latency reduction achieved via GraphQL DataLoader batching & caching.
• 99.98% platform availability for mission-critical 24/7 driver telemetry.
• 100% automated invoicing sync with Xero for $2.5M+ monthly billing.`;
      } else {
        reply = `Uzair Zahoor is a Software Engineer with 3+ years of experience specializing in Next.js, GraphQL, and multi-tenant SaaS architectures (Allotrac at Pixako Technologies). Feel free to ask about his 6 production projects, system architecture blueprints, DataLoader query batching, or email him at uzairalam724@gmail.com!`;
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
