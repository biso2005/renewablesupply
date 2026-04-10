export const metadata = {
  title: "Sub-20MW BESS Compliance Guide 2026 | RenewableSupply.com",
  description: "Complete compliance guide for UK solar and battery storage developers. Battery Passport, G99, G100, CBAM, CSDDD. April 2026 Edition.",
};

export default function Guide() {
  return (
    <main className="bg-white">
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-before: always;
          }
          html, body {
            width: 100%;
            height: 100%;
          }
        }
      `}</style>

      {/* PAGE 1 — COVER */}
      <section className="min-h-screen bg-[#0F2A4A] text-white px-12 py-16 flex flex-col justify-center page-break">
        <div>
          <p className="text-sm font-semibold tracking-widest mb-16">
            RenewableSupply.com
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Sub-20MW BESS Compliance in the UK 2026
          </h1>
          <p className="text-[#00B4A6] text-2xl font-semibold">
            The Complete Guide for Solar and Battery Storage Developers
          </p>
        </div>
        <p className="text-slate-400 text-sm">
          April 2026 Edition
        </p>
      </section>

      {/* PAGE 2 — INTRODUCTION */}
      <section className="min-h-screen bg-white px-12 py-16 flex flex-col justify-between page-break">
        <div>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-12">
            Who This Guide Is For
          </h2>
          <div className="space-y-6 max-w-3xl">
            <p className="text-slate-700 text-lg leading-relaxed">
              This guide is written for sub-20MW solar and battery storage developers, EPCs and project managers operating in the UK. If you are managing projects between 1MW and 20MW, this guide covers every compliance obligation you will face in 2026 and beyond.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              We cover four frameworks: the EU Battery Passport, UK grid connection standards G99 and G100, the Carbon Border Adjustment Mechanism, and the Corporate Sustainability Due Diligence Directive. Each chapter tells you what applies, what you must do, and by when.
            </p>
          </div>
        </div>
        <p className="text-slate-500 text-xs text-center border-t border-slate-200 pt-6">
          This guide is for informational purposes only and does not constitute legal advice.
        </p>
      </section>

      {/* PAGE 3 — CHAPTER 1: BATTERY PASSPORT */}
      <section className="min-h-screen bg-white px-12 py-16 page-break">
        <div className="max-w-3xl">
          <p className="text-[#00B4A6] text-sm font-bold uppercase tracking-widest mb-2">
            Chapter 1
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">
            EU Battery Passport
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            EU Regulation 2023/1542 — Mandatory from 18 February 2027
          </p>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 flex gap-4">
            <div className="text-2xl shrink-0">⚠️</div>
            <p className="text-amber-800 text-sm leading-relaxed">
              BESS units are classified as industrial batteries under EU law. If your project has EU financing, is sold to an EU buyer, or if UK equivalent legislation follows, you need a Battery Passport.
            </p>
          </div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">Implementation Date</p>
              <p className="text-xl font-bold text-[#0F2A4A]">18 February 2027</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">Applies To</p>
              <p className="text-xl font-bold text-[#0F2A4A]">Industrial batteries over 2kWh — all BESS</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">Responsibility</p>
              <p className="text-xl font-bold text-[#0F2A4A]">Economic operator placing battery on EU market</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">UK Status</p>
              <p className="text-sm font-bold text-[#0F2A4A]">Not directly applicable — but three triggers catch UK developers</p>
            </div>
          </div>

          {/* What You Must Document */}
          <div className="mb-8">
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              What You Must Document
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Manufacturer identity and battery model</li>
              <li>• Electrochemical performance and durability</li>
              <li>• Carbon footprint declaration</li>
              <li>• Recycled content percentage</li>
              <li>• Supply chain due diligence</li>
              <li>• State of health and remaining capacity</li>
            </ul>
          </div>

          {/* Six Questions */}
          <div>
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              Six Questions To Ask Your Manufacturer Now
            </h3>
            <ol className="space-y-2 text-slate-700 text-sm list-decimal list-inside">
              <li>Do you have safety testing documentation ready?</li>
              <li>Can you provide BMS data access?</li>
              <li>Will you provide a carbon footprint declaration by 2026?</li>
              <li>What supply chain due diligence have you completed?</li>
              <li>Are you Battery Passport ready for February 2027?</li>
              <li>What is your recycled content percentage?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PAGE 4 — CHAPTER 2: G99 & G100 */}
      <section className="min-h-screen bg-white px-12 py-16 page-break">
        <div className="max-w-3xl">
          <p className="text-[#00B4A6] text-sm font-bold uppercase tracking-widest mb-2">
            Chapter 2
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">
            G99 & G100 Grid Connection
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Engineering Recommendations for connecting generation equipment to the UK grid
          </p>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 flex gap-4">
            <div className="text-2xl shrink-0">⚠️</div>
            <p className="text-amber-800 text-sm leading-relaxed">
              Sub-20MW BESS projects fall under Type B (1-10MW) or Type C (10-50MW). Both require G99 compliance. G100 applies if your export capacity exceeds DNO limits.
            </p>
          </div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">G99 Applies To</p>
              <p className="text-sm font-bold text-[#0F2A4A]">All generation equipment over 3.68kW</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">G100 Applies To</p>
              <p className="text-sm font-bold text-[#0F2A4A]">Export limitation schemes</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">Your Type</p>
              <p className="text-sm font-bold text-[#0F2A4A]">Type B (1-10MW) or Type C (10-50MW)</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-slate-600 text-xs font-semibold uppercase mb-2">Queue Reform</p>
              <p className="text-sm font-bold text-[#0F2A4A]">First Ready First Connected — 2025</p>
            </div>
          </div>

          {/* 7-Step Process */}
          <div className="mb-8">
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              The 7-Step Application Process
            </h3>
            <ol className="space-y-2 text-slate-700 text-sm list-decimal list-inside">
              <li>Pre-application enquiry with DNO</li>
              <li>Formal connection application</li>
              <li>Connection offer received</li>
              <li>Offer acceptance</li>
              <li>Design and construction</li>
              <li>Commissioning</li>
              <li>Energisation</li>
            </ol>
          </div>

          {/* Common Mistakes */}
          <div className="mb-8">
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              Common Mistakes to Avoid
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Applying without land rights secured</li>
              <li>• Inaccurate generation data in application</li>
              <li>• Forgetting G100 when export limited</li>
              <li>• Skipping power quality studies</li>
              <li>• Not using an ICP for contestable works</li>
              <li>• Ignoring IDNO as an alternative</li>
              <li>• Failing to monitor queue position after submission</li>
            </ul>
          </div>

          {/* Cost Note */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-slate-700 text-sm font-semibold">
              💰 Connection costs range from £100K to over £1M. Always evaluate ICP and IDNO options to reduce cost and timeline.
            </p>
          </div>
        </div>
      </section>

      {/* PAGE 5 — CHAPTER 3: CBAM */}
      <section className="min-h-screen bg-white px-12 py-16 page-break">
        <div className="max-w-3xl">
          <p className="text-[#00B4A6] text-sm font-bold uppercase tracking-widest mb-2">
            Chapter 3
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">
            Carbon Border Adjustment Mechanism
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            EU CBAM live January 2026 — UK CBAM follows January 2027
          </p>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 flex gap-4">
            <div className="text-2xl shrink-0">⚠️</div>
            <p className="text-amber-800 text-sm leading-relaxed">
              Solar panels are currently out of scope. But steel racking and aluminium mounting structures are explicitly covered. If you import these components, you are already inside the EU CBAM window.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800 mb-3">Directly Caught</h4>
              <ul className="space-y-2 text-red-700 text-sm">
                <li>• Steel racking CN 7308</li>
                <li>• Aluminium frames CN 7604</li>
                <li>• Aluminium structures CN 7610</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Not Currently Caught</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Finished solar panels</li>
                <li>• Completed battery units</li>
                <li>• Power inverters</li>
              </ul>
            </div>
          </div>

          {/* Key Deadlines Table */}
          <div className="mb-8">
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              Key Deadlines
            </h3>
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-3 pr-4 font-semibold text-[#0F2A4A]">EU CBAM full implementation</td>
                  <td className="py-3 text-slate-700">January 2026</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 pr-4 font-semibold text-[#0F2A4A]">UK CBAM start</td>
                  <td className="py-3 text-slate-700">January 2027</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-3 pr-4 font-semibold text-[#0F2A4A]">UK registration threshold</td>
                  <td className="py-3 text-slate-700">£50,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-[#0F2A4A]">EU penalty for non-compliance</td>
                  <td className="py-3 text-slate-700">€100+ per tonne CO2e</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Five Actions */}
          <div>
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              Five Actions To Take Now
            </h3>
            <ol className="space-y-2 text-slate-700 text-sm list-decimal list-inside">
              <li>Audit your procurement list for steel and aluminium components</li>
              <li>Check commodity codes against CBAM Annex I</li>
              <li>If importing to EU projects begin authorised declarant registration</li>
              <li>Brief your EPC and procurement team</li>
              <li>Monitor UK secondary legislation due end of 2026</li>
            </ol>
          </div>
        </div>
      </section>

      {/* PAGE 6 — CHAPTER 4: CSDDD */}
      <section className="min-h-screen bg-white px-12 py-16 page-break">
        <div className="max-w-3xl">
          <p className="text-[#00B4A6] text-sm font-bold uppercase tracking-widest mb-2">
            Chapter 4
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">
            Corporate Sustainability Due Diligence
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            EU Directive 2024/1760 — You may not be directly liable, but your funders will make it your problem
          </p>

          {/* Warning Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 flex gap-4">
            <div className="text-2xl shrink-0">⚠️</div>
            <p className="text-amber-800 text-sm leading-relaxed">
              Sub-20MW developers are below the direct threshold of 1,000 employees. But EU funders, lenders and buyers in scope will push due diligence requirements down to you contractually.
            </p>
          </div>

          {/* How You Get Caught */}
          <div className="mb-8">
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              How You Get Caught
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-semibold text-[#0F2A4A] text-sm mb-2">EU Funds & Lenders</p>
                <p className="text-slate-700 text-sm">Their due diligence obligation covers their entire chain of activities including your project</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-semibold text-[#0F2A4A] text-sm mb-2">EU Project Sales</p>
                <p className="text-slate-700 text-sm">Selling to an EU buyer triggers their supply chain review</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-semibold text-[#0F2A4A] text-sm mb-2">Large EPC Partners</p>
                <p className="text-slate-700 text-sm">EPCs in scope will push documentation requirements to you contractually</p>
              </div>
            </div>
          </div>

          {/* What You Will Be Asked */}
          <div>
            <h3 className="font-bold text-[#0F2A4A] text-lg mb-4">
              What You Will Be Asked To Prove
            </h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Supply chain mapping — who manufactured your batteries and where</li>
              <li>• Environmental impact evidence from your procurement</li>
              <li>• A grievance mechanism for supply chain concerns</li>
              <li>• Annual documentation updated every 12 months</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PAGE 7 — QUICK REFERENCE CHECKLIST */}
      <section className="min-h-screen bg-white px-12 py-16 page-break">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">
            Your 2026 Compliance Checklist
          </h2>
          <p className="text-slate-600 text-lg mb-12">
            One page. Keep it.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {/* Battery Passport */}
            <div className="border border-slate-200 rounded-lg p-6">
              <p className="text-[#00B4A6] font-bold text-sm uppercase mb-4">Battery Passport</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>☐ Request manufacturer documentation</li>
                <li>☐ Confirm carbon footprint declaration</li>
                <li>☐ Map recycled content</li>
                <li>☐ Verify BMS data access</li>
              </ul>
            </div>

            {/* G99 & G100 */}
            <div className="border border-slate-200 rounded-lg p-6">
              <p className="text-[#00B4A6] font-bold text-sm uppercase mb-4">G99 & G100</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>☐ Secure land rights before applying</li>
                <li>☐ Submit pre-application enquiry</li>
                <li>☐ Evaluate ICP for contestable works</li>
                <li>☐ Check IDNO option</li>
                <li>☐ Monitor queue position</li>
              </ul>
            </div>

            {/* CBAM */}
            <div className="border border-slate-200 rounded-lg p-6">
              <p className="text-[#00B4A6] font-bold text-sm uppercase mb-4">CBAM</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>☐ Audit steel and aluminium procurement</li>
                <li>☐ Check CN codes</li>
                <li>☐ Register as authorised declarant if needed</li>
                <li>☐ Brief procurement team</li>
              </ul>
            </div>

            {/* CSDDD */}
            <div className="border border-slate-200 rounded-lg p-6">
              <p className="text-[#00B4A6] font-bold text-sm uppercase mb-4">CSDDD</p>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>☐ Ask funder if they are in scope</li>
                <li>☐ Request manufacturer supply chain docs</li>
                <li>☐ Add disclosure clauses to EPC contracts</li>
                <li>☐ Build project supply chain map</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 8 — BACK COVER */}
      <section className="min-h-screen bg-[#0F2A4A] text-white px-12 py-16 flex flex-col justify-between">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Stay ahead of every compliance deadline.
          </h2>
          <p className="text-3xl text-[#00B4A6] font-bold mb-4">
            RenewableSupply.com
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">
            Compliance infrastructure for sub-20MW solar and BESS developers
          </p>
          <p className="text-xl font-semibold mb-6">
            Early access now open
          </p>
          <div className="border-2 border-[#00B4A6] text-[#00B4A6] px-8 py-4 rounded-lg inline-block font-bold">
            Join the waitlist at RenewableSupply.com
          </div>
        </div>
        <p className="text-slate-500 text-xs">
          © 2026 RenewableSupply.com — Not legal advice
        </p>
      </section>
    </main>
  );
}
