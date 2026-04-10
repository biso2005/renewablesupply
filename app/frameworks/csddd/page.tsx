import Link from "next/link";

export const metadata = {
  title: "CSDDD & Corporate Sustainability Due Diligence Directive — Guide for UK Solar and BESS Developers | RenewableSupply.com",
  description: "EU CSDDD 2024/1760 affects sub-20MW developers indirectly through lenders, buyers, and EPC partners. UK supply chain due diligence guide with immediate action steps and compliance requirements.",
  keywords: "CSDDD corporate sustainability due diligence, EU due diligence directive, supply chain reporting, human rights environmental impact, UK BESS solar compliance",
};

export default function CSDDD() {
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
            <span className="text-[#00B4A6] text-sm">CSDDD</span>
          </div>
          <div className="h-1 bg-[#00B4A6] w-16 mb-6"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CSDDD & Supply Chain
            Due Diligence
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl">
            You may not be directly liable — but your funders and buyers will make it your problem.
          </p>
        </div>
      </section>

      {/* QUICK FACTS BAR */}
      <section className="bg-slate-100 px-8 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              EU Directive
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              2024/1760
            </p>
            <p className="text-xs text-slate-500 mt-1">
              In Force
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Direct Threshold
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              1,000+ Employees
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Not you (usually)
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              UK Equivalent
            </p>
            <p className="text-2xl font-bold text-[#0F2A4A]">
              Not Yet Enacted
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Proposed for 2025+
            </p>
          </div>
          <div>
            <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Your Risk
            </p>
            <p className="text-2xl font-bold text-orange-600">
              Counterparty
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Pressure flows down
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
              Sub-20MW developers are below the direct threshold
            </h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              But if your project is EU-financed or sold to an EU buyer, their due diligence obligation flows down to you. Expect questionnaires, audits and contractual requirements even though you won't be directly regulated.
            </p>
          </div>
        </div>

        {/* HOW YOU GET CAUGHT */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            You're Not Directly Liable. Here's Why It Still Matters.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "EU Funds & Lenders",
                desc: "Any fund or lender in scope must assess their entire chain of activities. Your project sits inside that chain.",
              },
              {
                title: "EU Project Sales",
                desc: "Selling or transferring a project to an EU buyer triggers their due diligence review of your supply chain.",
              },
              {
                title: "Large EPC Partners",
                desc: "If your EPC contractor is in scope, they will push documentation requirements down to you contractually.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-8 bg-white border border-slate-200 hover:border-[#00B4A6] transition"
              >
                <h3 className="font-bold text-lg text-[#0F2A4A] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT DUE DILIGENCE MEANS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            What You Will Be Asked To Prove
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Supply Chain Mapping",
                desc: "Who manufactured your batteries and panels, where, and under what labour conditions",
              },
              {
                title: "Environmental Impact",
                desc: "Evidence that your procurement did not cause environmental harm in the supply chain",
              },
              {
                title: "Grievance Mechanism",
                desc: "A process for reporting supply chain concerns — even as a small developer",
              },
              {
                title: "Annual Reporting",
                desc: "Documentation updated every 12 months showing ongoing compliance",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-8 bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-lg text-[#0F2A4A] mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* UK VS EU TABLE */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            UK vs EU Regulatory Landscape
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F2A4A] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">UK Position</th>
                  <th className="px-6 py-4 text-left font-semibold">EU Position</th>
                  <th className="px-6 py-4 text-left font-semibold">Your Risk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#0F2A4A]">
                    Legislative approach
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Fragmented, issue-specific
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Comprehensive horizontal directive
                  </td>
                  <td className="px-6 py-4 text-orange-600 font-semibold">
                    EU buyers apply EU rules to your projects
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#0F2A4A]">
                    Mandatory due diligence
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Pending FRC regime only
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Cross-sectoral for large companies
                  </td>
                  <td className="px-6 py-4 text-orange-600 font-semibold">
                    Contractual not legal obligation (for now)
                  </td>
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#0F2A4A]">
                    Human rights focus
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Modern Slavery Act reporting
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Broad human rights and environment
                  </td>
                  <td className="px-6 py-4 text-orange-600 font-semibold">
                    UK may strengthen post-2026
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-[#0F2A4A]">
                    Extraterritorial reach
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Limited
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    Extensive global value chains
                  </td>
                  <td className="px-6 py-4 text-orange-600 font-semibold">
                    Applies if EU money or EU buyer involved
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* IMMEDIATE ACTIONS */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
            What To Do Right Now
          </h2>
          <ul className="space-y-4">
            {[
              "Ask your funder or lender directly: are they in scope for CSDDD?",
              "Request supply chain documentation from your battery and panel manufacturers now",
              "Add CSDDD disclosure clauses to your EPC contracts",
              "Build a simple supply chain map for each project — manufacturer, country, labour standards",
              "Monitor UK legislative developments — a Business, Human Rights and Environment Act has been proposed",
            ].map((action, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <span className="text-[#00B4A6] font-bold text-lg shrink-0">
                  ✓
                </span>
                <span className="text-slate-700 text-sm leading-relaxed pt-0.5">
                  {action}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-semibold text-slate-800">Disclaimer:</span> This page is for informational purposes only and does not constitute legal or regulatory advice. Consult a qualified legal professional for advice specific to your project.
          </p>
        </div>

        {/* CROSS-LINKS */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-6">
            Other Compliance Frameworks
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/frameworks/battery-passport"
              className="group p-6 rounded-lg border border-slate-200 hover:border-[#00B4A6] hover:bg-slate-50 transition"
            >
              <h3 className="font-bold text-[#0F2A4A] group-hover:text-[#00B4A6] transition">
                Battery Passport →
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                EU 2023/1542 battery labeling and traceability requirements
              </p>
            </Link>
            <Link
              href="/frameworks/g99"
              className="group p-6 rounded-lg border border-slate-200 hover:border-[#00B4A6] hover:bg-slate-50 transition"
            >
              <h3 className="font-bold text-[#0F2A4A] group-hover:text-[#00B4A6] transition">
                G99 & G100 →
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                UK grid connection standards for embedded generation
              </p>
            </Link>
            <Link
              href="/frameworks/cbam"
              className="group p-6 rounded-lg border border-slate-200 hover:border-[#00B4A6] hover:bg-slate-50 transition"
            >
              <h3 className="font-bold text-[#0F2A4A] group-hover:text-[#00B4A6] transition">
                CBAM →
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                EU Carbon Border Adjustment Mechanism for imported materials
              </p>
            </Link>
          </div>
        </div>

      </section>

    </main>
  );
}
