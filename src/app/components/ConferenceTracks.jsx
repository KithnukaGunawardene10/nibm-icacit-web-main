// app/components/ConferenceTracks.jsx
"use client";

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

export default function ConferenceTracks() {
  return (
    <section id="tracks" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Conference Tracks
          </h2>
          <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
          <p className="mt-6 text-[17px] leading-relaxed text-gray-700 max-w-5xl text-justify">
            ICACIT 2027 invites submissions across the following tracks. Each
            track represents an active area of research and practice in
            computing and information technology. Authors are encouraged to
            submit work that contributes to theory, methodology, or applied
            systems within these areas.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-12">
          {tracksData.map((track) => (
            <div key={track.id} className="border-t-2 border-[#2295BA] pt-6">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-sm font-bold text-[#2295BA] tracking-widest shrink-0">
                  {track.code}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  {track.title}
                </h3>
              </div>
              <p className="text-[16px] leading-relaxed text-gray-700 text-justify">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
