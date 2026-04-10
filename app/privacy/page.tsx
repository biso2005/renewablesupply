import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | RenewableSupply.com",
  description: "How RenewableSupply.com collects, uses and protects your personal data. UK GDPR compliant.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-8 py-20">
        
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-[#00B4A6] font-semibold text-sm tracking-widest uppercase mb-4">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-[#0F2A4A] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#64748B]">
            Last updated: January 2026
          </p>
        </div>

        {/* INTRO */}
        <div className="prose max-w-none">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 mb-8 shadow-sm">
            <p className="text-[#64748B] leading-relaxed">
              RenewableSupply.com is committed to protecting your personal 
              data. This Privacy Policy explains how we collect, use, and 
              protect information about you when you visit our website or 
              use our services. We comply with the UK General Data Protection 
              Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          {/* SECTIONS */}
          {[
            {
              title: "1. Who We Are",
              content: `RenewableSupply.com is a compliance infrastructure platform 
              for sub-20MW solar and battery energy storage system (BESS) developers 
              and EPCs across the UK and Europe. For the purposes of UK GDPR, 
              RenewableSupply.com is the data controller of your personal data. 
              You can contact us at: privacy@renewablesupply.com`,
            },
            {
              title: "2. What Data We Collect",
              content: `We collect the following personal data:
              
              • Email address — when you request our free compliance guide 
              or join our early access list
              
              • Usage data — pages visited, time on site, browser type 
              and device information collected via analytics cookies 
              (only with your consent)
              
              • Communication data — any information you share when you 
              contact us directly by email`,
            },
            {
              title: "3. How We Use Your Data",
              content: `We use your personal data for the following purposes:

              • To send you the 2026 UK BESS Compliance Guide you requested
              
              • To send you product updates and compliance insights 
              relevant to sub-20MW solar and BESS developers 
              (only with your explicit consent)
              
              • To notify you when RenewableSupply.com launches 
              early access (only with your explicit consent)
              
              • To improve our website and understand how visitors 
              use it (analytics, only with your consent)
              
              We will never sell your data to third parties. 
              We will never share your data with third parties 
              for their own marketing purposes.`,
            },
            {
              title: "4. Legal Basis for Processing",
              content: `We process your personal data on the following legal bases:

              • Consent — when you submit your email address and tick 
              the consent checkbox on our form, you give us explicit 
              consent to contact you
              
              • Legitimate interests — for basic website analytics 
              to improve our service, where this does not override 
              your privacy rights
              
              You can withdraw your consent at any time by clicking 
              the unsubscribe link in any email we send you, or by 
              emailing us at privacy@renewablesupply.com`,
            },
            {
              title: "5. Third Party Services",
              content: `We use the following third party services to operate 
              our website:

              • Resend (resend.com) — email delivery service. 
              Your email address is stored and processed by Resend 
              to deliver emails you have requested. 
              Resend is GDPR compliant.
              
              • Vercel (vercel.com) — website hosting. 
              Basic server logs may be retained by Vercel.
              
              We ensure all third party providers offer adequate 
              data protection guarantees.`,
            },
            {
              title: "6. Data Retention",
              content: `We retain your personal data for as long as necessary 
              to provide you with the services you have requested, 
              or until you ask us to delete it.

              • Email addresses — retained until you unsubscribe 
              or request deletion
              
              • Analytics data — retained for 26 months maximum
              
              You can request deletion of your data at any time 
              by emailing privacy@renewablesupply.com`,
            },
            {
              title: "7. Your Rights",
              content: `Under UK GDPR you have the following rights:

              • Right to access — request a copy of your personal data
              
              • Right to rectification — correct inaccurate data
              
              • Right to erasure — request deletion of your data
              
              • Right to restrict processing — limit how we use your data
              
              • Right to data portability — receive your data 
              in a portable format
              
              • Right to object — object to our processing of your data
              
              To exercise any of these rights contact us at: 
              privacy@renewablesupply.com
              
              You also have the right to lodge a complaint with the 
              Information Commissioner's Office (ICO) at ico.org.uk`,
            },
            {
              title: "8. Cookies",
              content: `We use the following types of cookies:

              • Essential cookies — required for the website to function. 
              These cannot be declined.
              
              • Analytics cookies — help us understand how visitors 
              use our site. These are only set with your consent.
              
              You can manage your cookie preferences at any time 
              using the cookie banner on our website.`,
            },
            {
              title: "9. Changes to This Policy",
              content: `We may update this Privacy Policy from time to time. 
              We will notify you of significant changes by email 
              if you have provided your email address. 
              The date at the top of this page shows when it was 
              last updated.`,
            },
            {
              title: "10. Contact Us",
              content: `For any privacy related questions or to exercise 
              your data rights, contact us at:
              
              Email: privacy@renewablesupply.com
              Website: renewablesupply.com/contact`,
            },
          ].map((section) => (
            <div
              key={section.title}
              className="bg-white border border-slate-100 rounded-2xl p-8 mb-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-[#0F2A4A] mb-4">
                {section.title}
              </h2>
              <p className="text-[#64748B] leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* BACK LINK */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-[#00B4A6] font-semibold hover:text-[#00d4c4] transition"
          >
            ← Back to RenewableSupply.com
          </Link>
        </div>
      </section>

      {/* FOOTER */}
    </main>
  );
}
