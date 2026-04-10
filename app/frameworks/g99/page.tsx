import Link from "next/link";

export const metadata = {
  title: "G99 & G100 Grid Connection — Complete Guide for Solar and BESS Developers | RenewableSupply.com",
  description: "Everything UK sub-20MW solar and BESS developers need to know about G99 and G100 grid connection compliance. Application process, costs, timelines and common mistakes.",
  keywords: "G99 grid connection UK, G100 export limitation, BESS grid connection, solar grid connection UK, DNO application process",
};

export default function G99() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <section className="bg-[#0F2A4A] px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-slate-400 text-sm hover:text-slate-200 transition">
              Home
            </Link>
            <span className="text-slate-600">→</span>
            <span className="text-slate-400 text-sm">Compliance Frameworks</span>
            <span className="text-slate-600">→</span>
            <span className="text-[#00B4A6] text-sm">G99 & G100</span>
          </div>
          <div className="inline-block bg-[#00B4A6]/20 text-[#00B4A6] text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            UK Grid Connection Standard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            G99 & G100 Grid Connection —
            Complete Guide for Solar
            and BESS Developers
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
            G99 governs how your solar or BESS project connects to the 
            UK grid. G100 controls how you manage export limits. 
            One mistake in either costs months of delay. 
            Here is everything sub-20MW developers need to know.
          </p>
        </div>
      </section>

      {/* QUICK FACTS BAR */}
      <section className="bg-[#0a1f38] px-8 py-5">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Standard", value: "EREC G99" },
            { label: "Applies From", value: ">3.68kW" },
            { label: "Timeline", value: "6-18 months" },
            { label: "Cost Range", value: "£100K-£1M+" },
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
              The rules changed in 2025
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              The grid connection queue now operates on a 
              "First Ready, First Connected" basis — not first come 
              first served. Projects without planning permission or 
              land rights risk losing their place in the queue entirely. 
              Read Section 5 carefully.
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
              "What is G99 and what is G100?",
              "Which standard applies to your BESS project?",
              "The application process — step by step",
              "Costs — what to budget for",
              "2025 and 2026 rule changes",
              "DNO vs IDNO — which should you use?",
              "Seven common mistakes that cause delays",
              "Key regulatory bodies",
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
            1. What is G99 and what is G100?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm mb-4">
            <p className="text-[#64748B] leading-relaxed mb-6">
              G99 and G100 are two separate but related engineering 
              recommendations that govern how generating equipment 
              connects to and operates on the UK distribution network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "G99 — The Connection Standard",
                  desc: "Engineering Recommendation G99 governs the connection of power generating modules — including solar PV and BESS — to UK distribution networks. It applies to any system above 3.68 kW per phase and sets the technical requirements for protection, fault ride-through, power quality and safe grid integration.",
                  color: "teal",
                },
                {
                  title: "G100 — The Export Limitation Standard",
                  desc: "G100 is not a connection standard but a technical specification for Export Limitation Schemes. If your project's potential output exceeds the DNO's allowed export capacity, a G100-compliant control system is required to ensure you never breach the agreed export limit.",
                  color: "navy",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl p-6 border ${
                    item.color === "teal"
                      ? "bg-teal-50 border-teal-100"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  <h3 className={`font-bold mb-3 ${
                    item.color === "teal"
                      ? "text-teal-800"
                      : "text-[#0F2A4A]"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            2. Which standard applies to your BESS project?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              G99 categories are determined by capacity and connection 
              voltage. Most sub-20MW BESS projects fall into Type B or C.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  type: "Type A",
                  range: "0.8 kW to less than 1 MW",
                  voltage: "Connected at less than 110 kV",
                  relevant: false,
                },
                {
                  type: "Type B",
                  range: "1 MW to less than 10 MW",
                  voltage: "Connected at less than 110 kV",
                  relevant: true,
                },
                {
                  type: "Type C",
                  range: "10 MW to less than 50 MW",
                  voltage: "Connected at less than 110 kV",
                  relevant: true,
                },
                {
                  type: "Type D",
                  range: "50 MW or above",
                  voltage: "Connected at 110 kV or above",
                  relevant: false,
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className={`flex gap-4 rounded-xl p-4 border ${
                    item.relevant
                      ? "bg-teal-50 border-teal-200"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  <div className={`font-bold text-sm shrink-0 w-16 ${
                    item.relevant ? "text-teal-700" : "text-slate-400"
                  }`}>
                    {item.type}
                    {item.relevant && (
                      <span className="block text-xs font-normal">
                        ← You
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-[#0F2A4A] font-semibold text-sm">
                      {item.range}
                    </p>
                    <p className="text-[#64748B] text-xs">{item.voltage}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#0F2A4A] rounded-xl p-4">
              <p className="text-white text-sm font-semibold mb-1">
                Also need G100?
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                If your project's potential output exceeds the DNO's 
                allocated export capacity, a G100-compliant Export 
                Limitation Scheme is required alongside G99. 
                This is common for BESS projects in constrained areas.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 — PROCESS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            3. The application process — step by step
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Pre-application enquiry",
                who: "Developer",
                desc: "Informal discussion with the DNO to assess network capacity at the proposed site and obtain budget estimates. Essential before committing to a site.",
              },
              {
                step: "02",
                title: "Formal G99 application submission",
                who: "Developer",
                desc: "Submit detailed technical information, site plans and proposed connection arrangements to the DNO. Include G100 Export Limitation Scheme application if required. Key forms: G99 Form A1-1 for smaller systems, G99 Part 3 for generating unit data.",
              },
              {
                step: "03",
                title: "Connection offer issued",
                who: "DNO",
                desc: "DNO assesses the application and issues a connection offer with technical requirements, connection point, costs and terms. Timeline: 8-12 weeks for smaller systems, up to 18 months for larger projects.",
              },
              {
                step: "04",
                title: "Offer acceptance and payment",
                who: "Developer",
                desc: "Review and accept the connection offer. Pay the acceptance fee and Assessment and Design fees. This secures your place in the connection queue.",
              },
              {
                step: "05",
                title: "Design and construction",
                who: "Developer / EPC / ICP",
                desc: "Detailed design and construction of connection infrastructure. Contestable works can be carried out by an Independent Connection Provider — potentially faster and cheaper than the DNO.",
              },
              {
                step: "06",
                title: "Commissioning and testing",
                who: "EPC + DNO witness",
                desc: "Rigorous commissioning tests to confirm G99 and G100 compliance. DNO witness testing required. Submit G99 Form A3-2 for confirmation of commissioning.",
              },
              {
                step: "07",
                title: "Energisation",
                who: "DNO",
                desc: "Upon successful completion of all tests and documentation, the system is energised and connected to the grid.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex gap-6"
              >
                <div className="text-4xl font-bold text-slate-100 shrink-0 w-12">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0F2A4A]">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-[#00B4A6]/10 text-[#00B4A6] font-semibold px-2 py-0.5 rounded-full">
                      {item.who}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4 — COSTS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            4. Costs — what to budget for
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              Grid connection costs for sub-20MW BESS projects vary 
              significantly — from £100,000 to over £1 million depending 
              on network infrastructure and required upgrades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  label: "Assessment & Design fees",
                  value: "£500 — £10,000+",
                  desc: "DNO fees for evaluating your application and designing network modifications",
                },
                {
                  label: "Contestable works",
                  value: "Variable",
                  desc: "Can be carried out by ICP — often cheaper and faster than DNO",
                },
                {
                  label: "Total connection cost",
                  value: "£100K — £1M+",
                  desc: "Heavily influenced by existing network infrastructure and upstream reinforcement requirements",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100"
                >
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="text-[#00B4A6] font-bold text-xl mb-2">
                    {item.value}
                  </p>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Cost saving opportunity:</strong> Using an 
                Independent Connection Provider for contestable works 
                can significantly reduce costs and timelines. 
                IDNOs may also offer Asset Adoption Value rebates 
                that offset connection costs.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5 — 2025 CHANGES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            5. 2025 and 2026 rule changes
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              The UK grid connection process is undergoing the most 
              significant reforms in a decade. These changes directly 
              affect sub-20MW developers in the queue right now.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "First Ready, First Connected",
                  badge: "Major Change",
                  desc: "The queue has moved from First Come, First Served to First Ready, First Connected. Projects that are genuinely ready to progress — with planning permission and land rights secured — are now prioritised. Projects without these milestones risk losing their queue position.",
                },
                {
                  title: "TMO4+ Queue Management Reforms",
                  badge: "Ofgem Approved",
                  desc: "Ofgem approved NESO's TMO4+ reforms allowing DNOs to remove inactive projects from the connection queue. This frees capacity for viable projects but means developers must actively demonstrate progress.",
                },
                {
                  title: "Gate 1 and Gate 2 Milestones",
                  badge: "New Process",
                  desc: "Projects must meet specific milestones to move from Gate 1 to Gate 2 and secure a firm connection date. Gate 1 requires land rights and planning permission. Missing these milestones means losing your connection date.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-l-4 border-[#00B4A6] pl-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#0F2A4A]">
                      {item.title}
                    </h3>
                    <span className="text-xs bg-[#00B4A6]/10 text-[#00B4A6] font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 6 — DNO VS IDNO */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            6. DNO vs IDNO — which should you use?
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              Most developers default to their DNO without considering 
              the IDNO alternative. This is often a costly mistake.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "DNO",
                  subtitle: "Distribution Network Operator",
                  points: [
                    "Regional monopoly operator",
                    "Heavily regulated by Ofgem",
                    "Less commercial flexibility",
                    "Standard process and timelines",
                    "Non-contestable works only via DNO",
                  ],
                  recommended: false,
                },
                {
                  title: "IDNO",
                  subtitle: "Independent Distribution Network Operator",
                  points: [
                    "More flexible commercial terms",
                    "Potentially faster connection times",
                    "Asset Adoption Value rebates available",
                    "Can significantly offset connection costs",
                    "Worth evaluating for every project",
                  ],
                  recommended: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl p-6 border ${
                    item.recommended
                      ? "bg-teal-50 border-teal-200"
                      : "bg-slate-50 border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold text-lg ${
                      item.recommended ? "text-teal-800" : "text-[#0F2A4A]"
                    }`}>
                      {item.title}
                    </h3>
                    {item.recommended && (
                      <span className="text-xs bg-teal-200 text-teal-800 font-semibold px-2 py-0.5 rounded-full">
                        Consider first
                      </span>
                    )}
                  </div>
                  <p className="text-[#64748B] text-xs mb-4">
                    {item.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-[#64748B] text-sm"
                      >
                        <span className={`shrink-0 ${
                          item.recommended
                            ? "text-teal-600"
                            : "text-slate-400"
                        }`}>
                          {item.recommended ? "✓" : "•"}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 7 — MISTAKES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            7. Seven common mistakes that cause delays
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <div className="space-y-5">
              {[
                {
                  mistake: "Applying before securing land rights",
                  impact: "Under TMO4+ reforms, projects without land rights at Gate 1 risk removal from the connection queue entirely.",
                },
                {
                  mistake: "Inaccurate technical data in the application",
                  impact: "Discrepancies between submitted specifications and actual equipment cause rejection or expensive resubmission.",
                },
                {
                  mistake: "Forgetting to include G100",
                  impact: "Applying for G99 without a G100 Export Limitation Scheme when output exceeds DNO limits causes significant delays.",
                },
                {
                  mistake: "Skipping power quality studies early",
                  impact: "Neglecting harmonic and flicker studies for large BESS sites results in G99 non-compliance discovered at commissioning.",
                },
                {
                  mistake: "Not considering an ICP for contestable works",
                  impact: "Defaulting to DNO for all works when an Independent Connection Provider could deliver faster and cheaper.",
                },
                {
                  mistake: "Ignoring the IDNO option",
                  impact: "Missing out on Asset Adoption Value rebates that could significantly reduce total connection costs.",
                },
                {
                  mistake: "Failing to monitor queue position actively",
                  impact: "Under First Ready First Connected, passive developers lose their position to more active competitors.",
                },
              ].map((item, i) => (
                <div
                  key={item.mistake}
                  className="flex gap-4 bg-red-50 border border-red-100 rounded-xl p-4"
                >
                  <div className="text-red-400 font-bold text-sm shrink-0 w-6">
                    {i + 1}.
                  </div>
                  <div>
                    <h3 className="font-bold text-red-900 mb-1 text-sm">
                      {item.mistake}
                    </h3>
                    <p className="text-red-700 text-xs leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 8 — REGULATORY BODIES */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            8. Key regulatory bodies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Ofgem",
                role: "Independent energy regulator for Great Britain. Sets the rules, approves reforms and ensures network companies operate fairly.",
              },
              {
                name: "NESO",
                role: "National Energy System Operator. Manages the overall connection queue and implements strategic reforms including TMO4+.",
              },
              {
                name: "DNOs",
                role: "Distribution Network Operators. Own and operate local electricity networks. Process connection applications and issue offers.",
              },
              {
                name: "ENA",
                role: "Energy Networks Association. Develops and maintains technical standards including EREC G99 and G100.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-[#0F2A4A] text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 9 — WHAT TO DO NEXT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            9. What to do next
          </h2>
          <div className="bg-[#0F2A4A] rounded-2xl p-8">
            <p className="text-slate-300 leading-relaxed mb-8">
              Grid connection is the longest lead-time item in any 
              sub-20MW project. The earlier you apply, the better 
              your position. Under the new First Ready First Connected 
              rules, preparation is everything.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Secure land rights and planning permission before applying — Gate 1 requirement",
                "Request a pre-application enquiry with your DNO before committing to a site",
                "Evaluate IDNO options alongside DNO for every project",
                "Include G100 Export Limitation Scheme in your application if output may exceed limits",
                "Commission power quality studies early — before formal application",
                "Consider an Independent Connection Provider for contestable works",
                "Monitor your queue position actively under TMO4+ rules",
              ].map((action) => (
                <div key={action} className="flex gap-3 items-start">
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
            or regulatory advice. Grid connection requirements and 
            processes change frequently. Always consult a qualified 
            engineer and legal professional before making connection 
            decisions. Last reviewed January 2026.
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
                title: "EU Battery Passport",
                desc: "Mandatory documentation for every BESS above 2 kWh from February 2027",
                href: "/frameworks/battery-passport",
              },
              {
                title: "CBAM",
                desc: "Carbon Border Adjustment Mechanism — UK and EU dual reporting requirements",
                href: "/frameworks/cbam",
              },
              {
                title: "CSDDD",
                desc: "Corporate Sustainability Due Diligence Directive and supply chain obligations",
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
