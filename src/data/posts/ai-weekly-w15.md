---
title: "AI Weekly | 2026-W15"
titleAr: "أخبار الذكاء الاصطناعي الأسبوعية | 2026-W15"
description: "Claude Opus 4.7 lands, OpenAI Codex everywhere, RIP Pull Requests, MacBook Neo sells out, top 5 VCs take 75% of capital, cybersecurity as proof of work, and more"
descriptionAr: إطلاق Claude Opus 4.7، OpenAI Codex في كل مكان، وداعاً لطلبات السحب، MacBook Neo ينفد، أعلى 5 صناديق تستحوذ على 75٪ من رأس المال، الأمن السيبراني كإثبات عمل، والمزيد
pubDatetime: 2026-04-17T00:00:00.000Z
author: sa/acc
tags: 
  - ai-weekly
  - news
slug: ai-weekly-w15
---



<div class="lang-block lang-en">

## 🚀 Releases

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Claude Opus 4.7 — "An Engineer You Delegate To"

Anthropic shipped **Claude Opus 4.7** generally across Claude, the API, Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry. Pricing is unchanged at **$5 / $25 per million input / output tokens** [^1].

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">64.3%</span>
    <span class="stat-label">SWE-Bench Pro (+10.9 pts vs 4.6)</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">80.6%</span>
    <span class="stat-label">Document Reasoning (+23.5 pts)</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">75.83%</span>
    <span class="stat-label">ARC-AGI-2</span>
  </div>
  <div class="stat-block stat-yellow">
    <span class="stat-number">3.75 MP</span>
    <span class="stat-label">vision input (3× prior)</span>
  </div>
</div>

**Benchmark scorecard:**

| Benchmark | Opus 4.7 | Δ vs. 4.6 |
|---|---|---|
| SWE-Bench Pro | 64.3% | +10.9 pts |
| SWE-Bench Verified | 87.6% | +7 pts |
| TerminalBench 2.0 | 69.4% | +4 pts |
| Document Reasoning | 80.6% | +23.5 pts |
| GDPval-AA | 1,753 Elo | #1 vs. GPT-5.4 |
| ARC-AGI-1 / ARC-AGI-2 | 92% / 75.83% | — |
| Vals Index | 71.4% | +3.7 pts |

**What's new beyond the scores:**

- **New `xhigh` reasoning effort** sits between `high` and `max`; Claude Code defaults to it for Opus 4.7.
- **New tokenizer** consumes ~1.0–1.35× more tokens per input, but improved reasoning efficiency can net out to *lower* total usage. Anthropic raised subscriber limits to offset.
- **Task budgets** (public beta) cap token spend on long-running agent runs.
- **`/ultrareview`** slash command opens a dedicated code-review mode with integrated bug detection.
- **Cybersecurity safeguards** auto-detect and block high-risk cyber uses; a new Cyber Verification Program whitelists legitimate researchers.

**Partner results (independently reported):**

- **Cursor** internal benchmark jumped from 58% → **70%**.
- **Notion** saw a **14% lift** with one-third fewer tool errors.
- **GitHub** confirmed similar-magnitude improvements on Copilot evals.

<div class="callout callout-warning">
<p><strong>The asterisk.</strong> LlamaIndex's evals show chart understanding soared from 13.5% → 55.8%, but document <em>layout</em> regressed from 16.5% → 14%. At roughly <strong>7¢ per page</strong> for OCR-heavy workflows, Opus 4.7 is ~17× more expensive than specialized doc-AI pipelines. And in this week's <em>Research</em> bucket, Bryan Cantrill argues the broader tradeoff is bloat, not intelligence — worth holding in mind before you hand it a blank repo.</p>
</div>

> Anthropic's framing: Opus 4.7 is *"an engineer you delegate to"* — autonomous task execution validated through tests, not hands-on-keyboard prompting.

### Qwen3.6-35B-A3B — Open to All

Alibaba shipped **Qwen3.6-35B-A3B** the same week: a 35B-total / 3B-active MoE aimed squarely at agentic coding, with **Apache 2.0** weights, **262K context** native, and **73.4 on SWE-bench Verified** [^2]. After Anthropic gated Mythos behind GlassWing and Meta kept Muse Spark in private preview, Qwen3.6 is the open-weights counter-bet for the month.

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> OpenAI Codex for Almost Everything

