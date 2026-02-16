// src/app/committee/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";



// Reusable Section — perfectly centered
function Section({ title, children }) {
  return (
    <div className="py-16 px-6">
      <h3 className="text-4xl font-extrabold text-gray-900 text-center mb-12 uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-5xl">
          {children}
        </div>
      </div>
    </div>
  );
}

// Staff Card — circular image
function StaffCard({ name, position, image }) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 text-center max-w-xs hover:shadow-3xl transition-shadow">
      <div className="pt-8">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-6 pb-10 px-6">
        <h4 className="text-xl font-bold text-gray-900 leading-tight">{name}</h4>
        <p className="mt-3 text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
}

export default function Committee() {
  const patrons = [
    { name: "Dr. Gunathilake Tantirigama", position: "Chairman, NIBM", image: "/images/cH.png" },
    { name: "Dr. DMA Kulasooriya", position: "Director General, NIBM", image: "/images/DG.png" },
  ];

  const advisory = [
    { name: "Mr. Heshan Karunarathne", position: "Director, SOCE, NIBM", image: "/images/HK.png" },
    { name: "Dr. Thisara Weerasinghe", position: "Head, Computer Science, SOCE, NIBM", image: "/images/TW.jpg" },
    { name: "Dr. Rushan Abeygunawardana", position: "Senior Lecturer, University of Colombo", image: "/images/RA.png" },
  ];

  const coChairs = [
    { name: "Ms. Amila De Silva", position: "Consultant / Lecturer", image: "/images/AD.png" },
    { name: "Ms. Chandula Rajapaksha", position: "Consultant / Lecturer", image: "/images/CR.png" },
  ];

  const coEditors = [
    { name: "Ms. Bhagya Hapuarachchi", position: "Consultant / Lecturer", image: "/images/BH.jpg" },
    { name: "Ms. Chalana Hansi Jayaweera", position: "Consultant / Lecturer", image: "/images/SJ.jpg" },
  ];

  const organizing = [
    { name: "Ms. Kavishna Wijesinghe", position: "Consultant / Lecturer", image: "/images/KW.jpg" },
    { name: "Mr. Ilham Rasif", position: "Consultant / Lecturer", image: "/images/MI.jpg" },
    { name: "Ms. Pavithra Maheshwara", position: "Consultant / Lecturer", image: "/images/PM.png" },
    { name: "Ms. Amaya Lokuliyana", position: "Consultant / Lecturer", image: "/images/CL.png" },
    { name: "Mr. Kithnuka Gunawardene", position: "Demonstrator", image: "/images/KG.png" },
    { name: "Mr. Supun Liyanage", position: "Marketing Officer / Graphic Designer", /*image: "/images/MI.jpg"*/ },
    { name: "Ms. Chamudi Jayasinghe", position: "Secretary of Director", /*image: "/images/MI.jpg"*/ },
    { name: "Ms. Binali Dissanayake", position: "Course Secretary", /*image: "/images/MI.jpg"*/ },
    { name: "Ms. Iresha Gamage", position: "Course Secretary", /*image: "/images/MI.jpg"*/ },
    { name: "Ms. Sadunika Kapuliyadda", position: "Course Secretary", /*image: "/images/MI.jpg"*/ },
    { name: "Mr. Pamod Madushan", position: "Course Secretary", /*image: "/images/MI.jpg"*/ },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-20">
        <HalfCoverImage
          title="ICACIT 2026 Committee"
          description="Meet the dedicated team and experts behind ICACIT 2026"
          image="/main-hero.jpg"
          height="40vh"
          blackOpacity="bg-black/60"
        />

        <div className="text-center py-20 bg-white">
          <h1 className="text-6xl font-extrabold text-gray-900">Organizing Committee</h1>
          <h2 className="text-4xl font-bold text-[#2295BA] mt-4">ICACIT 2026</h2>
          <div className="mx-auto mt-6 w-32 h-1 bg-[#2295BA] rounded-full"></div>
        </div>

        <Section title="PATRONS">
          {patrons.map((m, i) => <StaffCard key={i} name={m.name} position={m.position} image={m.image} />)}
        </Section>

        <Section title="ADVISORY BOARD">
          {advisory.map((m, i) => <StaffCard key={i} name={m.name} position={m.position} image={m.image} />)}
        </Section>

        <Section title="CONFERENCE CO-CHAIRS">
          {coChairs.map((m, i) => <StaffCard key={i} name={m.name} position={m.position} image={m.image} />)}
        </Section>

        <Section title="CONFERENCE CO-EDITORS">
          {coEditors.map((m, i) => <StaffCard key={i} name={m.name} position={m.position} image={m.image} />)}
        </Section>

        <Section title="ORGANIZING COMMITTEE MEMBERS">
          {organizing.map((m, i) => <StaffCard key={i} name={m.name} position={m.position || ""} image={m.image} />)}
        </Section>
      </main>

      <Footer />
    </div>
  );
}