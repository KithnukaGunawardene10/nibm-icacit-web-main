// // app/components/Footer.jsx
// import Link from "next/link";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#0f0f0f] text-white">
//       <div className="grid grid-cols-1 lg:grid-cols-3">
//         {/* LEFT SIDE — all data */}
//         <div className="lg:col-span-2 p-8 lg:p-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//             {/* Column 1: Logo & Social */}
//             <div className="space-y-6">
//               <h3 className="text-2xl font-bold text-[#2295BA]">ICACIT 2027</h3>
//               <p className="text-gray-300">
//                 The International Conference on Advanced Computing and
//                 Information Technology (ICACIT) 2027, organized by the School of
//                 Computing & Engineering at NIBM. Join us for keynote sessions,
//                 technical paper presentations, and workshops.
//               </p>
//               <a
//                 href="https://www.nibm.lk"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#2295BA] transition"
//               >
//                 Visit Official Website
//                 <ExternalLink className="w-4 h-4" />
//               </a>
//             </div>

//             {/* Column 2: Quick Links */}
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-lg font-bold mb-4 text-white">
//                   Conference
//                 </h4>
//                 <ul className="space-y-2 text-gray-300 text-sm">
//                   <li>
//                     <Link href="/#home" className="hover:text-[#2295BA]">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/#tracks" className="hover:text-[#2295BA]">
//                       Conference Tracks
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/#important-dates"
//                       className="hover:text-[#2295BA]"
//                     >
//                       Important Dates
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/submission/author-guidelines"
//                       className="hover:text-[#2295BA]"
//                     >
//                       Author Guidelines
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="/submission/submit-paper"
//                       className="hover:text-[#2295BA]"
//                     >
//                       Submit Paper
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold mb-4 text-white">More</h4>
//                 <ul className="space-y-2 text-gray-300 text-sm">
//                   <li>
//                     <Link href="/committee" className="hover:text-[#2295BA]">
//                       Committee
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/journal" className="hover:text-[#2295BA]">
//                       Journal
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/gallery" className="hover:text-[#2295BA]">
//                       Gallery
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Contact Details */}
//             <div className="sm:col-span-2 pt-6 border-t border-gray-800">
//               <h4 className="text-lg font-bold mb-5 text-white">
//                 Get in Touch
//               </h4>
//               <ul className="space-y-4 text-gray-300 text-sm">
//                 <li className="flex items-start gap-3">
//                   <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
//                   <span>
//                     School of Computing & Engineering, NIBM
//                     <br />
//                     No: 120/5, Wijerama (Vidya) Mawatha,
//                     <br />
//                     Colombo 07, Sri Lanka
//                   </span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Phone className="w-5 h-5 text-white flex-shrink-0" />
//                   <span>+94 117 321 000</span>
//                 </li>
//                 <li className="flex items-center gap-3">
//                   <Mail className="w-5 h-5 text-white flex-shrink-0" />
//                   <span>computingresearch@nibm.lk</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* CMT Acknowledgment */}
//           <div className="mt-10 pt-6 border-t border-gray-800 text-gray-400 text-sm leading-relaxed text-justify">
//             <strong>CMT Acknowledgment:</strong> The Microsoft CMT service was
//             used for managing the peer-reviewing process for this conference.
//             This service was provided for free by Microsoft and they bore all
//             expenses, including costs for Azure cloud services as well as for
//             software development and support.
//           </div>

//           {/* Bottom Bar */}
//           <div className="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-400">
//             <p>
//               © {new Date().getFullYear()} ICACIT 2027. All rights reserved.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE — map fills the entire column */}
//         <div className="lg:col-span-1 h-full min-h-[400px] sm:min-h-[450px] lg:min-h-full">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8692631689246!2d79.86829127524423!3d6.906232993093164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25978fe3ba80d%3A0xca907ea038ba9724!2sNIBM%20World%20Wide!5e0!3m2!1sen!2slk!4v1791371704552!5m2!1sen!2slk"
//             width="100%"
//             height="100%"
//             style={{ border: 0, minHeight: "400px", height: "100%" }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="strict-origin-when-cross-origin"
//             title="NIBM Location – ICACIT 2027 Venue"
//           ></iframe>
//         </div>
//       </div>
//     </footer>
//   );
// }

// app/components/Footer.jsx
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0c0c1a] via-[#12122a] to-[#0f0f1f] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                <span className="text-[#2295BA]">ICACIT</span> 2027
              </h3>
              <p className="mt-1 text-sm text-slate-400 font-medium">
                Advanced Computing &amp; Information Technology
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              The International Conference on Advanced Computing and Information
              Technology (ICACIT) 2027, organized by the School of Computing &amp;
              Engineering at NIBM.
            </p>
            <a
              href="https://www.nibm.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-[#2295BA] transition-colors"
            >
              Visit Official Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#tracks" className="hover:text-white transition-colors">
                  Conference Tracks
                </Link>
              </li>
              <li>
                <Link href="/submission/author-guidelines" className="hover:text-white transition-colors">
                  Author Guidelines
                </Link>
              </li>
              <li>
                <Link href="/submission/submit-paper" className="hover:text-white transition-colors">
                  Submit Paper
                </Link>
              </li>
              <li>
                <Link href="/committee" className="hover:text-white transition-colors">
                  Committee
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Important Dates */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Important Dates
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-slate-300 font-medium">Submission Opens</p>
                <p className="text-[#2295BA] text-[13px] mt-0.5">1st October 2026</p>
              </li>
              <li>
                <p className="text-slate-300 font-medium">Submission Deadline</p>
                <p className="text-slate-400 text-[13px] mt-0.5">30th November 2026</p>
              </li>
              <li>
                <p className="text-slate-300 font-medium">Notification of Acceptance</p>
                <p className="text-slate-400 text-[13px] mt-0.5">5th January 2027</p>
              </li>
              <li>
                <p className="text-slate-300 font-medium">Camera-Ready Submission</p>
                <p className="text-slate-400 text-[13px] mt-0.5">15th January 2027</p>
              </li>
              <li>
                <p className="text-slate-300 font-medium">Conference Date</p>
                <p className="text-slate-400 text-[13px] mt-0.5">12th February 2027</p>
              </li>
            </ul>
          </div>

          {/* Column 4 — Map */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg h-[220px] sm:h-[240px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8692631689246!2d79.86829127524423!3d6.906232993093164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25978fe3ba80d%3A0xca907ea038ba9724!2sNIBM%20World%20Wide!5e0!3m2!1sen!2slk!4v1791371704552!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="NIBM Location – ICACIT 2027 Venue"
            />
          </div>
        </div>

        {/* Bottom cards — Venue + Contact */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white/[0.04] border border-white/10 px-5 py-4 flex items-start gap-3">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#2295BA]/15 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#2295BA]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Conference Venue</p>
              <p className="mt-1 text-[13px] text-slate-400 leading-relaxed">
                School of Computing &amp; Engineering, NIBM
                <br />
                No: 120/5, Wijerama (Vidya) Mawatha,
                <br />
                Colombo 07, Sri Lanka
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/10 px-5 py-4 flex items-start gap-3">
            <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#2295BA]/15 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-[#2295BA]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Get in Touch</p>
              <p className="mt-1 text-[13px] text-slate-400">
                computingresearch@nibm.lk
              </p>
              <p className="mt-0.5 text-[13px] text-slate-400 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                +94 117 321 000
              </p>
            </div>
          </div>
        </div>

        {/* CMT Acknowledgment */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-[12px] leading-relaxed text-slate-500 text-justify">
            <strong className="text-slate-400">CMT Acknowledgment:</strong> The
            Microsoft CMT service was used for managing the peer-reviewing process
            for this conference. This service was provided for free by Microsoft
            and they bore all expenses, including costs for Azure cloud services as
            well as for software development and support.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-slate-500">
          <p>© {new Date().getFullYear()} ICACIT 2027. All rights reserved.</p>
          <p>School of Computing &amp; Engineering, NIBM</p>
        </div>
      </div>
    </footer>
  );
}