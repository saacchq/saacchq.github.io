---
title: "AI Weekly | 2026-W12"
titleAr: "أخبار الذكاء الاصطناعي الأسبوعية | 2026-W12"
description: "Cursor Composer 2 & Kimi controversy, Claude Mythos leaked, Sora shutdown, desktop agent war, and more"
descriptionAr: جدل Cursor Composer 2 و Kimi، تسريب Claude Mythos، إغلاق Sora، حرب وكلاء سطح المكتب، والمزيد
pubDatetime: 2026-03-27T00:00:00.000Z
author: sa/acc
modDatetime: 2026-04-03T00:00:00.000Z
tags: 
  - ai-news
  - drama
  - releases
  - money
  - infrastructure
  - policy
slug: ai-weekly-w12
---



<div class="lang-block lang-en">

## 🔥 Drama

### <span class="section-thumb"><img src="/assets/logos/cursor-com.svg" alt="Cursor" /></span> Cursor Composer 2 & Kimi Controversy

Cursor's new flagship coding model lands with strong benchmarks — but the launch is overshadowed by a disclosure scandal.

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">61.3</span>
    <span class="stat-label">Terminal-Bench 2.0</span>
  </div>
  <div class="stat-block stat-green">
    <span class="stat-number">73.7</span>
    <span class="stat-label">SWE-bench Multilingual</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">$0.50</span>
    <span class="stat-label">per 1M input tokens</span>
  </div>
</div>

**The Kimi scandal:** A developer intercepted Composer 2's API calls within 2 hours of launch and discovered the base model was Moonshot AI's **Kimi K2.5**. Cursor never disclosed this, later admitting it was "a miss" [^1] [^2].

<div class="callout callout-warning">
<p><strong>CEO warns against "vibe coding":</strong> "Shaky foundations that will eventually crumble" — the CEO of the most popular AI coding tool telling people not to blindly trust AI code [^3].</p>
</div>

<figure class="post-meme">
<img src="/assets/memes/drake-hotline-bling.jpg" alt="Drake meme" />
<figcaption>Cursor announcing Composer 2 vs. admitting it's actually Kimi K2.5.</figcaption>
</figure>

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Claude "Mythos" Leaked

A misconfigured database exposed Anthropic's most powerful unreleased model.

<figure class="post-figure">
<img src="/assets/people/dario-amodei.jpg" alt="Dario Amodei" />
<figcaption>Dario Amodei — Anthropic's CEO had a rough week.</figcaption>
</figure>

<div class="stat-grid">
  <div class="stat-block stat-purple">
    <span class="stat-number">Capybara</span>
    <span class="stat-label">internal codename</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">Step</span>
    <span class="stat-label">change in capabilities</span>
  </div>
</div>

- Unencrypted, publicly searchable DB found by security researchers
- Dramatically exceeds Opus 4.6 on coding, reasoning, and cybersecurity
- Anthropic itself says it poses **unprecedented cybersecurity risks** [^4]

<div class="callout callout-danger">
<p><strong>The irony:</strong> Anthropic — the "safety-first lab" — leaked its own most-capable model through basic infrastructure misconfiguration.</p>
</div>

<figure class="post-meme">
<img src="/assets/memes/always-has-been.png" alt="Always Has Been astronaut meme" />
<figcaption>"Wait, the safety-first lab leaks its own models?" "Always has been."</figcaption>
</figure>

## 🚀 Releases

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> GPT-5.4

OpenAI ships its most ambitious model yet, with three usage tiers and a 1M-token context window.

- Three tiers: **Standard**, **Thinking**, **Pro**
- 1M token context window across all tiers
- 33% fewer hallucinations vs GPT-5.3
- New **Mini** and **Nano** variants for cost/latency-sensitive workloads [^9]

### <span class="section-thumb"><img src="/assets/logos/google-com.png" alt="Google" /></span> Gemini 3.1 + Apple Deal

Google's flagship gets faster and cheaper — and lands a major distribution win.

<div class="stat-grid">
  <div class="stat-block stat-blue">
    <span class="stat-number">45%</span>
    <span class="stat-label">Flash-Lite speedup</span>
  </div>
  <div class="stat-block stat-green">
    <span class="stat-number">$0.25</span>
    <span class="stat-label">per 1M tokens</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">~$1B</span>
    <span class="stat-label">Apple deal / year</span>
  </div>