OpenAI repositioned **Codex** from a coding autocomplete into a general desktop agent platform — computer use, multi-agent workflows, 90+ plugins, in-app browser, and persistent memory [^3]. The expansion lands in direct competition with Claude Code / Cowork and Cursor's agent stack, turning the "default developer agent" slot into the hottest three-way race in the industry.

### Windsurf 2.0 — Devin + Agent Command Center

**Windsurf 2.0** shipped a Kanban-style **Agent Command Center** for orchestrating local + cloud agents, Devin integration, and "Spaces" for organizing long-running work contexts [^4]. The IDE layer is consolidating around visible agent orchestration, not just editor-inline autocomplete.

### <span class="section-thumb"><img src="/assets/logos/google-com.png" alt="Google" /></span> Gemini 3.1 Flash TTS + Skills in Chrome

Two Google moves in one week:

- **Gemini 3.1 Flash** added text-to-speech covering 70+ languages with 200+ audio control tags, debuting at **1,211 Elo** on the voice arena [^5].
- **Skills in Chrome** went live (US English, desktop first) — reusable AI workflows invocable directly in the browser.

### <span class="section-thumb"><img src="/assets/logos/apple-com.png" alt="Apple" /></span> MacBook Neo at $599 Sells Out

Apple's entry-level **MacBook Neo** sold out on launch day, with Apple reportedly ramping toward **10 million units per year** [^6]. Touch ID, four colors, and the cheapest Mac ever priced — a direct play for students and emerging markets, and a reshaped floor for the entry-level laptop tier.

## 🔥 Drama

### RIP Pull Requests (2005–2026)

The provocation of the week came from Latent.Space: *"RIP Pull Requests."* Three signals stacked up [^7]:

- **GitHub is now allowing repos to disable PRs entirely** — a first in the platform's twenty-year history.
- **Pete Steinberger and Theo** are advocating for **"Prompt Requests"**: an agent-native replacement with no merge conflicts, easier maintainer modification, and a smaller security surface.
- **Mitchell Hashimoto** and **Amp Code** are building **reputation-based contribution systems** that sidestep PRs entirely for untrusted contributors.

<div class="callout callout-info">
<p><strong>Aaron Levie's frame:</strong> <em>"The path forward is to make software that agents want."</em> Human-centric VCS becomes friction the moment humans leave the loop. The escalating question: if code reviews are dead and PRs are dead — how long until Git itself is next?</p>
</div>

## 💰 Money

### <span class="section-thumb"><img src="/assets/logos/tldrnewsletter-com.png" alt="TLDR" /></span> Top 5 VCs Now Control 75% of Venture

TLDR Founders surfaced the concentration data that everyone reshared this week [^8]:

<div class="stat-grid">
  <div class="stat-block stat-red">
    <span class="stat-number">73.1%</span>
    <span class="stat-label">of Q1 2026 venture capital flowed to the top 5 funds</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">75%</span>
    <span class="stat-label">of deal value concentrated in 5 companies</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">5</span>
    <span class="stat-label">OpenAI · Anthropic · xAI · Waymo · Databricks</span>
  </div>
</div>

<figure class="post-meme">
<img src="/assets/memes/stonks.png" alt="Stonks meme" />
<figcaption>Five companies. Five funds. One chart.</figcaption>
</figure>

If you're not in the orbit of one of those five firms, capital access narrows dramatically — and the founder ecosystem's center of gravity keeps shifting further from seed-stage SaaS toward compute-heavy AI labs.

## 🔬 Research

### The Peril of Laziness Lost

Bryan Cantrill — of DTrace and Oxide Computer — argues that LLMs encourage **bloated systems, not elegant ones** [^9]. His thesis:

- True engineering laziness — the kind that produces minimal, beautiful code — requires **deep cognitive work**.
- LLMs have no time-scarcity constraint. They happily emit the 5,000-line version when a 200-line version exists.
- The essay takes direct aim at **Garry Tan's 37K-LOC-per-day** boast as a metric of decline, not progress.

