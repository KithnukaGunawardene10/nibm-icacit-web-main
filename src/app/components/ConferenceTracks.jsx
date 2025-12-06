// app/components/ConferenceTracks.jsx
"use client";

import Image from "next/image";

// Import track images
import t1 from "../trackimages/t1-human-technology.jpg";
import t2 from "../trackimages/t2-education.jpg";
import t3 from "../trackimages/t3-gen-ai.jpg";
import t4 from "../trackimages/t4-software.jpg";
import t5 from "../trackimages/t5-cybersecurity.jpg";
import t6 from "../trackimages/t6-secops.jpg";
import t7 from "../trackimages/t7-data-science.jpg";
import t8 from "../trackimages/t8-computer-vision.jpg";
import t9 from "../trackimages/t9-storytelling.jpg";
import t10 from "../trackimages/t10-virtual-production.jpg";

// Conference Tracks Data
const tracksData = [
  {
  
      id: "t1",
      title: "T1 — Human–Technology Interaction & Digital Workplaces",
      colorClass: "green",
      image: t1,
      topics: [
        "Human–Computer Interaction (HCI)",
        "User Experience (UX) Design",
        "Digital Collaboration Tools",
        "Workplace Automation",
        "Human Factors & Ergonomics",
        "Remote & Hybrid Work Technologies",
        "Intelligent Assistive Systems",
        "Cognitive Workload Analysis",
        "Interaction Paradigms (AR/VR/MR)",
        "Digital Well-being in Workplaces",
      ],
    },
  {
    id: "t2",
    title: "T2 — Technology Education & Management",
    colorClass: "pink",
    image: t2,
    topics: [
      "Educational Technology (EdTech)",
      "Digital Pedagogies",
      "Learning Management Systems (LMS)",
      "Virtual & Remote Learning Environments",
      "Technology-Enhanced Assessment",
      "ICT in Education Governance",
      "STEM Education Innovation",
      "Curriculum Design for Emerging Technologies",
      "E-Learning Analytics",
      "Academic Technology Leadership",
    ],
  },
  {
    id: "t3",
    title: "T3 — Gen AI & Derivative Systems",
    colorClass: "blue",
    image: t3,
    topics: [
      "Generative AI Models",
      "Large Language Models (LLMs)",
      "Multimodal AI",
      "AI-Generated Content (AIGC)",
      "Ethical & Responsible GenAI",
      "AI Automation Systems",
      "Prompt Engineering",
      "Synthetic Data Generation",
      "Foundation Model Optimization",
      "AI Evaluation & Benchmarking",
    ],
  },
  {
    id: "t4",
    title: "T4 — Software Engineering & Development Practices",
    colorClass: "lightblue",
    image: t4,
    topics: [
      "Software Architecture",
      "Agile & DevOps Methodologies",
      "CI/CD Pipelines",
      "Cloud-Native Development",
      "Microservices & Containers",
      "Software Quality Assurance",
      "Programming Paradigms",
      "Requirements Engineering",
      "Testing & Debugging Automation",
      "Secure Software Development",
    ],
  },
  {
    id: "t5",
    title: "T5 — Cybersecurity Governance, Risk & Compliance",
    colorClass: "maroon",
    image: t5,
    topics: [
      "Cybersecurity Frameworks",
      "Governance, Risk & Compliance (GRC)",
      "Threat Intelligence",
      "Data Privacy & Protection",
      "Security Policies & Standards",
      "Identity & Access Management",
      "Incident Response Planning",
      "Cyber Risk Assessment",
      "Compliance Auditing",
      "Security Awareness & Training",
    ],
  },
  {
    id: "t6",
    title: "T6 — SecOps & Security Engineering",
    colorClass: "purple",
    image: t6,
    topics: [
      "Security Operations Centers (SOC)",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Network Security Engineering",
      "Cloud Security Operations",
      "Malware Analysis",
      "Security Automation (SOAR)",
      "Zero Trust Architecture",
      "Endpoint Security",
      "Security Monitoring & Analytics",
    ],
  },
  {
    id: "t7",
    title: "T7 — Data Science & Big Data Analytics",
    colorClass: "lavender",
    image: t7,
    topics: [
      "Statistical Data Analysis",
      "Predictive Analytics",
      "Big Data Processing",
      "Data Warehousing",
      "Feature Engineering",
      "Visualization & Reporting Tools",
      "Machine Learning Applications",
      "Data Governance",
      "Distributed Data Systems (Hadoop, Spark)",
      "Business Intelligence (BI)",
    ],
  },
  {
    id: "t8",
    title: "T8 — Computer Vision & Image Processing",
    colorClass: "yellow",
    image: t8,
    topics: [
      "Image Recognition",
      "Object Detection & Tracking",
      "Facial Analysis",
      "Image Segmentation",
      "Medical Image Processing",
      "3D Vision & Reconstruction",
      "Video Analytics",
      "Pattern Recognition",
      "AR/VR Image Enhancement",
      "Remote Sensing & Satellite Image Analysis",
    ],
  },
  {
    id: "t9",
    title: "T9 — Transmedia Storytelling in Modern Cinema",
    colorClass: "cyan",
    image: t9,
    topics: [
      "Cross-Platform Narrative Design",
      "Interactive Storytelling",
      "Cinematic VR Experiences",
      "Digital Media Integration",
      "Character & World-Building Strategies",
      "Audience Engagement Frameworks",
      "Narrative Engineering",
      "Immersive Film Technologies",
      "Visual Storytelling Techniques",
      "Media Convergence in Cinema",
    ],
  },
  {
    id: "t10",
    title: "T10 — Virtual Production vs. Green Screen Environments",
    colorClass: "teal",
    image: t10,
    topics: [
      "Virtual Production Workflows",
      "LED Wall Volumetric Capture",
      "Real-Time Rendering Technologies",
      "Green Screen Compositing",
      "Motion Capture Systems",
      "Production Pipeline Optimization",
      "Camera Tracking Techniques",
      "Digital Asset Creation",
      "Lighting & Scene Integration",
      "Hybrid Production Environments",
    ],
  },
];

