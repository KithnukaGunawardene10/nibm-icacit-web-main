// app/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import LeftRightParaSection from "../components/LeftRightParaSection";
import FullWidthParaSection from "../components/FullWidthParaSection";
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
        <HalfCoverImage
          title="ICACIT 2026 Registration"
          description="Complete your registration to join ICACIT 2026."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <VenueFees />

        <PaymentDetails />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-6 py-2 text-lg shadow-md transition"
          >
            Pay Via Online Payment Gateway
          </a>
        </div>

        <FullWidthParaSection
          title="Registration"
          description={`
    Online registration is mandatory for all authors and participants of ICACIT 2026. At least one author of each accepted paper must complete the registration by <strong>November 6th, 2025</strong> and upload a clear scanned copy or photo of the bank slip or online payment notice (including email confirmations from payment gateways or online transfers). <br /><br />

    Student authors or co-authors are required to upload valid proof of studentship, such as a scanned copy of a student ID or other official documentation.  
    A registration confirmation email will be issued once the conference registration committee verifies the payment document and studentship proof. <br /><br />

    Authors must upload the scanned payment receipt or online notice in the registration form. Please follow the required file name format for uploads: <br />
    <strong>File Name Format:</strong> ICACIT2026_PaperID_LastName.pdf <br /><br />

    Please click the button below to complete your registration through the official form.
  `}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2295BA] hover:bg-[#197a95] text-white font-semibold px-6 py-2 text-lg shadow-md transition"
          >
            Register Now
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