<figure class="post-meme">
<img src="/assets/memes/expanding-brain.jpg" alt="Expanding Brain meme" />
<figcaption>Tier 1: writing less code. Tier 2: deleting code. Tier 3: not writing it in the first place. Tier 4: <em>an LLM that understands why you didn't.</em></figcaption>
</figure>

Pair it with the Opus 4.7 launch above — the models are getting better at producing code. The question Cantrill keeps asking is whether we're getting better at deciding what *not* to build.

### Physical Intelligence π0.7 — The Robot Brain That Wasn't Taught

**Physical Intelligence** unveiled **π0.7**, a robot foundation model that learns tasks it was **never explicitly trained on** through compositional generalization — remixing learned skills into novel behaviors [^10]. Coverage emphasized that the results surprised the team's own researchers, a rare admission in a field where demos are usually stage-managed.

<div class="callout callout-info">
<p>If coding agents were 2025's frontier, robotics + foundation models is 2026's. π0.7 is the clearest signal yet that the "generalization" story is jumping out of chat windows into the physical world.</p>
</div>

### Humanity's Last Gasp

Latent.Space's reflective mid-week piece [^11]. The paradox: despite AI agents handling more work, humans are working **harder** than ever.

- **Aaron Levie**: *"AI is not causing anyone to do less work right now — teams are the busiest they've ever been."*
- **Tyler Cowen**: people should work harder NOW, regardless of AI's long arc.
- **Notion's Simon Last**: *"sleepless nights and 24/7 work"* managing the agent layer.

The "Turkey Problem" metaphor: knowledge workers may be like turkeys before Thanksgiving — the historical data looks great until the inflection point arrives.

## 🏗️ Infrastructure

### Cybersecurity Is Proof of Work Now

**Drew Breunig's** thesis of the week: as AI models discover vulnerabilities faster than humans can patch them, cybersecurity becomes a continuous computational tax — **"proof of work"** every defender has to pay just to stay online [^12]. Pairs with last week's Anthropic Mythos / Project GlassWing story: if one frontier model can find thousands of high-severity bugs, "secure" becomes a function of how much compute you point at the problem.

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Cloudflare Email for Agents

Cloudflare launched an **email service designed for AI agents** — public beta, OpenAI-compatible API, and a Workers binding so agents (Codex, Cursor, Claude Code, and friends) can send and receive email with programmatic identities [^13]. Agent infrastructure is catching up to the agent paradigm itself.

### IPv6 Traffic Crosses 50%

Google's measurement team clocked IPv6 at **50.1%** of global traffic on March 28, up from 46.33% a year earlier — the halfway mark for a protocol that debuted in 1998 [^14]. Regional variation remains stark: France and Germany run ~75–80%, the US ~50%, large parts of the world still near zero.

## 📜 Policy

### <span class="section-thumb"><img src="/assets/logos/eff-org.png" alt="EFF" /></span> Google Broke Its Promise — ICE Has the Data

The EFF filed a complaint on **April 14** with the California and New York Attorneys General alleging that Google violated its own stated policy by handing a subpoena target's credit card, bank account, and IP address to ICE **without the pre-notice Google publicly promised** [^15].

- Google's published policy requires pre-notice to the user so they can contest the subpoena before data is disclosed.
- The EFF complaint says Google skipped that step in an ICE request.
- Filed in both CA and NY to exercise state-level consumer-protection leverage.

<div class="callout callout-danger">
<p><strong>Why this matters beyond one case.</strong> If a platform's contestation procedure is optional at its own discretion, it isn't a procedure.</p>
</div>

### 30 WordPress Plugins, 30 Backdoors

A single buyer quietly acquired **30 WordPress plugins via Flippa**, backdoored them in August 2025, and let the code sit dormant for **eight months** before activating payloads on April 5–6, 2026 [^16]. WordPress.org killed 31 plugins on April 7. Even more cleverly, the payloads served malicious responses **only to Googlebot** — weaponizing the index itself.

<figure class="post-meme">
<img src="/assets/memes/this-is-fine.jpg" alt="This is fine" />
<figcaption>Every WordPress site owner checking their install list this week.</figcaption>
</figure>

