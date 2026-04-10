import Link from "next/link";

export const metadata = {
  title: "About | RenewableSupply.com",
  description: "Why we built the compliance infrastructure layer for sub-20MW solar and BESS developers across UK and Europe.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO */}
      <section className="bg-[#0F2A4A] px-8 py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Built for the developers
            the industry forgot
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            Sub-20MW solar and BESS developers are building the backbone 
            of the UK and European energy transition. They deserve 
            infrastructure built for their scale.
          </p>
        </div>
      </section>

      {/* FOUNDING STORY */}
      <section className="max-w-3xl mx-auto px-8 py-20">
        
        <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm mb-8">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-6">
            The Problem We Saw
          </p>
          <h2 className="text-3xl font-bold text-[#0F2A4A] mb-6">
            Compliance was breaking good projects
          </h2>
          <p className="text-[#64748B] leading-relaxed text-lg mb-6">
            Across the UK and Europe, hundreds of independent solar 
            and BESS developers are navigating an increasingly complex 
            compliance landscape — alone.
          </p>
          <p className="text-[#64748B] leading-relaxed text-lg mb-6">
            G99 grid applications. EU Battery Passport documentation. 
            CBAM reporting. CSDDD supply chain due diligence. 
            Each requirement managed in a different spreadsheet, 
            by a different consultant, at a different cost.
          </p>
          <p className="text-[#64748B] leading-relaxed text-lg">
            The tools that exist were built for utility scale developers 
            or large corporates. Sub-20MW developers — the firms doing 
            1 to 5 projects a year — have nothing built for their scale, 
            their budget or their reality.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm mb-8">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-6">
            The Moment It Became Urgent
          </p>
          <h2 className="text-3xl font-bold text-[#0F2A4A] mb-6">
            2027 changes everything
          </h2>
          <p className="text-[#64748B] leading-relaxed text-lg mb-6">
            The EU Battery Passport becomes mandatory in 2027. 
            Every BESS project reaching financial close will need 
            full supply chain traceability documentation — 
            from raw material sourcing to installation.
          </p>
          <p className="text-[#64748B] leading-relaxed text-lg mb-6">
            That documentation burden starts now. Not in 2027. 
            Projects being developed today will need to meet 
            that standard at financial close.
          </p>
          <p className="text-[#64748B] leading-relaxed text-lg">
            We built RenewableSupply.com to give sub-20MW developers 
            the infrastructure to meet that deadline — and every 
            compliance requirement that comes after it.
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-10 shadow-sm mb-8">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-6">
            What We Are Building
          </p>
          <h2 className="text-3xl font-bold text-[#0F2A4A] mb-6">
            The compliance OS for
            independent developers
          </h2>
          <p className="text-[#64748B] leading-relaxed text-lg mb-8">
            RenewableSupply.com is the compliance infrastructure layer 
            for sub-20MW solar and BESS developers across UK and Europe. 
            One platform. Every requirement. Built for your scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔋",
                title: "EU Battery Passport",
                desc: "Full supply chain documentation before the 2027 deadline",
              },
              {
                icon: "⚡",
                title: "G99 & G100",
                desc: "Grid compliance workflows for UK independent developers",
              },
              {
                icon: "🌍",
                title: "CBAM & CSDDD",
                desc: "Dual UK and EU reporting in one unified platform",
              },
              {
                icon: "📋",
                title: "RED III",
                desc: "Permitting complexity navigated for your projects",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-4 bg-[#F8FAFC] rounded-xl border border-slate-100"
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

        {/* VALUES */}
        <div className="bg-[#0F2A4A] rounded-2xl p-10 mb-8">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-6">
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold text-white mb-8">
            Our principles
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Built for sub-20MW. Only.",
                desc: "We will never chase utility scale. Our entire product, pricing and support is designed for independent developers doing 1 to 5 projects a year.",
              },
              {
                title: "Compliance without the consultant bill.",
                desc: "Every feature we build reduces your dependence on expensive external consultants for routine compliance work.",
              },
              {
                title: "We are not lawyers. We work with them.",
                desc: "RenewableSupply.com is infrastructure, not advice. We partner with the best energy law firms in the UK so you always have access to qualified counsel when you need it.",
              },
              {
                title: "Ahead of the deadline. Always.",
                desc: "We track regulatory changes so you do not have to. When requirements change, your compliance dashboard updates automatically.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-b border-slate-700 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-white font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold text-[#0F2A4A] mb-4">
            Launching April 2026
          </h2>
          <p className="text-[#64748B] mb-8 text-lg">
            Start with our free 2026 UK BESS Compliance Guide. 
            Join the early access list and shape the product.
          </p>
          <Link
            href="/#guide"
            className="inline-block bg-[#00B4A6] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#00d4c4] transition shadow-lg"
          >
            Get The Free Compliance Guide
          </Link>
        </div>

      </section>

      {/* FOOTER */}
    </main>
  );
}
