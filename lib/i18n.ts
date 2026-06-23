export type Lang = "en" | "th";

export const translations = {
  en: {
    nav: {
      technology: "Technology",
      architecture: "Architecture",
      benchmarks: "Benchmarks",
      products: "Products",
      signIn: "Sign in",
      startChatting: "Start Chatting",
    },
    hero: {
      badge: "Introducing Co.AI — multi-agent orchestration",
      line1: "AI That Thinks",
      line2: "Beyond One Model",
      description:
        "Co.AI combines multiple AI systems, intelligent routing, memory, and orchestration into one powerful platform.",
      cta: "Start Chatting",
      explore: "Explore Technology",
      trustedFor: "Trusted orchestration for",
      trustedItems: ["Routing", "Memory", "Multi-Agent", "RAA", "Titan Mode"],
    },
    technology: {
      label: "Core technology",
      title: "Seven systems, one intelligence",
      description:
        "Every Co.AI response is the product of specialized systems working in concert — each engineered for a distinct part of the reasoning pipeline.",
      items: [
        {
          name: "TMAP v2",
          tag: "Core engine",
          description:
            "The multi-agent build engine. A Planner breaks the task into a plan, Coder agents implement it, and a Reviewer critiques — looping until the output meets the quality bar.",
        },
        {
          name: "RAA",
          tag: "Requirements",
          description:
            "The Requirements Architect Agent thinks WITH you — contributing ideas and trade-offs, then locking a clear brief before a single line of code is written.",
        },
        {
          name: "Orchestrator",
          tag: "Engine",
          description:
            "Fast / balanced / deep modes with a built-in cost optimizer routing each task to the right depth and model tier.",
        },
        {
          name: "Memory System",
          tag: "Context",
          description:
            "Cross-session memory persisted in Supabase keeps Titan and TMAP grounded in everything that came before.",
        },
        {
          name: "Multi-Agent Workflow",
          tag: "Parallel",
          description:
            "Bounded-parallel execution with per-node retry, timeout, fallback, and re-run-from-failure.",
        },
        {
          name: "DARS",
          tag: "Resilience",
          description:
            "Detect-and-recover failover across Gemini, DeepSeek, Qwen, Llama and OpenRouter — health-tracked, low-quality-aware, and self-switching mid-job.",
        },
        {
          name: "Titan",
          tag: "Architect mode",
          description:
            "Think first, build later. A gated nine-phase workflow — discovery, deep analysis, multi-plan, risk review, architecture and an approval gate — before any code is generated.",
        },
      ] as { name: string; tag: string; description: string; span?: boolean }[],
    },
    architecture: {
      label: "Architecture",
      title: "One request, a full pipeline of intelligence",
      description:
        "Watch a single prompt flow through the entire Co.AI stack — routed, decomposed, executed in parallel, voted on, grounded, and remembered.",
      nodes: [
        { label: "User", sub: "Intent & prompt" },
        { label: "Orchestrator", sub: "Mode (fast / balanced / deep) + cost optimizer" },
        { label: "RAA", sub: "Requirements gathered & brief locked" },
        { label: "TMAP v2", sub: "Planner → Coder → Reviewer" },
        { label: "DARS", sub: "Provider failover & health routing" },
        { label: "Memory", sub: "Cross-session recall (Supabase)" },
        { label: "Final Response", sub: "Synthesized, reviewed output", accent: true },
      ],
    },
    tmap: {
      label: "TMAP deep dive",
      title: "How a thought becomes a plan",
      description:
        "TMAP v2 is the planning brain of Co.AI — turning an open-ended prompt into a precise, parallelizable execution graph.",
      steps: [
        {
          title: "Plan",
          body: "The Planner agent breaks the task into a concrete, file-by-file build plan — each step naming a path, an action, and its intent.",
        },
        {
          title: "Capability scoring",
          body: "In v2, agents are matched to subtasks by capability vectors and cosine similarity — chosen on fit, never keyword-routed.",
        },
        {
          title: "Parallel execution",
          body: "Coder agents implement the plan across an execution DAG — bounded-parallel, with per-node retry, timeout, fallback and replan.",
        },
        {
          title: "Review & critique",
          body: "The Reviewer agent attacks the output; Coder revises. The loop repeats until the non-negotiable quality bar is met.",
        },
        {
          title: "Validate & synthesize",
          body: "Results are validated and merged into one coherent, production-ready set of files — with the full run persisted as a trace.",
        },
      ],
    },
    raa: {
      label: "RAA system",
      title: "Requirements Architect Agent",
      description:
        "Co.AI never writes code into a vacuum. The Requirements Architect thinks with you — offering directions and trade-offs, then locking a clear brief before the build pipeline ever starts. A thinking partner, never a questionnaire.",
      stages: [
        { key: "idea", label: "Idea", detail: "You describe what you want to build" },
        { key: "collaborate", label: "Collaborate", detail: "RAA contributes directions & trade-offs (50/50)" },
        { key: "clarify", label: "Clarify", detail: "Asks the one most valuable question" },
        { key: "brief", label: "Brief locked", detail: "Requirement summary becomes the source of truth" },
        { key: "generate", label: "Generate Code", detail: "Handed to the TMAP build pipeline" },
      ],
    },
    benchmarks: {
      label: "Benchmarks",
      title: "Measured where it matters",
      description:
        "Performance isn’t a tagline. Every figure below comes straight from the Co.AI codebase and its automated test suite — not aspirational marketing numbers.",
      metrics: [
        {
          label: "Automated Tests Passing",
          note: "Full suite green — 0 failures, 0 flaky tests",
        },
        {
          label: "Orchestrated Systems",
          note: "7 core + 15 enterprise systems working in concert",
        },
        {
          label: "Provider Failover",
          note: "Gemini · DeepSeek · Qwen · Llama · OpenRouter — auto-switch via DARS",
        },
        {
          label: "Internal Quality Score",
          note: "Avg across all V2 orchestration systems",
        },
      ],
    },
    products: {
      label: "Product ecosystem",
      title: "One intelligence, many surfaces",
      description:
        "The same orchestration engine powers every Co.AI product — from chat to code to raw API access.",
      chat: {
        badge: "Flagship · Mikros 1.0 / Kanon 1.0",
        name: "Coagentix Chat",
        description:
          "The general AI assistant. Mikros 1.0 for fast everyday answers, Kanon 1.0 for balanced, deeper reasoning — backed by DARS failover so a reply always lands.",
        mock: "Summarize this quarter and draft the follow-up.",
        mockReply: "Kanon 1.0 · DARS routing across providers…",
      },
      code: {
        badge: "Lite · 1.0 · Pro · Titan",
        name: "Coagentix Code",
        description:
          "Build software conversation-first — from one-shot snippets to Titan’s gated architect workflow.",
      },
      api: {
        badge: "Build",
        name: "API Platform",
        description:
          "The tmap-v2 engine over streaming SSE endpoints — bring orchestration into your own product.",
      },
      roadmap: {
        badge: "Roadmap",
        name: "What’s next",
        description:
          "Projects persistence, live file trees with diff view, one-click export — and richer memory with embeddings.",
        tags: ["Projects", "Live file trees", "Project export", "Memory v2"],
      },
    },
    vision: {
      label: "Our vision",
      headline: "Many minds. One intelligence.",
      accentWord: "intelligence.",
      description:
        "We believe the most capable AI won’t come from a single larger model — it will come from many minds, orchestrated as one. That is the idea Co.AI was built to prove.",
    },
    cta: {
      title: "Build with Intelligence.",
      description:
        "Put a coordinated team of AI systems behind every request. Start free, scale to Titan Mode when you’re ready.",
      primary: "Start Using Co.AI",
      secondary: "View Documentation",
    },
    footer: {
      tagline: "Many minds, one intelligence. Building the next generation of orchestrated AI systems.",
      columns: [
        {
          title: "Platform",
          links: ["Coagentix Chat", "Coagentix Code", "API Platform", "TMAP v2"],
        },
        {
          title: "Technology",
          links: ["Orchestrator", "RAA", "Memory", "DARS"],
        },
        {
          title: "Company",
          links: ["Vision", "Careers", "Blog", "Contact"],
        },
        {
          title: "Resources",
          links: ["Documentation", "Changelog", "Status", "Security"],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Co.AI · CoAgentix. All rights reserved.`,
      legal: ["Privacy", "Terms", "Security"],
    },
  },

  th: {
    nav: {
      technology: "เทคโนโลยี",
      architecture: "สถาปัตยกรรม",
      benchmarks: "ผลการทดสอบ",
      products: "ผลิตภัณฑ์",
      signIn: "เข้าสู่ระบบ",
      startChatting: "เริ่มแชท",
    },
    hero: {
      badge: "แนะนำ Co.AI — การประสานงาน multi-agent",
      line1: "AI ที่คิดได้",
      line2: "เหนือกว่าโมเดลเดียว",
      description:
        "Co.AI รวมระบบ AI หลายตัว การกำหนดเส้นทางอัจฉริยะ หน่วยความจำ และการประสานงาน ไว้ในแพลตฟอร์มอันทรงพลังเดียว",
      cta: "เริ่มแชท",
      explore: "สำรวจเทคโนโลยี",
      trustedFor: "การประสานงานที่เชื่อถือได้สำหรับ",
      trustedItems: ["Routing", "Memory", "Multi-Agent", "RAA", "Titan Mode"],
    },
    technology: {
      label: "เทคโนโลยีหลัก",
      title: "เจ็ดระบบ ปัญญาเดียว",
      description:
        "ทุกการตอบสนองของ Co.AI คือผลลัพธ์จากระบบเฉพาะทางที่ทำงานร่วมกัน — แต่ละระบบถูกออกแบบมาสำหรับส่วนเฉพาะของกระบวนการคิด",
      items: [
        {
          name: "TMAP v2",
          tag: "เครื่องยนต์หลัก",
          description:
            "เครื่องยนต์สร้างแบบ multi-agent ตัว Planner แบ่งงานเป็นแผน ตัว Coder ดำเนินการ และตัว Reviewer วิจารณ์ — วนซ้ำจนผลลัพธ์ผ่านมาตรฐานคุณภาพ",
        },
        {
          name: "RAA",
          tag: "ข้อกำหนด",
          description:
            "Requirements Architect Agent คิดร่วมกับคุณ — มีส่วนร่วมในไอเดียและการแลกเปลี่ยน แล้วล็อคบรีฟที่ชัดเจนก่อนเขียนโค้ดบรรทัดแรก",
        },
        {
          name: "Orchestrator",
          tag: "เครื่องยนต์",
          description:
            "โหมด Fast / Balanced / Deep พร้อม cost optimizer ในตัวที่กำหนดเส้นทางแต่ละงานไปยังระดับและ model tier ที่เหมาะสม",
        },
        {
          name: "Memory System",
          tag: "บริบท",
          description:
            "หน่วยความจำข้ามเซสชันที่จัดเก็บใน Supabase ช่วยให้ Titan และ TMAP อิงกับสิ่งที่เกิดขึ้นก่อนหน้า",
        },
        {
          name: "Multi-Agent Workflow",
          tag: "ขนาน",
          description:
            "การดำเนินการแบบขนานที่มีขอบเขต พร้อม retry, timeout, fallback และรันซ้ำจากจุดที่ล้มเหลวในแต่ละโหนด",
        },
        {
          name: "DARS",
          tag: "ความยืดหยุ่น",
          description:
            "ตรวจจับและกู้คืน failover ข้าม Gemini, DeepSeek, Qwen, Llama และ OpenRouter — ติดตามสุขภาพ รับรู้คุณภาพต่ำ และสลับอัตโนมัติระหว่างงาน",
        },
        {
          name: "Titan",
          tag: "โหมดสถาปนิก",
          description:
            "คิดก่อน สร้างทีหลัง กระบวนการ 9 ขั้นตอน — ค้นพบ วิเคราะห์เชิงลึก วางแผนหลายแบบ ทบทวนความเสี่ยง สถาปัตยกรรม และด่านอนุมัติ — ก่อนสร้างโค้ด",
        },
      ] as { name: string; tag: string; description: string; span?: boolean }[],
    },
    architecture: {
      label: "สถาปัตยกรรม",
      title: "คำขอเดียว กระบวนการปัญญาเต็มรูปแบบ",
      description:
        "ดูการไหลของ prompt เดียวผ่านสแต็ก Co.AI ทั้งหมด — กำหนดเส้นทาง แยกย่อย ดำเนินการแบบขนาน โหวต อิงกับฐาน และจดจำ",
      nodes: [
        { label: "ผู้ใช้", sub: "เจตนา & prompt" },
        { label: "Orchestrator", sub: "โหมด (fast / balanced / deep) + ตัวปรับต้นทุน" },
        { label: "RAA", sub: "รวบรวมข้อกำหนด & ล็อคบรีฟ" },
        { label: "TMAP v2", sub: "Planner → Coder → Reviewer" },
        { label: "DARS", sub: "Failover ผู้ให้บริการ & กำหนดเส้นทางตามสุขภาพ" },
        { label: "Memory", sub: "จดจำข้ามเซสชัน (Supabase)" },
        { label: "ผลลัพธ์สุดท้าย", sub: "ผลลัพธ์ที่สังเคราะห์และตรวจสอบแล้ว", accent: true },
      ],
    },
    tmap: {
      label: "เจาะลึก TMAP",
      title: "ความคิดกลายเป็นแผนได้อย่างไร",
      description:
        "TMAP v2 คือสมองวางแผนของ Co.AI — แปลง prompt ปลายเปิดเป็นกราฟการดำเนินการที่แม่นยำและขนานได้",
      steps: [
        {
          title: "วางแผน",
          body: "ตัว Planner แบ่งงานเป็นแผนสร้างที่เป็นรูปธรรมทีละไฟล์ — แต่ละขั้นตอนระบุเส้นทาง การกระทำ และเจตนา",
        },
        {
          title: "ประเมินความสามารถ",
          body: "ใน v2 agents จับคู่กับงานย่อยด้วย capability vectors และ cosine similarity — เลือกตามความเหมาะสม ไม่ใช้ keyword routing",
        },
        {
          title: "ดำเนินการแบบขนาน",
          body: "Coder agents ดำเนินการแผนผ่าน execution DAG — ขนานที่มีขอบเขต พร้อม retry, timeout, fallback และ replan ในแต่ละโหนด",
        },
        {
          title: "ตรวจสอบ & วิจารณ์",
          body: "ตัว Reviewer โจมตีผลลัพธ์ ตัว Coder แก้ไข วนซ้ำจนผ่านมาตรฐานคุณภาพที่ต่อรองไม่ได้",
        },
        {
          title: "ตรวจสอบความถูกต้อง & สังเคราะห์",
          body: "ผลลัพธ์ถูกตรวจสอบและรวมเข้าเป็นชุดไฟล์ที่สอดคล้องและพร้อมผลิต — โดยบันทึกการรันทั้งหมดเป็น trace",
        },
      ],
    },
    raa: {
      label: "ระบบ RAA",
      title: "Requirements Architect Agent",
      description:
        "Co.AI ไม่เขียนโค้ดโดยไม่มีบริบท Requirements Architect คิดร่วมกับคุณ — เสนอทิศทางและการแลกเปลี่ยน แล้วล็อคบรีฟที่ชัดเจนก่อนกระบวนการสร้างเริ่มต้น เป็นพันธมิตรคิด ไม่ใช่แบบสอบถาม",
      stages: [
        { key: "idea", label: "ไอเดีย", detail: "คุณอธิบายสิ่งที่ต้องการสร้าง" },
        { key: "collaborate", label: "ร่วมมือ", detail: "RAA มีส่วนร่วมในทิศทาง & การแลกเปลี่ยน (50/50)" },
        { key: "clarify", label: "ชี้แจง", detail: "ถามคำถามที่มีคุณค่าที่สุดหนึ่งข้อ" },
        { key: "brief", label: "ล็อคบรีฟ", detail: "สรุปข้อกำหนดกลายเป็นแหล่งความจริง" },
        { key: "generate", label: "สร้างโค้ด", detail: "ส่งต่อไปยัง TMAP build pipeline" },
      ],
    },
    benchmarks: {
      label: "ผลการทดสอบ",
      title: "วัดผลในจุดที่สำคัญ",
      description:
        "ประสิทธิภาพไม่ใช่แค่สโลแกน ทุกตัวเลขด้านล่างมาจาก codebase ของ Co.AI และชุดทดสอบอัตโนมัติโดยตรง — ไม่ใช่ตัวเลขการตลาดที่คาดหวัง",
      metrics: [
        {
          label: "การทดสอบอัตโนมัติผ่าน",
          note: "ชุดทดสอบเขียว — 0 ล้มเหลว 0 flaky",
        },
        {
          label: "ระบบที่ประสานงาน",
          note: "7 ระบบหลัก + 15 ระบบองค์กรทำงานร่วมกัน",
        },
        {
          label: "Failover ผู้ให้บริการ",
          note: "Gemini · DeepSeek · Qwen · Llama · OpenRouter — สลับอัตโนมัติผ่าน DARS",
        },
        {
          label: "คะแนนคุณภาพภายใน",
          note: "เฉลี่ยทั่วระบบประสานงาน V2 ทั้งหมด",
        },
      ],
    },
    products: {
      label: "ระบบนิเวศผลิตภัณฑ์",
      title: "ปัญญาเดียว หลายพื้นผิว",
      description:
        "เครื่องยนต์ประสานงานเดียวกันขับเคลื่อนทุกผลิตภัณฑ์ของ Co.AI — ตั้งแต่แชทถึงโค้ดถึง API โดยตรง",
      chat: {
        badge: "Flagship · Mikros 1.0 / Kanon 1.0",
        name: "Coagentix Chat",
        description:
          "ผู้ช่วย AI ทั่วไป Mikros 1.0 สำหรับคำตอบเร็วประจำวัน Kanon 1.0 สำหรับการใช้เหตุผลที่สมดุลและลึกกว่า — รองรับโดย DARS failover เพื่อให้มีการตอบกลับเสมอ",
        mock: "สรุปไตรมาสนี้และร่างการติดตามผล",
        mockReply: "Kanon 1.0 · DARS routing ข้ามผู้ให้บริการ…",
      },
      code: {
        badge: "Lite · 1.0 · Pro · Titan",
        name: "Coagentix Code",
        description:
          "สร้างซอฟต์แวร์แบบสนทนาก่อน — ตั้งแต่ snippets ครั้งเดียวถึง Titan’s gated architect workflow",
      },
      api: {
        badge: "Build",
        name: "API Platform",
        description:
          "เครื่องยนต์ tmap-v2 ผ่าน streaming SSE endpoints — นำการประสานงานมาไว้ในผลิตภัณฑ์ของคุณ",
      },
      roadmap: {
        badge: "Roadmap",
        name: "อะไรต่อไป",
        description:
          "บันทึกโปรเจกต์ ต้นไม้ไฟล์สดพร้อม diff view ส่งออกคลิกเดียว — และหน่วยความจำที่สมบูรณ์ยิ่งขึ้นด้วย embeddings",
        tags: ["โปรเจกต์", "ต้นไม้ไฟล์สด", "ส่งออกโปรเจกต์", "Memory v2"],
      },
    },
    vision: {
      label: "วิสัยทัศน์ของเรา",
      headline: "หลายความคิด ปัญญาเดียว.",
      accentWord: "ปัญญาเดียว.",
      description:
        "เราเชื่อว่า AI ที่มีประสิทธิภาพสูงสุดจะไม่มาจากโมเดลเดียวที่ใหญ่กว่า — แต่จะมาจากความคิดหลายๆ อย่างที่ประสานงานเป็นหนึ่งเดียว นั่นคือแนวคิดที่ Co.AI สร้างขึ้นมาเพื่อพิสูจน์",
    },
    cta: {
      title: "สร้างด้วยปัญญา.",
      description:
        "ใส่ทีม AI ที่ประสานงานไว้เบื้องหลังทุกคำขอ เริ่มใช้ฟรี ขยายสู่ Titan Mode เมื่อพร้อม",
      primary: "เริ่มใช้ Co.AI",
      secondary: "ดูเอกสาร",
    },
    footer: {
      tagline: "หลายความคิด ปัญญาเดียว สร้างระบบ AI ประสานงานยุคต่อไป",
      columns: [
        {
          title: "แพลตฟอร์ม",
          links: ["Coagentix Chat", "Coagentix Code", "API Platform", "TMAP v2"],
        },
        {
          title: "เทคโนโลยี",
          links: ["Orchestrator", "RAA", "Memory", "DARS"],
        },
        {
          title: "บริษัท",
          links: ["วิสัยทัศน์", "อาชีพ", "บล็อก", "ติดต่อ"],
        },
        {
          title: "ทรัพยากร",
          links: ["เอกสาร", "บันทึกการเปลี่ยนแปลง", "สถานะ", "ความปลอดภัย"],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Co.AI · CoAgentix. สงวนลิขสิทธิ์ทั้งหมด`,
      legal: ["ความเป็นส่วนตัว", "เงื่อนไข", "ความปลอดภัย"],
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
