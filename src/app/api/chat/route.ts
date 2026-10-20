import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const trimmedPrompt = prompt.trim().toLowerCase();

    // Check if an external Gemini API key is provided
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const systemPrompt = `You are an AI representative for Uzair Zahoor, a Software Engineer with 3+ years of experience based in Islamabad, Pakistan.
Key details about Uzair:
- Current Role: Software Engineer at Pixako Technologies Pvt. Ltd. (Feb 2023 - Present).
- Primary Work: Allotrac (a multi-tenant transport management SaaS platform), GraphQL APIs, real-time WebSockets, Redis Pub/Sub, MongoDB aggregations, DataLoader optimization, Xero API integrations.
- Tech Stack: TypeScript, JavaScript, React.js, Next.js, Node.js, Express.js, GraphQL, MongoDB, Redis, AG Grid, Tailwind CSS.
- Education: BS Software Engineering from Abbottabad University of Science and Technology (2022).
- Email: uzairalam724@gmail.com
- LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
- GitHub: https://github.com/uzair-zahoor
Answer questions accurately, professionally, and warmly on behalf of Uzair.`;

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

    if (trimmedPrompt.includes('pixako') || trimmedPrompt.includes('allotrac') || trimmedPrompt.includes('transport') || trimmedPrompt.includes('fleet')) {
      reply = `At Pixako Technologies (Feb 2023 – Present), Uzair is a core engineer on Allotrac—a mission-critical multi-tenant transport management SaaS platform. His major contributions include:
• Multi-Tenant Isolation: Architecting tenant-aware data schemas and cross-tenant job sharing mechanisms.
• Real-Time Operations: Building GraphQL subscriptions and WebSocket channels with Redis Pub/Sub for live driver telemetry and vehicle dispatching.
• Query Performance: Integrating GraphQL DataLoader batching to eliminate N+1 latency in nested dispatches.
• Financial Automation: Connecting Xero Accounting APIs for automated tenant invoicing and ledger synchronization.`;
    } else if (trimmedPrompt.includes('skill') || trimmedPrompt.includes('stack') || trimmedPrompt.includes('tech') || trimmedPrompt.includes('frontend') || trimmedPrompt.includes('backend')) {
      reply = `Uzair specializes in modern full-stack web and SaaS engineering:
• Core Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3.
• Frontend: Next.js (App Router), React.js, Tailwind CSS, Material UI, AG Grid for high-density analytics, and React Hook Form.
• Backend & APIs: Node.js, Express.js, GraphQL (Apollo Server), REST APIs, DataLoader query batching.
• Databases & Messaging: MongoDB (Mongoose, aggregation pipelines), Redis Pub/Sub, WebSockets.
• Architecture: Multi-tenant schemas, Role-Based Access Control (RBAC), JWT authentication, Xero accounting integrations.`;
    } else if (trimmedPrompt.includes('contact') || trimmedPrompt.includes('email') || trimmedPrompt.includes('hire') || trimmedPrompt.includes('reach') || trimmedPrompt.includes('phone') || trimmedPrompt.includes('location')) {
      reply = `You can easily connect with Uzair:
• Email: uzairalam724@gmail.com
• Phone: +92 311 5762092
• Location: Islamabad, Pakistan
• LinkedIn: https://linkedin.com/in/uzair-zahoor-1a46a0194
• GitHub: https://github.com/uzair-zahoor
He is open to discussing software engineering roles, Next.js application architecture, and multi-tenant SaaS challenges!`;
    } else if (trimmedPrompt.includes('hrms') || trimmedPrompt.includes('attendance') || trimmedPrompt.includes('ag grid')) {
      reply = `Uzair also engineered the Advanced HRMS & Attendance System featuring:
• High-performance GraphQL attendance tracking microservices.
• High-density interactive data visualization using AG Grid for virtualized employee logs.
• Automated log sync ingestion from legacy MS Access databases for historical compliance reporting.
• Granular Role-Based Access Control (RBAC).`;
    } else if (trimmedPrompt.includes('ai') || trimmedPrompt.includes('agent') || trimmedPrompt.includes('rag') || trimmedPrompt.includes('llm')) {
      reply = `Uzair actively researches and builds AI integrations within Next.js systems, including:
• RAG (Retrieval-Augmented Generation) vector workflows for contextual knowledge search.
• Agent tool-calling architectures and autonomous prompt execution.
• Gemini & LLM API integrations with streaming responses.
• Building responsive Next.js AI chat microservices.`;
    } else if (trimmedPrompt.includes('education') || trimmedPrompt.includes('degree') || trimmedPrompt.includes('university') || trimmedPrompt.includes('graduate')) {
      reply = `Uzair graduated in 2022 with a Bachelor of Science (BS) in Software Engineering from Abbottabad University of Science and Technology.`;
    } else if (trimmedPrompt.includes('experience') || trimmedPrompt.includes('background') || trimmedPrompt.includes('years') || trimmedPrompt.includes('who are you') || trimmedPrompt.includes('who is uzair')) {
      reply = `Uzair Zahoor is a Software Engineer based in Islamabad, Pakistan with 3+ years of professional experience. He is currently at Pixako Technologies building Allotrac, a multi-tenant transport management platform. He excels in Next.js, React, Node.js, GraphQL, Redis Pub/Sub, and MongoDB architectures.`;
    } else {
      reply = `Uzair is a Software Engineer with 3+ years of experience specializing in Next.js, GraphQL, multi-tenant SaaS architectures (Allotrac at Pixako Technologies), real-time WebSockets, and MongoDB. You can ask me about his technical skills, SaaS experience, architecture decisions, or reach him directly at uzairalam724@gmail.com!`;
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