### Fiverr's Customer Files Went Public

A "Tell HN" post exposed that **30,000+ Fiverr customer PDFs** — tax returns, IDs, contracts, addresses — were publicly accessible and Google-indexed via misconfigured Cloudinary URLs [^17]. Fiverr disputes the framing as a "breach," but the data was searchable. The story landing in the same week as the Google-ICE disclosure makes the point: the data plumbing underneath the "AI everywhere" era is brittle in places users assumed were solid.

[^1]: <https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally>
[^2]: <https://github.com/QwenLM/Qwen3.6>
[^3]: <https://openai.com/index/codex-for-almost-everything/>
[^4]: <https://windsurf.com/blog/windsurf-2-0>
[^5]: <https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/>
[^6]: <https://www.macrumors.com/2026/04/16/macbook-neo-demand-surging/>
[^7]: <https://www.latent.space/p/ainews-rip-pull-requests-2005-2026>
[^8]: <https://www.saastr.com/vc-in-2026-75-of-all-the-money-is-going-to-just-5-funds-and-just-5-startups/>
[^9]: <https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/>
[^10]: <https://techcrunch.com/2026/04/16/physical-intelligence-a-hot-robotics-startup-says-its-new-robot-brain-can-figure-out-tasks-it-was-never-taught>
[^11]: <https://www.latent.space/p/ainews-humanitys-last-gasp>
[^12]: <https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html>
[^13]: <https://blog.cloudflare.com/email-for-agents/>
[^14]: <https://www.google.com/intl/en/ipv6/statistics.html>
[^15]: <https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data>
[^16]: <https://techcrunch.com/2026/04/14/someone-planted-backdoors-in-dozens-of-wordpress-plugins-used-in-thousands-of-websites/>
[^17]: <https://cybernews.com/security/fiverr-leak-exposes-user-ids-contracts-data/>

</div>


<div class="lang-block lang-ar" dir="rtl">

## 🚀 الإصدارات

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Claude Opus 4.7 — "مهندس توكّل إليه المهمة"

Anthropic أطلقت **Claude Opus 4.7** للعموم عبر Claude وواجهة الـ API و Amazon Bedrock و Google Cloud Vertex AI و Microsoft Foundry. السعر لم يتغير: **$5 / $25 لكل مليون توكن دخل / خرج** [^1].

<div class="stat-grid">
  <div class="stat-block stat-green">
    <span class="stat-number">64.3%</span>
    <span class="stat-label">SWE-Bench Pro (+10.9 نقطة عن 4.6)</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">80.6%</span>
    <span class="stat-label">فهم المستندات (+23.5 نقطة)</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">75.83%</span>
    <span class="stat-label">ARC-AGI-2</span>
  </div>
  <div class="stat-block stat-yellow">
    <span class="stat-number">3.75 ميغابكسل</span>
    <span class="stat-label">رؤية (3× عن السابق)</span>
  </div>
</div>

**بطاقة النتائج:**

| المعيار | Opus 4.7 | الفرق عن 4.6 |
|---|---|---|
| SWE-Bench Pro | 64.3% | +10.9 نقطة |
| SWE-Bench Verified | 87.6% | +7 نقاط |
| TerminalBench 2.0 | 69.4% | +4 نقاط |
| فهم المستندات | 80.6% | +23.5 نقطة |
| GDPval-AA | 1,753 Elo | المركز #1 أمام GPT-5.4 |
| ARC-AGI-1 / ARC-AGI-2 | 92% / 75.83% | — |
| Vals Index | 71.4% | +3.7 نقطة |

**ما الجديد وراء الأرقام:**

