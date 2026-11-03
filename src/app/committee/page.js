"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";

// Reusable Section — modern title style
function Section({ title, children }) {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="mb-10 lg:mb-12">
          <span className="inline-flex items-center rounded-full border border-[#2295BA]/25 bg-[#2295BA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2295BA]">
            Committee
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h2>
          <div className="mt-3 w-14 h-1 rounded-full bg-[#2295BA]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
}

// Profile Card – full photo style (gradient only at the very bottom)
function StaffCard({ name, position, image }) {
  return (
    <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gray-200">
      {image ? (
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm bg-gray-100">
          Photo not available
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <h3 className="text-[17px] font-bold leading-snug drop-shadow-sm">
          {name}
        </h3>
        <p className="mt-1.5 text-[13.5px] text-white/90 leading-snug">
          {position}
        </p>
      </div>
    </div>
  );
}

export default function Committee() {
  const patrons = [
    {
      name: "Dr. Chinthake Perera",
      position: "Chairman, NIBM",
      image: "/committee/CG.png",
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
      name: "Ms. Chalana Hansi Jayaweera",
      position: "Consultant / Lecturer",
      image: "/committee/SJ.jpg",
    },
    {
      name: "Ms. Kavishna Wijesinghe",
      position: "Consultant / Lecturer",
      image: "/committee/KW.jpg",
    },
  ];

  // const organizing = [
  //   {
  //     name: "Mr. Ilham Rasif",
  //     position: "Consultant / Lecturer",
  //     image: "/committee/MI.jpg",
  //   },
  //   {
  //     name: "Ms. Pavithra Maheshwara",
  //     position: "Consultant / Lecturer",
  //     image: "/committee/PM.png",
  //   },
  //   {
  //     name: "Ms. Amaya Lokuliyana",
  //     position: "Consultant / Lecturer",
  //     image: "/committee/CL.png",
  //   },
  //   {
  //     name: "Mr. Kithnuka Gunawardene",
  //     position: "Demonstrator",
  //     image: "/committee/KGG.png",
  //   },
  //   {
  //     name: "Ms. Sandali Gunwardhane",
  //     position: "Demonstrator",
  //     image: "/committee/SG.png",
  //   },
  //   {
  //     name: "Mr. Supun Liyanage",
  //     position: "Marketing Officer / Graphic Designer",
  //   },
  //   { name: "Ms. Chamudi Jayasinghe", position: "Secretary of Director" },
  //   { name: "Ms. Binali Dissanayake", position: "Course Secretary" },
  //   { name: "Ms. Iresha Gamage", position: "Course Secretary" },
  //   { name: "Ms. Sadunika Kapuliyadda", position: "Course Secretary" },
  //   { name: "Mr. Pamod Madushan", position: "Course Secretary" },
  // ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <HalfCoverImage
        title="ICACIT 2027 Committee"
        image="/main-hero.jpg"
        height="30vh"
        blackOpacity="bg-black/40"
      />

      <main>
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

        {/* <Section title="Organizing Committee Members">
          {organizing.map((m, i) => (
            <StaffCard key={i} {...m} />
          ))}
        </Section> */}
      </main>

      <Footer />
    </div>
  );
}