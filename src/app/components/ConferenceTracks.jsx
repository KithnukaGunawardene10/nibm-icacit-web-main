// // app/components/ConferenceTracks.jsx
// "use client";

// const tracksData = [
//   {
//     id: "t1",
//     code: "T1",
//     title: "Artificial Intelligence and Data Science",
//     description:
//       "Covers machine learning, deep learning, generative AI, data analytics, big data systems, and intelligent decision-making. Submissions are invited on both foundational methods and applied systems across industry and research domains.",
//   },
//   {
//     id: "t2",
//     code: "T2",
//     title: "Computing Education and Learning Technologies",
//     description:
//       "Focuses on computing pedagogy, educational technology, digital learning environments, curriculum design, and assessment practices for computing and IT education.",
//   },
//   {
//     id: "t3",
//     code: "T3",
//     title: "IoT, Cloud and Emerging Technologies",
//     description:
//       "Addresses internet of things, cloud computing, edge and fog computing, distributed systems, and emerging platforms that support scalable and connected applications.",
//   },
//   {
//     id: "t4",
//     code: "T4",
//     title: "Human-Computer Interaction and Accessibility",
//     description:
//       "Explores user experience, interaction design, assistive technologies, inclusive design, and accessibility for diverse users and contexts.",
//   },
//   {
//     id: "t5",
//     code: "T5",
//     title: "Green and Sustainable Computing",
//     description:
//       "Covers energy-efficient computing, sustainable IT infrastructure, green data centres, and computing solutions that contribute to environmental sustainability.",
//   },
//   {
//     id: "t6",
//     code: "T6",
//     title: "Immersive Experiences: Creativity Meets Intelligent Media",
//     description:
//       "Focuses on multimedia, virtual and augmented reality, interactive media, digital storytelling, and creative applications of intelligent systems.",
//   },
//   {
//     id: "t7",
//     code: "T7",
//     title: "Securing the Digital Future: Cyber Resilience in the Age of AI",
//     description:
//       "Addresses cybersecurity, ethical hacking, network security, threat intelligence, AI-driven security, and resilience of digital infrastructure.",
//   },
//   {
//     id: "t8",
//     code: "T8",
//     title: "Intelligent Machines and Connected Systems for Industry 4.0",
//     description:
//       "Covers mechatronics, robotics, automation, cyber-physical systems, and intelligent manufacturing technologies relevant to Industry 4.0.",
//   },
// ];

// export default function ConferenceTracks() {
//   return (
//     <section id="tracks" className="bg-white border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//         {/* Section Title */}
//         <div className="mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Conference Tracks
//           </h2>
//           <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
//           <p className="mt-6 text-[17px] leading-relaxed text-gray-700 max-w-5xl text-justify">
//             ICACIT 2027 invites submissions across the following tracks. Each
//             track represents an active area of research and practice in
//             computing and information technology. Authors are encouraged to
//             submit work that contributes to theory, methodology, or applied
//             systems within these areas.
//           </p>
//         </div>

//         {/* Tracks Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-12">
//           {tracksData.map((track) => (
//             <div key={track.id} className="border-t-2 border-[#2295BA] pt-6">
//               <div className="flex items-baseline gap-4 mb-3">
//                 <span className="text-sm font-bold text-[#2295BA] tracking-widest shrink-0">
//                   {track.code}
//                 </span>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
//                   {track.title}
//                 </h3>
//               </div>
//               <p className="text-[16px] leading-relaxed text-gray-700 text-justify">
//                 {track.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// app/components/ConferenceTracks.jsx
"use client";

import { useEffect, useRef, useState } from "react";