- **مستوى تفكير `xhigh` جديد** بين `high` و `max`؛ Claude Code يعتمده افتراضياً لـ Opus 4.7.
- **مُجزِّئ توكنات جديد** يستهلك ~1.0–1.35× توكنات لكل دخل، لكن كفاءة الاستدلال المحسَّنة قد تقلّل الاستهلاك الكلي. Anthropic رفعت حدود المشتركين لتعويض ذلك.
- **ميزانيات المهام** (معاينة عامة) تحدد سقف التوكنات لمهام الوكلاء طويلة الأمد.
- **أمر `/ultrareview`** يفتح جلسة مراجعة كود مخصصة مع كشف أخطاء متكامل.
- **ضوابط الأمن السيبراني** تكتشف وتحجب الاستخدامات السيبرانية عالية الخطورة تلقائياً؛ برنامج *Cyber Verification* يستثني الباحثين الشرعيين.

**نتائج الشركاء (تقارير مستقلة):**

- **Cursor** قفز في معياره الداخلي من 58% → **70%**.
- **Notion** حققت ارتفاعاً بـ **14%** مع ثلث أخطاء الأدوات السابقة.
- **GitHub** أكدت تحسينات بحجم مماثل على تقييمات Copilot.

<div class="callout callout-warning">
<p><strong>النجمة الصغيرة.</strong> تقييمات LlamaIndex تُظهر قفزة في فهم المخططات من 13.5% → 55.8%، لكن تخطيط المستندات تراجع من 16.5% → 14%. بكلفة تقارب <strong>7 سنتات للصفحة</strong> في مهام OCR، Opus 4.7 أغلى بـ 17× تقريباً من أنابيب الوثائق المتخصصة. وفي قسم <em>الأبحاث</em> هذا الأسبوع، Bryan Cantrill يجادل بأن المقايضة الأعمق هي التضخم، لا الذكاء — ضع ذلك في بالك قبل أن تسلّمه مستودعاً فارغاً.</p>
</div>

> صياغة Anthropic: Opus 4.7 هو *"مهندس توكّل إليه"* — تنفيذ مستقل للمهام مُحقَّق عبر الاختبارات، لا عبر التوجيه المستمر.

### Qwen3.6-35B-A3B — مفتوح للجميع

Alibaba أطلقت **Qwen3.6-35B-A3B** في نفس الأسبوع: نموذج MoE بـ 35 مليار إجمالي / 3 مليار نشط يستهدف البرمجة بالوكلاء، بأوزان **Apache 2.0**، و**262 ألف توكن سياق** أصلي، و**73.4 على SWE-bench Verified** [^2]. بعد أن حصرت Anthropic نموذج Mythos خلف GlassWing وأبقت Meta نموذج Muse Spark في معاينة خاصة، Qwen3.6 يأتي بمراهنة الأوزان المفتوحة المضادة لهذا الشهر.

### <span class="section-thumb"><img src="/assets/logos/openai-com.png" alt="OpenAI" /></span> OpenAI Codex لكل شيء تقريباً

OpenAI أعادت تموضع **Codex** من إكمال تلقائي للبرمجة إلى منصة وكيل سطح مكتب عام — استخدام الحاسوب، سير أعمال بعدة وكلاء، 90+ إضافة، متصفح داخلي، وذاكرة مستمرة [^3]. التوسع يأتي في منافسة مباشرة مع Claude Code / Cowork ومع مكدّس Cursor، ويحوّل موقع "وكيل المطور الافتراضي" إلى أشرس سباق ثلاثي في الصناعة.

### Windsurf 2.0 — Devin + مركز قيادة الوكلاء

**Windsurf 2.0** أطلق **مركز قيادة وكلاء** على طراز Kanban لتنسيق الوكلاء المحليين والسحابيين، تكاملاً مع Devin، و"Spaces" لتنظيم سياقات العمل طويلة الأمد [^4]. طبقة الـ IDE تتوحد حول تنسيق الوكلاء المرئي، لا مجرد الإكمال التلقائي داخل المحرر.

### <span class="section-thumb"><img src="/assets/logos/google-com.png" alt="Google" /></span> Gemini 3.1 Flash TTS + Skills في Chrome

تحرّكان من Google في أسبوع واحد:

- **Gemini 3.1 Flash** أضاف تحويل النص إلى كلام بأكثر من 70 لغة و200+ وسم تحكم صوتي، بنتيجة **1,211 Elo** في ساحة الصوت [^5].
- **Skills في Chrome** انطلق (إنجليزية أمريكية، سطح المكتب أولاً) — سير عمل AI قابل لإعادة الاستخدام يُستدعى مباشرةً في المتصفح.

