// app/registration/page.jsx
"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";

export default function Registration() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Main content starts below navbar */}
      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="ICACIT 2027 Registration"
          description="Registration information for ICACIT 2027."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Registration Fees
            </h2>
            <div className="mt-4 w-20 h-1 bg-[#2295BA]" />
            <p className="mt-6 text-[17px] leading-relaxed text-gray-700 max-w-4xl text-justify">
              Registration is required for all participants whose papers have
              been accepted, as well as for attendees who wish to join the
              conference sessions. The following fees apply for ICACIT 2027.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider w-1/2">
                      Category
                    </th>
                    <th className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-900 uppercase tracking-wider w-1/2">
                      Fee
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-6 py-5 text-[16px] text-gray-800">
                      Local Student
                    </td>
                    <td className="border border-gray-300 px-6 py-5 text-[16px] text-gray-800">
                      Rs. 4,000.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-6 py-5 text-[16px] text-gray-800">
                      Foreign Student
                    </td>
                    <td className="border border-gray-300 px-6 py-5 text-[16px] text-gray-800">
                      USD 30.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-[15px] text-gray-600">
              At least one author of each accepted paper must register by the
              registration deadline for the paper to be included in the
              conference proceedings.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
