import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/90">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3 items-center">

          {/* Copyright */}
          <div className="text-sm text-slate-600 text-center md:text-left">
            © {new Date().getFullYear()} UMV Legal & Associates
          </div>


          {/* Address */}
          <div className="text-sm text-slate-600 text-center">
            <div>83 Sneh Sadan</div>
            <div>Jwala Vihar, Chopasni Housing Board, Behind Jeevan Jyoti Hospital, Jodhpur, Rajasthan 342008</div>
            <div className="mt-2">Serving Mumbai, Rajasthan, Jodhpur and clients across India</div>

            <div className="mt-2">
              Phone: +91 99672 76861 • 73570 00507
            </div>

            <div className="mt-1">
              Email:
              <a
                href="mailto:umvlegalassociates@gmail.com"
                className="ml-1 text-blue-600 hover:underline"
              >
                umvlegalassociates@gmail.com
              </a>
            </div>
          </div>


          {/* Links */}
          <div className="flex justify-center md:justify-end gap-6 text-sm text-slate-600">

            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>

            <Link href="/team" className="hover:text-blue-600 transition">
              Team
            </Link>

            <Link href="/ip-resources" className="hover:text-blue-600 transition">
              IP Resources
            </Link>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
