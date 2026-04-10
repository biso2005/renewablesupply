"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO SECTION */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <div className="inline-block bg-blue-100 text-[#0F2A4A] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
          Now Live
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#0F2A4A] mb-6 leading-tight">
          Sub-20MW compliance,
          <span className="text-[#00B4A6]"> finally built for you</span>
        </h1>
        <p className="text-xl text-[#64748B] mb-12 max-w-3xl mx-auto leading-relaxed">
          G99, Battery Passport, CBAM — one platform. Get your free 2026
          compliance guide now. Join early access developers.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] text-base bg-white placeholder-slate-400 border border-slate-300"
              />
              <button
                type="submit"
                className="bg-[#00B4A6] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#00d4c4] transition whitespace-nowrap text-base"
              >
                Send Me The Guide
              </button>
            </div>
            <div className="flex gap-3 items-start text-left">
              <input
                type="checkbox"
                required
                id="consent"
                className="mt-1 accent-[#00B4A6] shrink-0"
              />
              <label
                htmlFor="consent"
                className="text-slate-400 text-xs leading-relaxed"
              >
                I agree to receive the compliance guide and relevant 
                updates from RenewableSupply.com. I can unsubscribe 
                at any time. See our{" "}
                <a href="/privacy" className="text-[#00B4A6] underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </form>
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 max-w-md mx-auto">
            <div className="text-5xl mb-5">✅</div>
            <h3 className="text-[#0F2A4A] font-bold text-2xl mb-3">
              Guide on its way.
            </h3>
            <p className="text-[#64748B] mb-6 text-base">
              Check your inbox for the free 2026 compliance guide.
            </p>
          </div>
        )}

        <p className="text-slate-400 text-sm mt-8">
          No credit card. No sales call. Just the guide.
        </p>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-[#0a1f38] px-8 py-5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
          <span>✓ Built for UK solar developers</span>
          <span className="hidden md:block">•</span>
          <span>✓ Covers G99, Battery Passport, CBAM</span>
          <span className="hidden md:block">•</span>
          <span>✓ Updated for 2026 regulations</span>
          <span className="hidden md:block">•</span>
          <span>✓ Free — no strings attached</span>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="px-8 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
            Every sub-20MW developer is
            navigating this alone
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Compliance requirements are multiplying. Deadlines are real.
            And no platform was built for developers at your scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "EU Battery Passport",
              date: "Mandatory 2027",
              description:
                "Documentation burden starts now. Every BESS project needs full supply chain traceability before financial close.",
              icon: "🔋",
            },
            {
              title: "G99 / G100 Grid Compliance",
              date: "UK Specific",
              description:
                "Grid connection applications are complex, slow, and expensive. One mistake costs months of delay.",
              icon: "⚡",
            },
            {
              title: "CBAM & CSDDD",
              date: "Dual Reporting",
              description:
                "UK and EU carbon border reporting requirements are converging. Sub-20MW firms have no dedicated tool.",
              icon: "🌍",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-5">{item.icon}</div>
              <div className="text-[#00B4A6] text-xs font-bold tracking-widest uppercase mb-3">
                {item.date}
              </div>
              <h3 className="text-[#0F2A4A] font-bold text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="border-t border-slate-200" />
      </div>

      {/* HOW IT WORKS */}
      <section className="px-8 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A]">
            From compliance chaos to clarity
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Onboard your project",
              desc: "Add your solar or BESS project details once. We map every applicable compliance requirement automatically.",
            },
            {
              step: "02",
              title: "Track every requirement",
              desc: "From G99 application to Battery Passport documentation — every deadline, every document, one dashboard.",
            },
            {
              step: "03",
              title: "Close with confidence",
              desc: "Generate compliance packages for lenders, funds and legal teams at financial close.",
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col">
              <div className="text-6xl font-bold text-slate-100 mb-4">
                {item.step}
              </div>
              <h3 className="text-[#0F2A4A] font-bold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDE DOWNLOAD */}
      <section id="guide" className="bg-[#0F2A4A] px-8 py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            Free Resource
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            The 2026 UK BESS Compliance Guide
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Everything a sub-20MW developer needs to know about Battery
            Passport, G99, CBAM and CSDDD — in one free guide. Used by
            developers, EPCs and their legal teams.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] text-base bg-white placeholder-slate-400"
              />
              <button
                type="submit"
                className="bg-[#00B4A6] text-white font-bold px-7 py-4 rounded-xl hover:bg-[#00d4c4] transition whitespace-nowrap text-base"
              >
                Send Me The Guide
              </button>
            </form>
          ) : (
            <div className="bg-[#00B4A6]/20 border border-[#00B4A6] rounded-2xl p-10">
              <div className="text-5xl mb-5">✅</div>
              <h3 className="text-white font-bold text-2xl mb-3">
                Guide on its way.
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                Check your inbox. While you wait —
              </p>
              <a
                href="#early-access"
                className="inline-block bg-white text-[#0F2A4A] font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition text-base"
              >
                Join The Early Access List →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section id="early-access" className="px-8 py-28 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            Coming 2026
          </p>
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
            Built for developers like you.
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            RenewableSupply.com is building the compliance infrastructure
            layer for sub-20MW solar and BESS developers across UK and
            Europe. Early access members shape the product.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "⚡",
              title: "G99 & G100",
              desc: "Grid compliance workflows built for independent developers. Never miss a deadline.",
            },
            {
              icon: "🔋",
              title: "Battery Passport",
              desc: "Full supply chain documentation before the 2027 deadline. Audit ready at every stage.",
            },
            {
              icon: "🌍",
              title: "CBAM & CSDDD",
              desc: "Dual UK/EU reporting in one unified platform. Built for sub-20MW scale.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <div className="text-3xl mb-5">{f.icon}</div>
              <h3 className="font-bold text-[#0F2A4A] text-xl mb-3">
                {f.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#guide"
            className="inline-block bg-[#0F2A4A] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#1a3d6e] transition shadow-lg"
          >
            Join The Early Access List
          </a>
          <p className="text-slate-400 text-sm mt-4">
            Launching April 2026. Limited early access spots.
          </p>
        </div>
      </section>

    </main>
  );
}
