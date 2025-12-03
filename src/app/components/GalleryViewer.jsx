"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronRight as ArrowRight,
} from "lucide-react";
import { BASE_URL } from "../util/constant/common";

export default function GalleryViewer({ galleryData }) {
  const [openYear, setOpenYear] = useState(galleryData[0].year);
  const [selectedCategory, setSelectedCategory] = useState(
    galleryData[0].conferences[0]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  const selectConf = (conf) => {
    setSelectedCategory(conf);
    setCurrentIndex(0);
  };

  const images = selectedCategory.images;
  const total = images.length;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Mobile toggle */}
        <button
          className="md:hidden px-4 py-2 bg-[#2295BA] text-white font-semibold"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide Gallery" : "Show Gallery"}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block md:w-1/4 space-y-4 overflow-y-auto max-h-[80vh] p-4 bg-white border border-gray-200 shadow`}
        >
          {galleryData.map((yearGroup) => (
            <div key={yearGroup.year} className="border-b pb-2">
              {/* Year header */}
              <button
                onClick={() => toggleYear(yearGroup.year)}
                className="w-full flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 p-2 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {yearGroup.year} Gallery
                </h3>

                {openYear === yearGroup.year ? (
                  <ChevronDown size={20} className="text-gray-500" />
                ) : (
                  <ArrowRight size={20} className="text-gray-500" />
                )}
              </button>

              {/* Conferences inside year */}
              {openYear === yearGroup.year && (
                <ul className="space-y-2 mt-3 pl-1">
                  {yearGroup.conferences.map((conf, idx) => (
                    <li
                      key={idx}
                      onClick={() => selectConf(conf)}
                      className={`cursor-pointer p-3 border transition-colors ${
                        selectedCategory.title === conf.title
                          ? "bg-gray-300 text-white"
                          : "bg-white border-gray-100 text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <p className="font-normal text-sm text-black">
                        {conf.title}
                      </p>

                      <p className="text-sm text-black mt-1">
                        {conf.images.length} photos
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Image Viewer */}
        <div className="flex-1 bg-white border border-gray-200 shadow p-4 relative">
          <h2 className="text-lg font-semibold text-center mb-4 text-black">
            {selectedCategory.title}
          </h2>

          <div className="relative w-full h-[55vh] bg-transparent overflow-hidden">
            {/* Image */}
            {isClient && (
              <Image
                src={`${BASE_URL}${images[currentIndex]}`}
                alt="gallery-image"
                fill
                className="object-contain p-4"
              />
            )}

            {/* Prev Arrow */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 shadow-md text-black"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Arrow */}
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 shadow-md text-black"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-3 bg-gray-800/70 text-white px-3 py-1 rounded text-sm">
              {currentIndex + 1} / {total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
