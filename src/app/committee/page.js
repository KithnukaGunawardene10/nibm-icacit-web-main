// app/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import CommitteeCardsGrid from "../components/CommitteeCardsGrid";

export default function Committee() {
  const committeeMembers = [
    {
      committeeId: 1,
      name: "Dr. Gunathilake Tantirigama",
      position: "Patron [Chairman, NIBM]",
      image: "/committee/1.jpg",
    },
    {
      committeeId: 2,
      name: "Dr. DMA Kulasooriya",
      position: "Patron [Director General, NIBM]",
      image: "/committee/2.jpg",
    },
    {
      committeeId: 3,
      name: "Ms. Gangani Wickramasinghe",
      position: "Advisory Board Member [Director, SOCE, NIBM]",
      image: "/committee/3.jpg",
    },
    {
      committeeId: 4,
      name: "Dr. Thisara Weerasinghe",
      position: "Advisory Board Member [Head,Computer Science, SOCE, NIBM]",
      image: "/committee/4.jpg",
    },
    {
      committeeId: 5,
      name: "Dr. Rushan Abeygunawardana",
      position: "Advisory Board Member [Senior Lecturer,University of Colombo]",
      image: "/committee/5.jpg",
    },
    {
      committeeId: 6,
      name: "Ms. Amila De Silva",
      position: "Conference Co-Chairs [Consultant/ Lecturer]",
      image: "/committee/6.jpg",
    },
    {
      committeeId: 7,
      name: "Ms. Chandula Rajapaksha",
      position: "Conference Co-Chairs [Consultant/ Lecturer]",
      image: "/committee/7.jpg",
    },
    {
      committeeId: 8,
      name: "Ms. Bhagya Hapuarachchi",
      position: "Conference Co-Editors [Consultant/ Lecturer]",
      image: "/committee/8.jpg",
    },
    {
      committeeId: 9,
      name: "Ms. Chalana Hansi Jayaweera",
      position: "Conference Co-Editors [Consultant/ Lecturer]",
      image: "/committee/9.jpg",
    },
    {
      committeeId: 10,
      name: "Mr. Ilham Rasif",
      position: "Organizing Committee Member [Consultant/ Lecturer]",
      image: "/committee/10.jpg",
    },
    {
      committeeId: 11,
      name: "Ms. Kavishna Wijesinghe",
      position: "Organizing Committee Member [Consultant/ Lecturer]",
      image: "/committee/11.jpg",
    },
    {
      committeeId: 12,
      name: "Ms. Pavithra Maheshwara",
      position: "Organizing Committee Member [Consultant/ Lecturer]",
      image: "/committee/12.jpg",
    },
    {
      committeeId: 13,
      name: "Ms. Amaya Lokuliyana",
      position: "Organizing Committee Member [Consultant/ Lecturer]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 14,
      name: "Mr. Kithnuka Gunawardene",
      position: "Organizing Committee Member [Demonstrator]",
      image: "/committee/14.jpg",
    },
    {
      committeeId: 15,
      name: "Mr. Supun Liyanage",
      position:
        "Organizing Committee Member [Marketing Officer/ Graphic Designer]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 16,
      name: "Ms. Chamudi Jayasinghe",
      position: "Organizing Committee Member [Sectretary of Director]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 17,
      name: "Ms. Binali Dissanayake",
      position: "Organizing Committee Member [Course Secretary]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 18,
      name: "Ms. Iresha Gamage",
      position: "Organizing Committee Member [Course Secretary]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 19,
      name: "Ms. Sadunika Kapuliyadda",
      position: "Organizing Committee Member [Course Secretary]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 20,
      name: "Mr. Pamod Madushan",
      position: "Organizing Committee Member [Course Secretary]",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 21,
      name: "Mr. Chathuranga Rajapaksha",
      position: "Organizing Committee Member",
      image: "/common/person-placeholder.png",
    },
    {
      committeeId: 22,
      name: "Mr. Rusith Tharuka",
      position: "Organizing Committee Member",
      image: "/common/person-placeholder.png",
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
        <HalfCoverImage
          title="ICACIT 2026 Committee"
          description="Meet the experts ensuring a high-quality peer-reviewed ICACIT 2026."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <CommitteeCardsGrid
          title="Committee Members"
          items={committeeMembers}
        />
      </main>

      <Footer />
    </div>
  );
}
