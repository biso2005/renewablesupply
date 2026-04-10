"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "developer",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Contact form error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* HERO */}
      <section className="bg-[#0F2A4A] px-8 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Get in touch
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Whether you are a developer, EPC, law firm or fund —
            we want to hear from you. We read every message.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT REASONS */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#0F2A4A] mb-8">
              How can we help?
            </h2>
            {[
              {
                icon: "🔋",
                title: "I am a developer or EPC",
                desc: "Tell us about your projects and compliance challenges. We will be in touch before our April 2026 launch.",
              },
              {
                icon: "⚖️",
                title: "I am a law firm",
                desc: "We are building partnerships with leading UK energy law firms. Let us explore how we can work together.",
              },
              {
                icon: "💰",
                title: "I am a fund or lender",
                desc: "Learn how RenewableSupply.com can provide compliance assurance across your development portfolio.",
              },
              {
                icon: "📰",
                title: "Press or media enquiry",
                desc: "For press enquiries about RenewableSupply.com and the sub-20MW compliance landscape.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="text-2xl shrink-0">{item.icon}</div>
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

            {/* DIRECT EMAIL */}
            <div className="bg-[#0F2A4A] rounded-2xl p-6">
              <p className="text-slate-400 text-sm mb-2">
                Prefer email directly?
              </p>
              <a
                href="mailto:hello@renewablesupply.com"
                className="text-[#00B4A6] font-bold text-lg hover:text-[#00d4c4] transition"
              >
                hello@renewablesupply.com
              </a>
              <p className="text-slate-500 text-xs mt-3">
                We respond within 1 business day.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-[#0F2A4A] mb-6">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* WHO ARE YOU */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-2">
                      I am a...
                    </label>
                    <select
                      aria-label="I am a..."
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] bg-[#F8FAFC] text-sm"
                    >
                      <option value="developer">Solar / BESS Developer</option>
                      <option value="epc">EPC Contractor</option>
                      <option value="lawfirm">Law Firm</option>
                      <option value="fund">Fund or Lender</option>
                      <option value="press">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* NAME */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] bg-[#F8FAFC] text-sm"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-2">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] bg-white placeholder-slate-400 text-sm"
                    />
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-2">
                      Company name
                    </label>
                    <input
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] bg-[#F8FAFC] text-sm"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project or question..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F2A4A] focus:outline-none focus:ring-2 focus:ring-[#00B4A6] bg-[#F8FAFC] text-sm resize-none"
                    />
                  </div>

                  {/* GDPR */}
                  <div className="flex gap-3 items-start">
                    <input
                      type="checkbox"
                      required
                      id="gdpr"
                      className="mt-1 accent-[#00B4A6]"
                    />
                    <label
                      htmlFor="gdpr"
                      className="text-[#64748B] text-xs leading-relaxed"
                    >
                      I agree to RenewableSupply.com processing my data 
                      to respond to my enquiry. See our{" "}
                      <Link
                        href="/privacy"
                        className="text-[#00B4A6] underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00B4A6] text-white font-bold py-4 rounded-xl hover:bg-[#00d4c4] transition text-base"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">
                  Message received.
                </h3>
                <p className="text-[#64748B] mb-8 leading-relaxed">
                  Thank you for getting in touch. We will respond 
                  within 1 business day.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-[#0F2A4A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1a3d6e] transition"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
    </main>
  );
}