### <span class="section-thumb"><img src="/assets/logos/apple-com.png" alt="Apple" /></span> MacBook Neo بـ 599 دولاراً ينفد

**MacBook Neo** من Apple نفد يوم الإطلاق، وتقارير تتحدث عن توسع إنتاج نحو **10 ملايين وحدة سنوياً** [^6]. Touch ID، أربعة ألوان، وأرخص Mac في التاريخ — لعبة مباشرة للطلاب والأسواق الناشئة، وقاعدة جديدة لفئة اللابتوب المبتدئة.

## 🔥 الجدل

### وداعاً لطلبات السحب (2005–2026)

استفزاز الأسبوع جاء من Latent.Space: *"RIP Pull Requests."* ثلاث إشارات تتراكم [^7]:

- **GitHub تسمح الآن للمستودعات بتعطيل طلبات السحب كلياً** — لأول مرة في عشرين سنة من تاريخ المنصة.
- **Pete Steinberger و Theo** يروّجان لـ **"Prompt Requests"**: بديل مصمم للوكلاء، بلا تعارضات دمج، وأسهل على المُصيِّن، وبمساحة أمان أضيق.
- **Mitchell Hashimoto** و**Amp Code** يبنيان **أنظمة مساهمة قائمة على السمعة** تتجاوز طلبات السحب كلياً للمساهمين غير الموثوقين.

<div class="callout callout-info">
<p><strong>تأطير Aaron Levie:</strong> <em>"الطريق الأمام هو صناعة برمجيات يريدها الوكلاء."</em> أدوات التحكم بالإصدار المصممة للبشر تتحول إلى احتكاك لحظة خروج البشر من الحلقة. السؤال المتصاعد: إن ماتت المراجعات وماتت طلبات السحب — فكم بقي حتى يموت Git نفسه؟</p>
</div>

## 💰 المال

### <span class="section-thumb"><img src="/assets/logos/tldrnewsletter-com.png" alt="TLDR" /></span> أعلى 5 صناديق استثمار تستحوذ على 75% من رأس المال

TLDR Founders سلّط الضوء على بيانات التركيز التي تناقلها الجميع هذا الأسبوع [^8]:

<div class="stat-grid">
  <div class="stat-block stat-red">
    <span class="stat-number">73.1%</span>
    <span class="stat-label">من رأس مال الربع الأول 2026 ذهب لأعلى 5 صناديق</span>
  </div>
  <div class="stat-block stat-purple">
    <span class="stat-number">75%</span>
    <span class="stat-label">من قيمة الصفقات تركّزت في 5 شركات</span>
  </div>
  <div class="stat-block stat-blue">
    <span class="stat-number">5</span>
    <span class="stat-label">OpenAI · Anthropic · xAI · Waymo · Databricks</span>
  </div>
</div>

<figure class="post-meme">
<img src="/assets/memes/stonks.png" alt="Stonks meme" />
<figcaption>خمس شركات. خمسة صناديق. رسم بياني واحد.</figcaption>
</figure>

إن لم تكن في مدار إحدى تلك الخمسة، فوصولك لرأس المال يضيق بشدة — ومركز ثقل عالم المؤسسين يزيح بعيداً عن SaaS المرحلة المبكرة نحو مختبرات AI كثيفة الحوسبة.

## 🔬 الأبحاث

### خطر فقدان الكسل

Bryan Cantrill — من DTrace و Oxide Computer — يجادل بأن LLMs تشجع **الأنظمة المتضخمة، لا الأنيقة** [^9]. أطروحته:

- الكسل الهندسي الحقيقي — النوع الذي ينتج كوداً قليلاً وجميلاً — يتطلب **عملاً ذهنياً عميقاً**.
- LLMs لا تعاني من شحّ الوقت. تُخرج بسرور نسخة من 5,000 سطر حين توجد نسخة من 200 سطر.
- المقالة تستهدف مباشرة تفاخر **Garry Tan بـ 37 ألف سطر كود يومياً** بوصفه مقياساً على التراجع، لا التقدم.