// Color mapping for the top bar of each card
const colorMap = {
  green: "bg-green-600",
  pink: "bg-pink-600",
  blue: "bg-blue-600",
  lightblue: "bg-sky-500",
  maroon: "bg-red-800",
  purple: "bg-purple-600",
  lavender: "bg-purple-400",
  yellow: "bg-yellow-500",
  cyan: "bg-cyan-600",
  teal: "bg-teal-600",
};

export default function ConferenceTracks() {
  return (
    <section id="tracks" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      {/* Section Title */}
      <div className="text-center lg:text-left mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          Conference Tracks
        </h2>
        <p className="text-[18px] leading-8 text-gray-700 max-w-5xl mx-auto lg:mx-0 text-justify">
          ICACIT 2026 invites contributions that advance knowledge across multiple domains of computing and information technology. The following tracks have been identified to guide submissions and highlight current research priorities in both academic and applied contexts.
        </p>
        <p className="text-[18px] leading-8 text-gray-700 max-w-5xl mx-auto lg:mx-0 text-justify">
         We encourage the submission of high-quality papers reporting original work in both theoretical and experimental research areas. The following tracks are hereby solicited.
         </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {tracksData.map((track) => (
          <div
            key={track.id}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
          >
            {/* Colored Top Bar */}
            <div className={`h-3 ${colorMap[track.colorClass] || "bg-gray-600"}`} />

            {/* Image with Title Overlay */}
            <div className="relative h-64 md:h-72">
              <Image
                src={track.image}
                alt={track.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={track.id === "t1"} // Optional: prioritize first few images
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <h3 className="absolute bottom-6 left-6 right-6 text-[20px] font-bold text-white drop-shadow-2xl leading-tight">
                {track.title}
              </h3>
            </div>

            {/* Topics List */}
            <div className="p-8 bg-gradient-to-b from-gray-50 to-white">
              <h4 className="text-[20px] font-bold text-gray-800 uppercase tracking-wider mb-6">
                Key Topics Include:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {track.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start text-[18px] text-gray-700 leading-relaxed">
                    <span className="text-[#2295BA] mr-3 mt-1 text-xl">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}