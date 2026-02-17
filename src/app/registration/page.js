// app/page.jsx  (or app/registration/page.jsx)
"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
// import LeftRightParaSection from "../components/LeftRightParaSection";
// import FullWidthParaSection from "../components/FullWidthParaSection";
import VenueFees from "../components/VenueFees";
import PaymentDetails from "../components/PaymentDetails";

export default function Registration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Fixed Navbar with smooth hide/show */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        {
        <HalfCoverImage
          title="ICACIT 2026 Registration"
          description="Complete your registration to join ICACIT 2026."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />
        }

        <VenueFees />
        <PaymentDetails />

        
        

        

       
      
      </main>

      <Footer />
    </div>
  );
}