</div>

Apple picks Gemini as the new model behind Siri — reportedly worth ~$1B annually [^11].

### <span class="section-thumb"><img src="/assets/logos/x-ai.png" alt="xAI" /></span> Grok 4.20

xAI ships a multi-agent architecture with the lowest reported hallucination rate to date.

- **4-agent** collaborative architecture
- **22%** hallucination rate — lowest ever recorded across major frontier models
- **60% cheaper** than Grok 3 [^12]

## 💰 Money

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> Sora Shut Down — The Numbers

OpenAI's flagship video model is dead just six months after launch. The numbers explain why.

<figure class="post-figure">
<img src="/assets/people/sam-altman.jpg" alt="Sam Altman" />
<figcaption>Sam Altman quietly killing the most-hyped video model of 2025.</figcaption>
</figure>

<div class="stat-grid">
  <div class="stat-block stat-red">
    <span class="stat-number">75%</span>
    <span class="stat-label">download drop from peak</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">$15M/day</span>
    <span class="stat-label">estimated inference cost</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">$2.1M</span>
    <span class="stat-label">total lifetime revenue</span>
  </div>
</div>

Disney exits the $1B partnership deal. Not everything technically impressive scales as a business [^5].

<figure class="post-meme">
<img src="/assets/memes/this-is-fine.jpg" alt="This is fine dog meme" />
<figcaption>Sora team after burning through $90M/week with $2.1M total revenue.</figcaption>
</figure>

## 🏗️ Infrastructure

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Claude" /></span> The Desktop Agent War

Two of the biggest agent platforms launched desktop control in the same week.

**Claude Computer Use** — Pro and Max plan users get scheduled tasks, plugins, and a connectors ecosystem [^6].

**Manus "My Computer"** — Read/edit local files, launch apps, use any CLI tool — with explicit user approval before execution [^7].

<div class="callout callout-info">
<p><strong>MCP hits 97M installs</strong> — Model Context Protocol becoming the de facto standard for connecting AI agents to tools and data [^8].</p>
</div>

<figure class="post-meme">
<img src="/assets/memes/spider-man-pointing.jpg" alt="Spider-Man pointing at Spider-Man meme" />
<figcaption>Claude Computer Use and Manus "My Computer", launching the same week.</figcaption>
</figure>

### <span class="section-thumb"><img src="/assets/logos/nvidia-com.png" alt="NVIDIA" /></span> NVIDIA GTC

Jensen's keynote projects another record year for AI infrastructure spend.

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">$1T</span>
    <span class="stat-label">projected orders</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">10x</span>
    <span class="stat-label">Vera Rubin perf/watt vs Blackwell</span>
  </div>
</div>

NVIDIA also open-sourced its Agent Toolkit and committed to its longest-ever roadmap of GPU generations [^13].

## 📜 Policy

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Anthropic Ban Blocked + IPO

A federal judge blocked the Pentagon's attempt to ban Claude across U.S. agencies, while Anthropic quietly began IPO preparations.

- Court ruling halted the federal ban while litigation continues
- Anthropic IPO planned for October 2026 — racing OpenAI to go public [^10]

### <span class="section-thumb"><img src="/assets/logos/europa-eu.png" alt="EU" /></span> EU AI Act + Shopify Agentic Storefronts

EU enforcement of the AI Act goes live, while Shopify ships agent-ready storefronts across major chat assistants.

- EU AI Act enforcement is now active across all member states [^14]
- Shopify launched **agentic storefronts** in ChatGPT, Gemini, and Copilot — letting AI agents complete checkout flows directly [^15]

