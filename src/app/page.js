// app/page.jsx
"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LeftRightParaSectionLarge from "./components/LeftRightParaSectionLarge";
import ConferenceTracks from "./components/ConferenceTracks";
import ImportantDates from "./components/ImportantDates";

export default function Page() {
  const tracks = [
    {
      title: "Computing",
      description:
        "This track explores core areas of computing including software development, algorithms, data structures, artificial intelligence, and emerging technologies. It emphasizes both theoretical foundations and practical applications that drive innovation across industries.",
    },
    {
      title: "Information Technology for Business",
      description:
        "Focusing on the use of IT in organizational contexts, this track covers digital transformation, business process optimization, enterprise systems, and technological solutions that enhance productivity, efficiency, and decision-making in modern businesses.",
    },
    {
      title: "Ethical Hacking & Network Security",
      description:
        "Addressing cybersecurity and risk management, this track covers network security, penetration testing, secure system design, threat analysis, and ethical hacking practices. Participants will explore strategies for protecting digital infrastructures and sensitive data.",
    },
  ];

  const dates = [
    {
      event: "Call for Abstract / Extended Abstract Submission",
      date: "Nov 10, 2025",
      description:
        "Authors are invited to submit their abstracts or extended abstracts for ICACIT 2026, following the conference submission guidelines.",
    },
    {
      event: "Deadline for Abstract / Extended Abstract Submission",
      date: "Dec 20, 2025",
      description:
        "Final date to submit abstracts or extended abstracts for consideration in ICACIT 2026.",
    },
    {
      event: "Notification of Acceptance",
      date: "Jan 20, 2026",
      description:
        "Authors will be notified regarding the acceptance status of their submitted abstracts or papers after peer review.",
    },
    {
      event: "Submission of Camera-Ready Papers",
      date: "Jan 30, 2026",
      description:
        "Accepted authors must submit their final camera-ready papers adhering to the formatting and submission guidelines.",
    },
    {
      event: "Commencement of Registration for Conference",
      date: "Feb 10, 2026",
      description:
        "Registration for ICACIT 2026 opens for all participants, including authors, presenters, and attendees.",
    },
    {
      event: "Deadline for Conference Registration",
      date: "Feb 20, 2026",
      description:
        "Last date to complete registration for ICACIT 2026 to participate in sessions, workshops, and networking events.",
    },
    {
      event: "ICACIT Conference 2026",
      date: "Mar 26, 2026",
      description:
        "The annual ICACIT Conference '26 commences, featuring keynote speeches, technical presentations, workshops, and opportunities for academic-industry collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Navbar with smooth hide/show */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <Hero />

        <LeftRightParaSectionLarge
          firstTitle="About ICACIT 2026"
          firstDescription={`
    ICACIT 2026 is the 2nd International Conference on Advanced Computing and Information Technology, organized by the School of Computing and Engineering at NIBM. 
    This prominent conference gathers researchers, academics, industry professionals, and students to present original research, exchange ideas, and explore innovations in computing and information technology. 
    The event addresses key areas including Software Engineering, IT for Business, Cybersecurity, Networking, and Multimedia Systems, covering both theoretical insights and practical applications. 
    Scheduled as a hybrid conference on <strong class="text-[#2295BA]">March 26th, 2026</strong>, ICACIT 2026 will feature keynote speeches by distinguished experts, peer-reviewed technical paper presentations, interactive workshops, and networking sessions, fostering collaboration across academia and industry. 
    Attendees will gain valuable perspectives on emerging trends, best practices, and transformative technologies shaping the global computing landscape.
  `}
          tagline="Driving the Future Forward with Smart Solutions"
        />

        <ConferenceTracks tracks={tracks} />

        <ImportantDates dates={dates} />
      </main>

      <Footer />
    </div>
  );
}
