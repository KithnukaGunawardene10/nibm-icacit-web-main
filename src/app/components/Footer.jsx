// app/components/Footer.jsx
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Logo & Social */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold text-[#2295BA]">ICACIT 2026</h3>
            <p className="text-gray-300">
              The International Conference on Advanced Computing and Information
              Technology (ICACIT) 2026, organized by the School of Computing &
              Engineering at NIBM. Join us for keynote sessions, technical paper
              presentations, and workshops.
            </p>
            <a
              href="https://www.nibm.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#2295BA] transition"
            >
              Visit Official Website
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex gap-3 pt-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-[#2295BA] transition"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-bold mb-4 text-white">Conference</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/#home" className="hover:text-[#2295BA]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#tracks" className="hover:text-[#2295BA]">
                    Conference Tracks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#important-dates"
                    className="hover:text-[#2295BA]"
                  >
                    Important Dates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/submission/author-guidelines"
                    className="hover:text-[#2295BA]"
                  >
                    Author Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/submission/submit-paper"
                    className="hover:text-[#2295BA]"
                  >
                    Submit Paper
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 text-white">
                Committee & More
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="/registration" className="hover:text-[#2295BA]">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committee/organizing"
                    className="hover:text-[#2295BA]"
                  >
                    Organizing Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/committee/review"
                    className="hover:text-[#2295BA]"
                  >
                    Review Committee
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-[#2295BA]">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#2295BA]">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-5 text-white">Get in Touch</h4>
            <ul className="space-y-5 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="">
                  School of Computing & Engineering, NIBM
                  <br />
                  No: 120/5, Wijerama (Vidya) Mawatha,
                  <br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span>+94 117 321 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <span>computingresearch@nibm.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CMT Acknowledgment */}
        <div className="mt-8 text-gray-400 text-sm leading-relaxed text-justify">
          <strong>CMT Acknowledgment:</strong> The Microsoft CMT service was
          used for managing the peer-reviewing process for this conference. This
          service was provided for free by Microsoft and they bore all expenses,
          including costs for Azure cloud services as well as for software
          development and support.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center font-semibold text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ICACIT 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