[^1]: <https://cursor.com/blog/composer-2>
[^2]: <https://techcrunch.com/2026/03/22/cursor-admits-its-new-coding-model-was-built-on-top-of-moonshot-ais-kimi/>
[^3]: <https://fortune.com/2026/03/21/cursor-ceo-michael-truell-ai-coding-claude-anthropic-venture-capital/>
[^4]: <https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/>
[^5]: <https://www.nbcnews.com/tech/tech-news/openai-shuttering-sora-video-generating-service-rcna264989>
[^6]: <https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html>
[^7]: <https://manus.im/blog/manus-my-computer-desktop>
[^8]: <https://blog.modelcontextprotocol.io/tags/mcp/>
[^9]: <https://openai.com/index/introducing-gpt-5-4/>
[^10]: <https://www.cnbc.com/2026/03/26/anthropic-pentagon-dod-claude-court-ruling.html>
[^11]: <https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html>
[^12]: <https://www.nextbigfuture.com/2026/02/xai-launches-grok-4-20-and-it-has-4-ai-agents-collaborating.html>
[^13]: <https://www.cnbc.com/2026/03/16/nvidia-gtc-2026-ceo-jensen-huang-keynote-blackwell-vera-rubin.html>
[^14]: <https://epthinktank.eu/2026/03/18/enforcement-of-the-ai-act/>
[^15]: <https://www.shopify.com/news/winter-26-edition-agentic-storefronts>

</div>


<div class="lang-block lang-ar" dir="rtl">

## 🔥 الجدل

### <span class="section-thumb"><img src="/assets/logos/cursor-com.svg" alt="Cursor" /></span> جدل Cursor Composer 2 و Kimi

نموذج Cursor البرمجي الجديد يحقق أرقاماً قوية — لكن الإطلاق طغت عليه فضيحة عدم الإفصاح.

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">61.3</span>
    <span class="stat-label">Terminal-Bench 2.0</span>
  </div>
  <div class="stat-block stat-green">
    <span class="stat-number">73.7</span>
    <span class="stat-label">SWE-bench Multilingual</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">$0.50</span>
    <span class="stat-label">لكل مليون مدخل</span>
  </div>
</div>

**فضيحة Kimi:** مطور اعترض استدعاءات API لـ Composer 2 خلال ساعتين من الإطلاق واكتشف أن النموذج الأساسي هو **Kimi K2.5** من Moonshot AI. Cursor لم تفصح عن ذلك واعترفت لاحقاً بأنها "خطأ" [^1] [^2].

<div class="callout callout-warning">
<p><strong>الرئيس التنفيذي يحذر من "البرمجة العشوائية":</strong> "أسس هشة ستنهار في النهاية" [^3].</p>
</div>

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> تسريب Claude "Mythos"

قاعدة بيانات غير مهيأة كشفت أقوى نموذج غير مُطلق لـ Anthropic.

<div class="stat-grid">
  <div class="stat-block stat-purple">
    <span class="stat-number">Capybara</span>
    <span class="stat-label">الاسم الرمزي الداخلي</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">نقلة</span>
    <span class="stat-label">نوعية في القدرات</span>
  </div>
</div>

- قاعدة بيانات غير مشفرة وقابلة للبحث العام اكتشفها باحثون أمنيون
- يتفوق بشكل كبير على Opus 4.6 في البرمجة والاستدلال والأمن السيبراني
- Anthropic نفسها تقول إنه يشكل **مخاطر أمنية سيبرانية غير مسبوقة** [^4]

<div class="callout callout-danger">
<p><strong>المفارقة:</strong> Anthropic — "مختبر السلامة أولاً" — سرّبت أقوى نموذج لها عبر خطأ بسيط في تهيئة البنية التحتية.</p>
</div>

## 🚀 الإصدارات

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> GPT-5.4

OpenAI تطلق أكثر نماذجها طموحاً مع 3 مستويات استخدام ونافذة سياق بمليون توكن.

- ثلاثة مستويات: **Standard**، **Thinking**، **Pro**
- نافذة سياق مليون توكن في جميع المستويات
- أخطاء أقل بنسبة 33% مقارنةً بـ GPT-5.3
- إصدارات جديدة **Mini** و **Nano** للأحمال الحساسة للتكلفة والزمن [^9]

### <span class="section-thumb"><img src="/assets/logos/google-com.png" alt="Google" /></span> Gemini 3.1 + صفقة Apple

النموذج الرائد لـ Google يصبح أسرع وأرخص — ويفوز بصفقة توزيع ضخمة.

<div class="stat-grid">
  <div class="stat-block stat-blue">
    <span class="stat-number">45%</span>
    <span class="stat-label">تسريع Flash-Lite</span>
  </div>
  <div class="stat-block stat-green">
    <span class="stat-number">$0.25</span>
    <span class="stat-label">لكل مليون توكن</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">~$1B</span>
    <span class="stat-label">صفقة Apple/سنة</span>
  </div>