<figure class="post-meme">
<img src="/assets/memes/expanding-brain.jpg" alt="Expanding Brain meme" />
<figcaption>المرتبة 1: كتابة كود أقل. المرتبة 2: حذف الكود. المرتبة 3: عدم كتابته من الأساس. المرتبة 4: <em>LLM يفهم لماذا لم تكتبه.</em></figcaption>
</figure>

اجمع ذلك مع إطلاق Opus 4.7 أعلاه — النماذج تتحسّن في إنتاج الكود. سؤال Cantrill المستمر هو: هل نتحسّن في تحديد ما *لا* يجب بناؤه؟

### Physical Intelligence π0.7 — دماغ الروبوت الذي لم يُعلَّم

**Physical Intelligence** كشفت عن **π0.7**، نموذج أساس للروبوتات يتعلم مهام **لم يُدرَّب عليها صراحةً** عبر التعميم التركيبي — يعيد مزج المهارات المتعلمة إلى سلوكيات جديدة [^10]. التقارير أكدت أن النتائج فاجأت باحثي الفريق أنفسهم، وهو اعتراف نادر في مجال عروضه عادةً مصنوعة.

<div class="callout callout-info">
<p>إن كانت وكلاء البرمجة جبهة 2025، فالروبوتات + النماذج الأساسية جبهة 2026. π0.7 هو أوضح إشارة حتى الآن على أن قصة "التعميم" تقفز من نوافذ الدردشة إلى العالم الفيزيائي.</p>
</div>

### آخر أنفاس البشرية

مقال Latent.Space التأملي في منتصف الأسبوع [^11]. المفارقة: رغم أن الوكلاء يتولّون مزيداً من العمل، يعمل البشر **أشقّ** من أي وقت.

- **Aaron Levie**: *"AI لا يجعل أحداً يعمل أقل الآن — الفرق أكثر انشغالاً من أي وقت."*
- **Tyler Cowen**: الناس ينبغي أن يعملوا بجد الآن، بغض النظر عن المآل بعيد المدى للذكاء الاصطناعي.
- **Simon Last من Notion**: *"ليال بلا نوم وعمل 24/7"* في إدارة طبقة الوكلاء.

استعارة "مشكلة الديك الرومي": قد يشبه عمال المعرفة الديوك الرومية قبل عيد الشكر — البيانات التاريخية تبدو رائعة حتى تصل نقطة الانقلاب.

## 🏗️ البنية التحتية

### الأمن السيبراني أصبح إثبات عمل

أطروحة الأسبوع من **Drew Breunig**: بما أن النماذج تكتشف الثغرات أسرع مما يرقّع البشر، يتحول الأمن السيبراني إلى ضريبة حوسبية مستمرة — **"إثبات عمل"** يدفعه كل مدافع لمجرد البقاء على الإنترنت [^12]. يتكامل مع قصة Anthropic Mythos / Project GlassWing الأسبوع الماضي: إن كان نموذج رائد واحد يجد آلاف الثغرات عالية الخطورة، فـ "آمن" تصبح دالة بعدد وحدات الحوسبة التي توجهها للمشكلة.

### <span class="section-thumb"><img src="/assets/logos/anthropic-com.png" alt="Anthropic" /></span> Cloudflare Email للوكلاء

Cloudflare أطلقت **خدمة بريد مصممة لوكلاء الذكاء الاصطناعي** — معاينة عامة، واجهة API متوافقة مع OpenAI، وربط عبر Workers يتيح للوكلاء (Codex، Cursor، Claude Code، وغيرهم) إرسال واستقبال البريد بهويات برمجية [^13]. البنية التحتية للوكلاء تلحق بالنموذج نفسه.

### حركة IPv6 تتجاوز 50%

فريق القياس في Google سجّل IPv6 عند **50.1%** من حركة الإنترنت العالمية في 28 مارس، صعوداً من 46.33% قبل عام — نقطة المنتصف لبروتوكول ظهر عام 1998 [^14]. التباين الإقليمي لا يزال حاداً: فرنسا وألمانيا تعملان بـ ~75–80%، الولايات المتحدة ~50%، أجزاء كبيرة من العالم ما تزال قرب الصفر.

