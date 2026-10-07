// src/app/committee/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";

// Reusable Section — centered heading, left-aligned grid
function Section({ title, children }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    </div>
  );
}

// Staff Card — square photo, no rounded corners, no shadow
function StaffCard({ name, position, image }) {
  return (
    <div className="border border-gray-200 bg-white">
      <div className="w-full aspect-square overflow-hidden bg-gray-100">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Photo not available
          </div>
        )}
      </div>
      <div className="p-5">
        <h4 className="text-[17px] font-bold text-gray-900 leading-snug">
          {name}
        </h4>
        <p className="mt-2 text-[14px] text-gray-600 leading-snug">
          {position}
        </p>
      </div>
    </div>
  );
}

export default function Committee() {
  const patrons = [
    {
      name: "Dr. Gunathilake Tantirigama",
      position: "Chairman, NIBM",
      image: "/committee/cH.png",
    },
    {
      name: "Dr. D M A Kulasooriya",
      position: "Director General, NIBM",
      image: "/committee/DG.png",
    },
  ];

  const advisory = [
    {
      name: "Mr. Heshan Karunarathne",
      position: "Director, SOCE, NIBM",
      image: "/committee/HK.png",
    },
    {
      name: "Dr. Thisara Weerasinghe",
      position: "Head, Computer Science, SOCE, NIBM",
      image: "/committee/TW.jpg",
    },
    {
      name: "Dr. Rushan Abeygunawardana",
      position: "Senior Lecturer, University of Colombo",
      image: "/committee/RA.png",
    },
  ];

  const coChairs = [
    {
      name: "Ms. Amila De Silva",
      position: "Consultant / Lecturer",
      image: "/committee/AD.png",
    },
    {
      name: "Ms. Chandula Rajapaksha",
      position: "Consultant / Lecturer",
      image: "/committee/CR.png",
    },
  ];

  const coEditors = [
    {
      name: "Ms. Bhagya Hapuarachchi",
      position: "Consultant / Lecturer",
      image: "/committee/BH.jpg",
    },
    {
      name: "Ms. Chalana Hansi Jayaweera",
      position: "Consultant / Lecturer",
      image: "/committee/SJ.jpg",
    },
  ];

  const organizing = [
    {
      name: "Ms. Kavishna Wijesinghe",
      position: "Consultant / Lecturer",
      image: "/committee/KW.jpg",
    },
    {
      name: "Mr. Ilham Rasif",
      position: "Consultant / Lecturer",
      image: "/committee/MI.jpg",
    },
    {
      name: "Ms. Pavithra Maheshwara",
      position: "Consultant / Lecturer",
      image: "/committee/PM.png",
    },
    {
      name: "Ms. Amaya Lokuliyana",
      position: "Consultant / Lecturer",
      image: "/committee/CL.png",
    },
    {
      name: "Mr. Kithnuka Gunawardene",
      position: "Demonstrator",
      image: "/committee/KG.png",
    },
    {
      name: "Mr. Supun Liyanage",
      position: "Marketing Officer / Graphic Designer",
    },
    { name: "Ms. Chamudi Jayasinghe", position: "Secretary of Director" },
    { name: "Ms. Binali Dissanayake", position: "Course Secretary" },
    { name: "Ms. Iresha Gamage", position: "Course Secretary" },
    { name: "Ms. Sadunika Kapuliyadda", position: "Course Secretary" },
    { name: "Mr. Pamod Madushan", position: "Course Secretary" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="ICACIT 2027 Committee"
          description="The team responsible for organizing ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />
        <Section title="Patrons">
          {patrons.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section>
        <Section title="Advisory Board">
          {advisory.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section>
        <Section title="Conference Co-Chairs">
          {coChairs.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section>
        <Section title="Conference Co-Editors">
          {coEditors.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section>
        <Section title="Organizing Committee Members">
          {organizing.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section>
      </main>

      <Footer />
    </div>
  );
}