</div>

Apple تختار Gemini كنموذج جديد لـ Siri — بقيمة تقارب مليار دولار سنوياً [^11].

### <span class="section-thumb"><img src="/assets/logos/x-ai.png" alt="xAI" /></span> Grok 4.20

xAI تطلق بنية متعددة الوكلاء مع أدنى معدل هلوسة موثق حتى الآن.

- بنية تعاونية بـ **4 وكلاء**
- معدل هلوسة **22%** — الأدنى على الإطلاق بين النماذج الرائدة
- **أرخص بنسبة 60%** من Grok 3 [^12]

## 💰 المال

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> إغلاق Sora — الأرقام

نموذج OpenAI الرائد للفيديو ميت بعد ستة أشهر فقط من الإطلاق. الأرقام تفسر السبب.

<div class="stat-grid">
  <div class="stat-block stat-red">
    <span class="stat-number">75%</span>
    <span class="stat-label">انخفاض التحميلات من الذروة</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">$15M/يوم</span>
    <span class="stat-label">تكلفة الاستدلال المقدرة</span>
  </div>
  <div class="stat-block stat-red">
    <span class="stat-number">$2.1M</span>
    <span class="stat-label">إجمالي الإيرادات</span>
  </div>
</div>

Disney تنسحب من صفقة شراكة بقيمة مليار دولار. ليس كل شيء مبهر تقنياً ينجح كأعمال [^5].

## 🏗️ البنية التحتية

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Claude" /></span> حرب وكلاء سطح المكتب

اثنتان من أكبر منصات الوكلاء أطلقتا التحكم بسطح المكتب في نفس الأسبوع.

**Claude Computer Use** — لمستخدمي Pro و Max، مع مهام مجدولة وإضافات ونظام موصلات [^6].

**Manus "My Computer"** — قراءة/تعديل الملفات المحلية، تشغيل التطبيقات، استخدام أدوات سطر الأوامر — بموافقة صريحة من المستخدم [^7].

<div class="callout callout-info">
<p><strong>MCP يصل إلى 97 مليون تثبيت</strong> — بروتوكول سياق النموذج يصبح المعيار الفعلي لربط وكلاء الذكاء الاصطناعي بالأدوات والبيانات [^8].</p>
</div>

### <span class="section-thumb"><img src="/assets/logos/nvidia-com.png" alt="NVIDIA" /></span> NVIDIA GTC

كلمة Jensen الرئيسية تتوقع عاماً قياسياً جديداً للإنفاق على البنية التحتية للذكاء الاصطناعي.

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">$1T</span>
    <span class="stat-label">طلبات متوقعة</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">10x</span>
    <span class="stat-label">Vera Rubin أداء/واط vs Blackwell</span>
  </div>
</div>

NVIDIA فتحت أيضاً مصدر Agent Toolkit وأعلنت عن أطول خارطة طريق لأجيال GPU في تاريخها [^13].

## 📜 السياسات

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> منع حظر Anthropic + طرح عام

قاضٍ فيدرالي منع محاولة البنتاغون لحظر Claude في الوكالات الأمريكية، بينما تستعد Anthropic بهدوء لطرح عام.

- حكم محكمة أوقف الحظر الفيدرالي خلال استمرار التقاضي
- الطرح العام لـ Anthropic مخطط في أكتوبر 2026 — في سباق مع OpenAI [^10]

### <span class="section-thumb"><img src="/assets/logos/europa-eu.png" alt="EU" /></span> قانون الذكاء الاصطناعي الأوروبي + Shopify

تنفيذ قانون الذكاء الاصطناعي الأوروبي بدأ، بينما تطلق Shopify واجهات وكيلية عبر مساعدي الدردشة الكبار.

- تنفيذ قانون الذكاء الاصطناعي الأوروبي نشط الآن في جميع الدول الأعضاء [^14]
- Shopify أطلقت **واجهات وكيلية** في ChatGPT و Gemini و Copilot — مما يتيح للوكلاء إكمال عمليات الشراء مباشرةً [^15]

</div>
