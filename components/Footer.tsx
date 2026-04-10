import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A4A] px-8 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-white font-bold text-2xl mb-3 block">
              RenewableSupply<span className="text-[#00B4A6]">.com</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
              Compliance infrastructure for sub-20MW solar and BESS
              developers. UK & Europe.
            </p>
          </div>
          <Link
            href="/#guide"
            className="bg-[#00B4A6] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#00d4c4] transition"
          >
            Get Free Guide
          </Link>
        </div>

        {/* MIDDLE ROW — LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <p className="text-white font-semibold text-sm mb-4">
              Platform
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/#guide" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  Compliance Guide
                </Link>
              </li>
              <li>
                <Link href="/#early-access" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  Early Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-4">
              Compliance
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/frameworks/battery-passport" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  EU Battery Passport
                </Link>
              </li>
              <li>
                <Link href="/frameworks/g99" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  G99 & G100
                </Link>
              </li>
              <li>
                <Link href="/frameworks/cbam" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  CBAM
                </Link>
              </li>
              <li>
                <Link href="/frameworks/csddd" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  CSDDD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-4">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-sm mb-4">
              Legal
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 text-sm hover:text-slate-200 transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 RenewableSupply.com. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Compliance infrastructure for sub-20MW developers.
            Not legal advice.
          </p>
        </div>

      </div>
    </footer>
  );
}
