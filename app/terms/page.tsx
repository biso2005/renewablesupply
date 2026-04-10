import Link from "next/link";

export const metadata = {
  title: "Terms of Use | RenewableSupply.com",
  description: "Terms of use for RenewableSupply.com — compliance infrastructure for sub-20MW solar and BESS developers.",
};

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <p className="text-[#64748B]">
            Last updated: January 2026
          </p>
        </div>

        {/* INTRO */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 mb-8 shadow-sm">
          <p className="text-[#64748B] leading-relaxed">
            By accessing and using RenewableSupply.com you agree to 
            be bound by these Terms of Use. Please read them carefully 
            before using our website or services. If you do not agree 
            with any part of these terms, please do not use our website.
          </p>
        </div>

        {/* SECTIONS */}
        {[
          {
            title: "1. About RenewableSupply.com",
            content: `RenewableSupply.com is a compliance infrastructure 
            platform designed for sub-20MW solar and battery energy 
            storage system (BESS) developers and EPCs across the UK 
            and Europe.

            Our platform provides compliance workflow tools, 
            documentation support and regulatory guidance covering 
            frameworks including EU Battery Passport, G99/G100 grid 
            compliance, CBAM and CSDDD.`,
          },
          {
            title: "2. Not Legal or Regulatory Advice",
            content: `IMPORTANT: The information provided on RenewableSupply.com 
            — including our compliance guides, platform tools, 
            documentation templates and any communications — 
            is provided for informational purposes only.

            Nothing on this website constitutes legal advice, 
            regulatory advice, financial advice or professional 
            consultancy of any kind.

            You should always consult a qualified legal professional 
            before making compliance decisions on your projects. 
            RenewableSupply.com accepts no liability for decisions 
            made based on information provided through our platform 
            or website.`,
          },
          {
            title: "3. Accuracy of Information",
            content: `We make every effort to ensure the compliance 
            information we provide is accurate and up to date. 
            However, regulatory frameworks change frequently and 
            we cannot guarantee that all information is current 
            at the time you access it.

            You are responsible for verifying the accuracy of 
            any compliance information before relying on it 
            for your projects.

            We will not be liable for any loss or damage arising 
            from reliance on outdated or inaccurate information 
            on our platform.`,
          },
          {
            title: "4. Intellectual Property",
            content: `All content on RenewableSupply.com — including 
            compliance guides, written content, tools, designs, 
            logos and platform features — is the intellectual 
            property of RenewableSupply.com unless otherwise stated.

            You may not reproduce, distribute, modify or republish 
            any content from this website without our prior 
            written permission.

            Our free compliance guides are provided for your 
            personal and professional use only. They may not 
            be resold or redistributed.`,
          },
          {
            title: "5. User Responsibilities",
            content: `When using RenewableSupply.com you agree to:

            • Provide accurate information when submitting forms
            
            • Use the platform only for lawful purposes
            
            • Not attempt to reverse engineer, copy or replicate 
            any part of our platform
            
            • Not use our content for commercial resale 
            without written permission
            
            • Maintain the confidentiality of any account 
            credentials provided to you`,
          },
          {
            title: "6. Email Communications",
            content: `By submitting your email address on our website 
            and providing explicit consent, you agree to receive:

            • The compliance guide or resource you requested
            
            • Product updates and compliance insights from 
            RenewableSupply.com
            
            • Early access notifications when our platform launches

            You can unsubscribe at any time by clicking the 
            unsubscribe link in any email we send you.`,
          },
          {
            title: "7. Limitation of Liability",
            content: `To the fullest extent permitted by law, 
            RenewableSupply.com shall not be liable for:

            • Any indirect, incidental or consequential loss 
            arising from your use of our website or platform
            
            • Any compliance failures, regulatory penalties 
            or project delays arising from reliance on 
            our information
            
            • Any loss of data, revenue or business opportunity
            
            • Any interruption or unavailability of our platform

            Our total liability to you shall not exceed the 
            amount you have paid to us in the 12 months 
            preceding the claim.`,
          },
          {
            title: "8. Third Party Links",
            content: `Our website may contain links to third party 
            websites including regulatory bodies, law firms 
            and industry organisations.

            These links are provided for your convenience only. 
            We do not endorse and are not responsible for the 
            content, accuracy or privacy practices of 
            any third party websites.`,
          },
          {
            title: "9. Changes to These Terms",
            content: `We reserve the right to update these Terms of Use 
            at any time. We will notify registered users of 
            significant changes by email.

            Continued use of our website after changes are 
            posted constitutes your acceptance of the 
            updated terms.

            The date at the top of this page shows when 
            these terms were last updated.`,
          },
          {
            title: "10. Governing Law",
            content: `These Terms of Use are governed by and construed 
            in accordance with the laws of England and Wales.

            Any disputes arising from these terms or your use 
            of RenewableSupply.com shall be subject to the 
            exclusive jurisdiction of the courts of 
            England and Wales.`,
          },
          {
            title: "11. Contact Us",
            content: `If you have any questions about these Terms of Use 
            please contact us at:

            Email: legal@renewablesupply.com
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