const tracksData = [
  {
    id: "t1",
    code: "T1",
    title: "Artificial Intelligence and Data Science",
    description:
      "Covers machine learning, deep learning, generative AI, data analytics, big data systems, and intelligent decision-making. Submissions are invited on both foundational methods and applied systems across industry and research domains.",
  },
  {
    id: "t2",
    code: "T2",
    title: "Computing Education and Learning Technologies",
    description:
      "Focuses on computing pedagogy, educational technology, digital learning environments, curriculum design, and assessment practices for computing and IT education.",
  },
  {
    id: "t3",
    code: "T3",
    title: "IoT, Cloud and Emerging Technologies",
    description:
      "Addresses internet of things, cloud computing, edge and fog computing, distributed systems, and emerging platforms that support scalable and connected applications.",
  },
  {
    id: "t4",
    code: "T4",
    title: "Human-Computer Interaction and Accessibility",
    description:
      "Explores user experience, interaction design, assistive technologies, inclusive design, and accessibility for diverse users and contexts.",
  },
  {
    id: "t5",
    code: "T5",
    title: "Green and Sustainable Computing",
    description:
      "Covers energy-efficient computing, sustainable IT infrastructure, green data centres, and computing solutions that contribute to environmental sustainability.",
  },
  {
    id: "t6",
    code: "T6",
    title: "Immersive Experiences: Creativity Meets Intelligent Media",
    description:
      "Focuses on multimedia, virtual and augmented reality, interactive media, digital storytelling, and creative applications of intelligent systems.",
  },
  {
    id: "t7",
    code: "T7",
    title: "Securing the Digital Future: Cyber Resilience in the Age of AI",
    description:
      "Addresses cybersecurity, ethical hacking, network security, threat intelligence, AI-driven security, and resilience of digital infrastructure.",
  },
  {
    id: "t8",
    code: "T8",
    title: "Intelligent Machines and Connected Systems for Industry 4.0",
    description:
      "Covers mechatronics, robotics, automation, cyber-physical systems, and intelligent manufacturing technologies relevant to Industry 4.0.",
  },
];

const accents = [
  {
    border: "border-[#2295BA]/25",
    bar: "from-[#2295BA]/80 to-[#2295BA]/0",
    orb: "from-[#2295BA]/25 to-cyan-400/10",
    badge: "text-[#2295BA] border-[#2295BA]/25 bg-[#2295BA]/10",
  },
  {
    border: "border-teal-400/25",
    bar: "from-teal-500/80 to-teal-500/0",
    orb: "from-teal-500/20 to-emerald-400/10",
    badge: "text-teal-600 border-teal-400/25 bg-teal-50",
  },
  {
    border: "border-sky-400/25",
    bar: "from-sky-500/80 to-sky-500/0",
    orb: "from-sky-500/20 to-blue-400/10",
    badge: "text-sky-600 border-sky-400/25 bg-sky-50",
  },
  {
    border: "border-indigo-400/25",
    bar: "from-indigo-500/80 to-indigo-500/0",
    orb: "from-indigo-500/20 to-violet-400/10",
    badge: "text-indigo-600 border-indigo-400/25 bg-indigo-50",
  },
];

function TrackCard({ track, index, visible }) {
  const accent = accents[index % accents.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`relative z-10 flex h-full flex-col transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: visible ? `${index * 70}ms` : "0ms" }}
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_16px_40px_rgba(34,149,186,0.12)] ${accent.border}`}
      >
        <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accent.bar}`} />

        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br opacity-30 blur-[80px] transition-opacity duration-500 group-hover:opacity-70 ${accent.orb}`}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
          <div className="mb-5 flex items-start justify-between sm:mb-6">
            <span className="select-none font-mono text-5xl font-bold leading-none text-slate-900/5 transition-all duration-500 group-hover:text-slate-900/15 sm:text-6xl">
              {num}
            </span>
            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm sm:px-3 ${accent.badge}`}
            >
              {track.code}
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#1a7a99] sm:mb-4 sm:text-2xl">
            {track.title}
          </h3>

          <p className="flex-grow text-sm font-light leading-relaxed text-slate-600 sm:text-[15px]">
            {track.description}
          </p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="mt-auto flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[11px] font-bold text-[#2295BA]">
              {track.code.replace("T", "")}
            </span>
            <span className="text-sm font-medium tracking-wide text-slate-500">
              Research track
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ConferenceTracks() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="tracks"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#2295BA]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 text-center sm:mb-16">
          <span className="mb-5 inline-block rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[#2295BA] shadow-sm backdrop-blur-sm">
            Research areas
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Conference <span className="text-[#2295BA]">Tracks</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-light tracking-wide text-slate-500 sm:text-base">
            Eight active research areas. Submit foundational methods or applied
            systems across computing and information technology.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {tracksData.map((track, index) => (
            <TrackCard
              key={track.id}
              track={track}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}