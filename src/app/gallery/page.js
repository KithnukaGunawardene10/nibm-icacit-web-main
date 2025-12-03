"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import GalleryViewer from "../components/GalleryViewer";

export default function Gallery() {
  const galleryData = [
    {
      year: 2025,
      conferences: [
        {
          title:
            "ICACIT March 2025 Conference - School of Computing & Engineering, NIBM",
          images: [
            "/gallery/icacit_march_2025/1.jpg",
            "/gallery/icacit_march_2025/2.jpg",
            "/gallery/icacit_march_2025/3.jpg",
            "/gallery/icacit_march_2025/4.jpg",
            "/gallery/icacit_march_2025/5.jpg",
            "/gallery/icacit_march_2025/6.jpg",
            "/gallery/icacit_march_2025/7.jpg",
            "/gallery/icacit_march_2025/8.jpg",
            "/gallery/icacit_march_2025/9.jpg",
            "/gallery/icacit_march_2025/10.jpg",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-10 md:pt-12 lg:pt-14">
        <HalfCoverImage
          title="Conference Gallery"
          description="View photos from our past conferences and events."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <GalleryViewer galleryData={galleryData} />
      </main>

      <Footer />
    </div>
  );
}