## 📜 السياسات

### <span class="section-thumb"><img src="/assets/logos/eff-org.png" alt="EFF" /></span> Google نكثت بوعدها — ICE تملك البيانات

مؤسسة EFF قدّمت في **14 أبريل** شكوى للمدعين العامّين في كاليفورنيا ونيويورك تزعم فيها أن Google انتهكت سياستها المُعلنة حين سلّمت بطاقة ائتمان وحساباً بنكياً وعنوان IP لهدف استدعاء إلى ICE **دون الإشعار المسبق الذي وعدت به Google علناً** [^15].

- سياسة Google المُعلنة تشترط إشعار المستخدم مسبقاً حتى يتمكن من الاعتراض قبل إفشاء البيانات.
- شكوى EFF تقول إن Google تخطّت تلك الخطوة في طلب ICE.
- قُدّمت في كاليفورنيا ونيويورك للاستفادة من ضغط قوانين حماية المستهلك في كلا الولايتين.

<div class="callout callout-danger">
<p><strong>لماذا يتجاوز الأمر قضية واحدة.</strong> إن كان إجراء الاعتراض في منصة ما اختيارياً بتقدير المنصة نفسها، فهو ليس إجراءً.</p>
</div>

### 30 إضافة WordPress، 30 باباً خلفياً

مشترٍ واحد اقتنى بهدوء **30 إضافة WordPress عبر Flippa**، زرع فيها أبواباً خلفية في أغسطس 2025، وترك الكود نائماً **ثمانية أشهر** قبل تفعيل الحمولات في 5–6 أبريل 2026 [^16]. WordPress.org أسقطت 31 إضافة في 7 أبريل. والأذكى: الحمولات كانت تقدّم ردوداً خبيثة **لـ Googlebot فقط** — سلاح الفهرسة نفسها.

<figure class="post-meme">
<img src="/assets/memes/this-is-fine.jpg" alt="This is fine" />
<figcaption>كل مالك موقع WordPress يراجع قائمة إضافاته هذا الأسبوع.</figcaption>
</figure>

### ملفات عملاء Fiverr في العلن

منشور "Tell HN" كشف أن **أكثر من 30 ألف ملف PDF لعملاء Fiverr** — إقرارات ضريبية، هويات، عقود، عناوين — كانت متاحة للعموم ومفهرسة على Google عبر روابط Cloudinary خاطئة الإعداد [^17]. Fiverr تنازع التوصيف بأنه "اختراق"، لكن البيانات كانت قابلة للبحث. وصول القصة في نفس أسبوع كشف Google-ICE يصنع النقطة: السباكة البيانية تحت حقبة "AI في كل مكان" هشّة في مواضع افترضها المستخدمون صلبة.

[^1]: <https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally>
[^2]: <https://github.com/QwenLM/Qwen3.6>
[^3]: <https://openai.com/index/codex-for-almost-everything/>
[^4]: <https://windsurf.com/blog/windsurf-2-0>
[^5]: <https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/>
[^6]: <https://www.macrumors.com/2026/04/16/macbook-neo-demand-surging/>
[^7]: <https://www.latent.space/p/ainews-rip-pull-requests-2005-2026>
[^8]: <https://www.saastr.com/vc-in-2026-75-of-all-the-money-is-going-to-just-5-funds-and-just-5-startups/>
[^9]: <https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/>
[^10]: <https://techcrunch.com/2026/04/16/physical-intelligence-a-hot-robotics-startup-says-its-new-robot-brain-can-figure-out-tasks-it-was-never-taught>
[^11]: <https://www.latent.space/p/ainews-humanitys-last-gasp>
[^12]: <https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html>
[^13]: <https://blog.cloudflare.com/email-for-agents/>
[^14]: <https://www.google.com/intl/en/ipv6/statistics.html>
[^15]: <https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data>
[^16]: <https://techcrunch.com/2026/04/14/someone-planted-backdoors-in-dozens-of-wordpress-plugins-used-in-thousands-of-websites/>
[^17]: <https://cybernews.com/security/fiverr-leak-exposes-user-ids-contracts-data/>

</div>
