import Link from "next/link";

export const metadata = {
  title: "EU Battery Passport 2027 — Complete Guide for BESS Developers | RenewableSupply.com",
  description: "Everything UK and European sub-20MW BESS developers need to know about the EU Battery Passport. Deadlines, obligations, procurement questions and compliance timeline.",
  keywords: "EU Battery Passport 2027, BESS compliance UK, industrial battery passport, EU Regulation 2023/1542, battery passport requirements",
};

export default function BatteryPassport() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <section className="bg-[#0F2A4A] px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/"
              className="text-slate-400 text-sm hover:text-slate-200 transition"
            >
              Home
            </Link>
            <span className="text-slate-600">→</span>
            <span className="text-slate-400 text-sm">Compliance Frameworks</span>
            <span className="text-slate-600">→</span>
            <span className="text-[#00B4A6] text-sm">EU Battery Passport</span>
          </div>
          <div className="inline-block bg-[#00B4A6]/20 text-[#00B4A6] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Mandatory 18 February 2027
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            EU Battery Passport —
            Complete Guide for
            BESS Developers
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
            EU Regulation 2023/1542 mandates a digital Battery Passport 
            for every industrial BESS above 2 kWh from 18 February 2027. 
            Here is exactly what UK and European sub-20MW developers 
            need to know — and do — right now.
          </p>
        </div>
      </section>

      {/* QUICK FACTS BAR */}
      <section className="bg-[#0a1f38] px-8 py-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Regulation", value: "EU 2023/1542" },
            { label: "Deadline", value: "18 Feb 2027" },
            { label: "Threshold", value: ">2 kWh" },
            { label: "Applies To", value: "All BESS" },
          ].map((fact) => (
            <div key={fact.label} className="text-center">
              <p className="text-[#00B4A6] font-bold text-lg">{fact.value}</p>
              <p className="text-slate-400 text-xs">{fact.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-8 py-16">

        {/* WARNING BOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4">
          <div className="text-2xl shrink-0">⚠️</div>
          <div>
            <h3 className="font-bold text-amber-900 mb-2">
              UK developers — you are not exempt
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Brexit does not protect you. Three triggers bring most UK 
              BESS developers into full Battery Passport obligations — 
              EU financing, project sales to EU buyers, and the expected 
              UK equivalent legislation. Read Section 4 carefully.
            </p>
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 mb-12 shadow-sm">
          <h2 className="text-xl font-bold text-[#0F2A4A] mb-6">
            In this guide
          </h2>
          <ol className="space-y-3">
            {[
              "What is the EU Battery Passport?",
              "Does it apply to your BESS project?",
              "The compliance timeline — 2024 to 2027",
              "The UK question — are you exempt?",
              "What must be in the Battery Passport?",
              "Six questions to ask your manufacturer now",
              "Penalties for non-compliance",
              "What to do next",
            ].map((item, i) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="text-[#00B4A6] font-bold text-sm shrink-0 mt-0.5">
                  {i + 1}.
                </span>
                <span className="text-[#64748B] text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 1 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            1. What is the EU Battery Passport?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-4">
              The EU Battery Passport is a digital record — accessible via 
              QR code — that documents the full lifecycle of a battery. 
              It is mandated by EU Regulation 2023/1542, also known as 
              the EU Battery Regulation, which came into force on 
              18 February 2024.
            </p>
            <p className="text-[#64748B] leading-relaxed mb-4">
              From 18 February 2027, every industrial battery with a 
              capacity greater than 2 kWh placed on the EU market must 
              have a Battery Passport. This includes every commercial 
              BESS project without exception.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              The passport must contain publicly accessible information 
              about the battery's material composition, carbon footprint, 
              and recycled content — as well as restricted technical data 
              on dismantling, state of health, and operational history.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            2. Does it apply to your BESS project?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm mb-4">
            <p className="text-[#64748B] leading-relaxed mb-6">
              The regulation defines a stationary battery energy storage 
              system explicitly as an industrial battery. The 2 kWh 
              threshold is absolute — and every commercial BESS project 
              is well above it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  label: "Battery type covered",
                  value: "Industrial batteries — which explicitly includes BESS",
                  positive: true,
                },
                {
                  label: "Capacity threshold",
                  value: "Greater than 2 kWh — all commercial BESS qualify",
                  positive: true,
                },
                {
                  label: "Who is responsible",
                  value: "The economic operator placing the battery on the market or putting it into service",
                  positive: true,
                },
                {
                  label: "Exemptions",
                  value: "None for commercial BESS above 2 kWh",
                  positive: false,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F8FAFC] rounded-xl p-4 border border-slate-100"
                >
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#0F2A4A] text-sm font-semibold leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3 — TIMELINE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            3. The compliance timeline — 2024 to 2027
          </h2>
          <div className="space-y-4">
            {[
              {
                date: "18 August 2024",
                status: "PAST",
                title: "Safety documentation required",
                desc: "Technical documentation proving BESS passed safety tests including thermal shock, overcharge protection and thermal propagation must be in place.",
                color: "slate",
              },
              {
                date: "18 August 2025",
                status: "NOW",
                title: "Producer registration and due diligence",
                desc: "Operators must register in national producer registers. Companies with net turnover above €40m must implement a battery due diligence policy covering cobalt, lithium, nickel and graphite sourcing.",
                color: "amber",
              },
              {
                date: "18 February 2026",
                status: "NEXT",
                title: "Carbon footprint declaration mandatory",
                desc: "A carbon footprint declaration must be drawn up for each battery model per manufacturing plant. This must include lifecycle carbon footprint calculated as kg CO2 equivalent per 1 kWh over service life.",
                color: "teal",
              },
              {
                date: "18 August 2026",
                status: "NEXT",
                title: "General labelling requirements",
                desc: "Batteries must bear labels with manufacturer ID, battery category, date of manufacture, weight, capacity and chemistry.",
                color: "teal",
              },
              {
                date: "18 February 2027",
                status: "DEADLINE",
                title: "Battery Passport mandatory",
                desc: "Every industrial BESS above 2 kWh placed on the EU market must have a digital Battery Passport accessible via QR code containing full material composition, carbon footprint class and state of health data.",
                color: "red",
              },
            ].map((item) => (
              <div
                key={item.date}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-6"
              >
                <div className="shrink-0 text-center w-24">
                  <div className={`text-xs font-bold px-2 py-1 rounded-full mb-2 ${
                    item.status === "PAST"
                      ? "bg-slate-100 text-slate-500"
                      : item.status === "NOW"
                      ? "bg-amber-100 text-amber-700"
                      : item.status === "DEADLINE"
                      ? "bg-red-100 text-red-700"
                      : "bg-teal-100 text-teal-700"
                  }`}>
                    {item.status}
                  </div>
                  <p className="text-[#0F2A4A] text-xs font-bold leading-tight">
                    {item.date}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F2A4A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — UK QUESTION */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            4. The UK question — are you exempt?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm mb-4">
            <p className="text-[#64748B] leading-relaxed mb-6">
              The short answer is: probably not. While the EU Battery 
              Regulation technically applies only to batteries placed on 
              the EU market, three triggers bring most UK BESS developers 
              into full compliance obligations.
            </p>
            <div className="space-y-6">
              {[
                {
                  trigger: "Trigger 1 — EU Financing",
                  desc: "Many UK funds use EU capital or co-investment structures. Article 85 of EU Regulation 2023/1542 requires EU contracting authorities to take lifecycle environmental impacts into account under Green Public Procurement rules. Projects using non-compliant batteries may be ineligible for EU-linked financing.",
                },
                {
                  trigger: "Trigger 2 — Project Sales to EU Buyers",
                  desc: "UK developers who sell completed projects to EU investors or buyers become the legal manufacturer under EU law. Full Battery Passport obligations apply from the moment the battery is placed on the EU market under your name or trademark.",
                },
                {
                  trigger: "Trigger 3 — UK Equivalent Legislation",
                  desc: "The UK government has a consistent track record of adopting equivalent environmental legislation 12 to 24 months after EU implementation. Building Battery Passport readiness now protects you regardless of what the UK legislates.",
                },
              ].map((item) => (
                <div
                  key={item.trigger}
                  className="border-l-4 border-[#00B4A6] pl-6"
                >
                  <h3 className="font-bold text-[#0F2A4A] mb-2">
                    {item.trigger}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5 — WHAT MUST BE IN IT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            5. What must be in the Battery Passport?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              Under Article 77(2) and Annex XIII, the Battery Passport 
              contains three tiers of information with different 
              access levels.
            </p>
            <div className="space-y-6">
              {[
                {
                  tier: "Tier 1 — Publicly Accessible",
                  items: [
                    "Manufacturer identification and place of manufacture",
                    "Battery weight, capacity and chemistry",
                    "Critical raw materials above 0.1% concentration",
                    "Carbon footprint information and class",
                    "Recycled content documentation",
                    "Responsible sourcing reports",
                  ],
                },
                {
                  tier: "Tier 2 — Restricted Access",
                  items: [
                    "Detailed material composition — cathode, anode, electrolyte",
                    "Dismantling information and disassembly sequences",
                    "Required tools for safe dismantling",
                    "State of health and expected lifetime data",
                    "Charging cycle count and temperature history",
                  ],
                },
                {
                  tier: "Tier 3 — Authorities Only",
                  items: [
                    "Test reports proving compliance with the Regulation",
                    "Results of Annex V safety testing",
                  ],
                },
              ].map((tier) => (
                <div key={tier.tier}>
                  <h3 className="font-bold text-[#0F2A4A] mb-3">
                    {tier.tier}
                  </h3>
                  <ul className="space-y-2">
                    {tier.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-[#64748B] text-sm"
                      >
                        <span className="text-[#00B4A6] shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 6 — SIX QUESTIONS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            6. Six questions to ask your manufacturer now
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              These questions should be included in every BESS procurement 
              process from today. If a manufacturer cannot answer them, 
              that is a compliance risk for your project.
            </p>
            <div className="space-y-6">
              {[
                {
                  q: "Safety testing documentation",
                  ask: "Can you provide technical documentation proving the system passed the Annex V safety tests — specifically regarding thermal propagation and internal short circuits?",
                },
                {
                  q: "BMS data access",
                  ask: "Does your BMS provide read-only access to state of health data for our operations team as required by Article 14?",
                },
                {
                  q: "Carbon footprint declaration",
                  ask: "Do you have the Carbon Footprint Declaration and supporting Product Environmental Footprint study for this specific battery model and manufacturing plant?",
                },
                {
                  q: "Supply chain due diligence",
                  ask: "Can you provide your third-party verified Due Diligence Policy regarding the ethical sourcing of lithium and cobalt in these cells?",
                },
                {
                  q: "Battery Passport readiness",
                  ask: "Is this battery model assigned a unique identifier and QR code that will link to a Battery Passport system by early 2027?",
                },
                {
                  q: "Recycled content",
                  ask: "What is the percentage share of recovered cobalt, lithium and nickel currently present in the active materials of this battery?",
                },
              ].map((item, i) => (
                <div
                  key={item.q}
                  className="flex gap-4"
                >
                  <div className="text-2xl font-bold text-slate-100 shrink-0 w-8">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2A4A] mb-2">
                      {item.q}
                    </h3>
                    <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4">
                      <p className="text-[#64748B] text-sm leading-relaxed italic">
                        "{item.ask}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 7 — PENALTIES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            7. Penalties for non-compliance
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              Under Articles 79, 83 and 93 of EU Regulation 2023/1542, 
              market surveillance authorities have significant enforcement 
              powers.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: "🚫",
                  title: "Market withdrawal",
                  desc: "Authorities can require withdrawal of non-compliant batteries from the market.",
                },
                {
                  icon: "📢",
                  title: "Recall",
                  desc: "Non-compliant batteries already in service can be subject to mandatory recall.",
                },
                {
                  icon: "💶",
                  title: "Financial penalties",
                  desc: "Member States must establish penalties that are effective, proportionate and dissuasive. Specific amounts vary by jurisdiction.",
                },
                {
                  icon: "🔒",
                  title: "Market prohibition",
                  desc: "Provisional measures can prohibit or restrict battery availability on national markets.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-[#F8FAFC] rounded-xl p-4 border border-slate-100"
                >
                  <div className="text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0F2A4A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 8 — WHAT TO DO NEXT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            8. What to do next
          </h2>
          <div className="bg-[#0F2A4A] rounded-2xl p-8">
            <p className="text-slate-300 leading-relaxed mb-8">
              Battery Passport compliance is not a 2027 problem. 
              The carbon footprint declaration is required by February 2026. 
              Safety documentation was required in 2024. 
              The documentation chain starts at procurement — which means 
              it starts now.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Add the six manufacturer questions to your procurement process immediately",
                "Request carbon footprint declarations from your battery supplier",
                "Verify your manufacturer has a Battery Passport roadmap for 2027",
                "Document your supply chain due diligence policy if turnover exceeds €40m",
                "Assess whether your financing structure triggers EU obligations",
              ].map((action) => (
                <div
                  key={action}
                  className="flex gap-3 items-start"
                >
                  <span className="text-[#00B4A6] shrink-0 mt-0.5">✓</span>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {action}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/#guide"
              className="inline-block bg-[#00B4A6] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#00d4c4] transition"
            >
              Download The Full 2026 BESS Compliance Guide
            </Link>
          </div>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
          <p className="text-slate-500 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> This guide is provided for 
            informational purposes only and does not constitute legal 
            advice. Regulatory requirements change frequently. Always 
            consult a qualified legal professional before making 
            compliance decisions. Information is based on EU Regulation 
            2023/1542 as published. Last reviewed January 2026.
          </p>
        </div>

        {/* OTHER FRAMEWORKS */}
        <div>
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            Other compliance frameworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "G99 & G100",
                desc: "UK grid connection compliance for solar and BESS developers",
                href: "/frameworks/g99",
              },
              {
                title: "CBAM",
                desc: "Carbon Border Adjustment Mechanism — UK and EU dual reporting",
                href: "/frameworks/cbam",
              },
              {
                title: "CSDDD",
                desc: "Corporate Sustainability Due Diligence Directive",
                href: "/frameworks/csddd",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition group"
              >
                <h3 className="font-bold text-[#0F2A4A] mb-2 group-hover:text-[#00B4A6] transition">
                  {f.title} →
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {f.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </section>

    </main>
  );
}
