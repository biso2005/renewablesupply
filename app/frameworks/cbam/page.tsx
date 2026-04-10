import Link from "next/link";

export const metadata = {
  title: "CBAM & Carbon Border Adjustment Mechanism — Guide for UK BESS and Solar Developers | RenewableSupply.com",
  description: "Everything UK solar and BESS developers need to know about CBAM — the EU Carbon Border Adjustment Mechanism. Steel racking, aluminium frames, compliance timeline and penalties.",
  keywords: "CBAM carbon border adjustment, steel racking CN codes, aluminium frame duties, EU CBAM 2026, UK CBAM 2027",
};

export default function CBAM() {
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
            <span className="text-[#00B4A6] text-sm">CBAM</span>
          </div>
          <div className="h-1 bg-[#00B4A6] w-16 mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CBAM & The Carbon Border
            Adjustment Mechanism
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
            What UK solar and BESS developers need to know about steel, 
            aluminium and the 2027 deadline.
          </p>
        </div>
      </section>

      {/* QUICK FACTS BAR */}
      <section className="bg-slate-100 px-8 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              EU Launch
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              Jan 2026
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Transitional phase begins
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              UK Alignment
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              Jan 2027
            </p>
            <p className="text-xs text-slate-500 mt-1">
              UK CBAM starts
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Primary Risk
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              Steel & Aluminium
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Racking, frames, components
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Solar Panels
            </p>
            <p className="text-2xl font-bold text-green-600">
              Out of Scope
            </p>
            <p className="text-xs text-slate-500 mt-1">
              (for now)
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-8 py-16">

        {/* WARNING BOX */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex gap-4">
          <div className="text-2xl shrink-0">⚠️</div>
          <div>
            <h3 className="font-bold text-amber-900 mb-2">
              You may already be in the compliance window
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              If you are importing steel racking or aluminium mounting 
              structures, you are already inside the EU CBAM transitional 
              reporting window. The UK equivalent follows in 2027. 
              Registration requirements apply even if your project is 
              domestic UK-only due to financing and supply chain triggers.
            </p>
          </div>
        </div>

        {/* DOES THIS APPLY TO ME */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            Does this apply to me?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Directly caught by CBAM",
                desc: "You are in scope if you import:",
                items: [
                  "Steel racking and mounting structures",
                  "Aluminium frame systems for solar PV",
                  "Any CBAM CN code listed materials from outside UK/EU",
                  "These items into projects with EU financing or EU buyers",
                ],
                color: "red",
              },
              {
                title: "Not currently caught",
                desc: "These are out of scope:",
                items: [
                  "Finished solar panels (unless coating changes rules)",
                  "Battery cells and modules (though supply chain sourcing matters)",
                  "Cables and electrical infrastructure",
                  "Domestic-only projects with no EU triggers",
                ],
                color: "slate",
              },
            ].map((section) => (
              <div
                key={section.title}
                className={`rounded-2xl p-8 border ${
                  section.color === "red"
                    ? "bg-red-50 border-red-100"
                    : "bg-slate-50 border-slate-100"
                }`}
              >
                <h3 className={`font-bold text-lg mb-2 ${
                  section.color === "red"
                    ? "text-red-800"
                    : "text-[#0F2A4A]"
                }`}>
                  {section.title}
                </h3>
                <p className="text-[#64748B] text-sm mb-4">
                  {section.desc}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[#64748B] text-sm">
                      <span className={`shrink-0 font-bold ${
                        section.color === "red"
                          ? "text-red-400"
                          : "text-slate-400"
                      }`}>
                        {section.color === "red" ? "→" : "•"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT YOU HAVE TO DO */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            What you actually have to do
          </h2>
          <div className="space-y-4">
            {[
              {
                phase: "Pre-2026",
                title: "Identify which components fall under CBAM CN codes",
                desc: "Audit your supply chain. Determine which imported materials (steel racking, aluminium frames) are caught by CBAM's defined CN codes. This is declarant responsibility — your suppliers may not tell you.",
                status: "NOW",
              },
              {
                phase: "2026 — Transitional Phase",
                title: "EU authorised declarant registration (if importing to EU)",
                desc: "If your projects have EU financing or EU buyers, register as an authorised declarant with EU customs. You will report embedded carbon quarterly and pay transitional carbon fees on imports.",
                status: "STARTING",
              },
              {
                phase: "2027 — UK CBAM Live",
                title: "UK CBAM certificates required; £50,000 registration threshold",
                desc: "UK CBAM goes live January 2027. Any importer with annual imports exceeding £50,000 must register and surrender certificates for embedded carbon. Financial penalties for non-compliance are significant.",
                status: "DEADLINE",
              },
            ].map((item) => (
              <div
                key={item.phase}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div className="text-xs font-bold text-[#00B4A6] uppercase tracking-widest mb-1">
                      {item.phase}
                    </div>
                    <h3 className="font-bold text-[#0F2A4A] text-lg">
                      {item.title}
                    </h3>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
                    item.status === "NOW"
                      ? "bg-amber-100 text-amber-700"
                      : item.status === "STARTING"
                      ? "bg-teal-100 text-teal-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COST TABLE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            Penalties and costs
          </h2>
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed mb-6">
              CBAM financial penalties are designed to be punitive. 
              Non-compliance is treated as a trade violation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  label: "EU CBAM penalty",
                  value: "€100+ per tonne CO2e",
                  desc: "Applied to under-reported or undeclared embedded carbon. Applies now (2026) for transitional reporters.",
                },
                {
                  label: "UK CBAM penalty",
                  value: "£ equivalent pending",
                  desc: "Secondary legislation not yet published but expected to match or exceed EU penalties.",
                },
                {
                  label: "Registration threshold",
                  value: "£50,000 annual",
                  desc: "Any importer exceeding this must register. Failure to register is a customs violation.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#F8FAFC] rounded-xl p-5 border border-slate-100"
                >
                  <p className="text-xs font-bold text-[#64748B] uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="text-red-600 font-bold text-xl mb-2">
                    {item.value}
                  </p>
                  <p className="text-[#64748B] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Critical:</strong> CBAM non-compliance can result 
                in customs detention of shipments and financial penalties 
                that exceed the cost of the materials themselves. Early 
                registration and audit are essential risk mitigation.
              </p>
            </div>
          </div>
        </div>

        {/* ACTION ITEMS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            Five immediate action items
          </h2>
          <div className="bg-[#0F2A4A] rounded-2xl p-8">
            <div className="space-y-4 mb-8">
              {[
                "Audit your supply chain now — identify all imported steel and aluminium components",
                "Map your suppliers' countries of origin against CBAM CN code scope",
                "If importing to EU projects, engage an EU customs broker for transitional registration",
                "Document all carbon intensity data for your imported materials",
                "Plan for UK CBAM registration by Q4 2026 — do not wait until January 2027",
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
            informational purposes only and does not constitute legal, 
            tax or customs advice. CBAM regulations are evolving and 
            secondary legislation is pending. Always consult a qualified 
            customs broker and legal professional before making import 
            and CBAM compliance decisions. Last reviewed January 2026.
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
                title: "G99 & G100",
                desc: "UK grid connection compliance for solar and BESS projects",
                href: "/frameworks/g99",
              },
              {
                title: "CSDDD",
                desc: "Due diligence and human rights obligations in your supply chain",
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
