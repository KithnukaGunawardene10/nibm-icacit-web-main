// app/gallery/page.jsx
"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HalfCoverImage from "../components/HalfCoverImage";
import GalleryViewer from "../components/GalleryViewer";
import { BASE_URL } from "../util/constant/common";

const DriftWall = dynamic(() => import("../components/DriftWall"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-slate-950 flex items-center justify-center text-white/40 text-sm">
      Loading gallery…
    </div>
  ),
});

const g2025 = (file) => `${BASE_URL}/gallery/2025/${file}`;
const g2026 = (file) => `${BASE_URL}/gallery/2026/${file}`;

export default function Gallery() {
  const galleryData = [
    {
      year: 2025,
      conferences: [
        {
          title:
            "ICACIT March 2025 Conference - School of Computing & Engineering, NIBM",
          images: [
            g2025("2025_1.jpg"),
            g2025("2025_2.jpg"),
            g2025("2025_3.jpg"),
            g2025("2025_4.jpg"),
            g2025("2025_5.jpg"),
            g2025("2025_6.jpg"),
            g2025("2025_7.jpg"),
            g2025("2025_8.jpg"),
            g2025("2025_9.jpg"),
            g2025("2025_10.jpg"),
            g2025("2025_11.jpg"),
            g2025("2025_12.jpg"),
            g2025("2025_13.jpg"),
            g2025("2025_14.jpg"),
            g2025("2025_15.jpg"),
            g2025("2025_16.jpg"),
            g2025("2025_17.jpg"),
            g2025("2025_18.jpg"),
            g2025("2025_19.jpg"),
            g2025("2025_20.jpg"),
          ],
        },
      ],
    },
    {
      year: 2026,
      conferences: [
        {
          title:
            "ICACIT 2026 Conference - School of Computing & Engineering, NIBM",
          images: [
            g2026("2026_1.jpg"),
            g2026("2026_2.jpg"),
            g2026("2026_3.jpg"),
            g2026("2026_4.jpg"),
            g2026("2026_5.jpg"),
            g2026("2026_6.jpg"),
            g2026("2026_7.jpg"),
            g2026("2026_8.jpg"),
            g2026("2026_9.jpg"),
            g2026("2026_10.jpg"),
            g2026("2026_11.jpg"),
            g2026("2026_12.jpg"),
            g2026("2026_13.jpg"),
            g2026("2026_14.jpg"),
            g2026("2026_15.jpg"),
            g2026("2026_16.jpg"),
            g2026("2026_17.jpg"),
            g2026("2026_18.jpg"),
            g2026("2026_19.jpg"),
            g2026("2026_20.jpg"),
          ],
        },
      ],
    },
  ];

  const driftItems = [
    // 2025
    { image: g2025("2025_1.jpg"), title: "2025 · Photo 1", href: "#archive" },
    { image: g2025("2025_2.jpg"), title: "2025 · Photo 2", href: "#archive" },
    { image: g2025("2025_3.jpg"), title: "2025 · Photo 3", href: "#archive" },
    { image: g2025("2025_4.jpg"), title: "2025 · Photo 4", href: "#archive" },
    { image: g2025("2025_5.jpg"), title: "2025 · Photo 5", href: "#archive" },
    { image: g2025("2025_6.jpg"), title: "2025 · Photo 6", href: "#archive" },
    { image: g2025("2025_7.jpg"), title: "2025 · Photo 7", href: "#archive" },
    { image: g2025("2025_8.jpg"), title: "2025 · Photo 8", href: "#archive" },
    { image: g2025("2025_9.jpg"), title: "2025 · Photo 9", href: "#archive" },
    { image: g2025("2025_10.jpg"), title: "2025 · Photo 10", href: "#archive" },
    { image: g2025("2025_11.jpg"), title: "2025 · Photo 11", href: "#archive" },
    { image: g2025("2025_12.jpg"), title: "2025 · Photo 12", href: "#archive" },
    { image: g2025("2025_13.jpg"), title: "2025 · Photo 13", href: "#archive" },
    { image: g2025("2025_14.jpg"), title: "2025 · Photo 14", href: "#archive" },
    { image: g2025("2025_15.jpg"), title: "2025 · Photo 15", href: "#archive" },
    { image: g2025("2025_16.jpg"), title: "2025 · Photo 16", href: "#archive" },
    { image: g2025("2025_17.jpg"), title: "2025 · Photo 17", href: "#archive" },
    { image: g2025("2025_18.jpg"), title: "2025 · Photo 18", href: "#archive" },
    { image: g2025("2025_19.jpg"), title: "2025 · Photo 19", href: "#archive" },
    { image: g2025("2025_20.jpg"), title: "2025 · Photo 20", href: "#archive" },
    // 2026
    { image: g2026("2026_1.jpg"), title: "2026 · Photo 1", href: "#archive" },
    { image: g2026("2026_2.jpg"), title: "2026 · Photo 2", href: "#archive" },
    { image: g2026("2026_3.jpg"), title: "2026 · Photo 3", href: "#archive" },
    { image: g2026("2026_4.jpg"), title: "2026 · Photo 4", href: "#archive" },
    { image: g2026("2026_5.jpg"), title: "2026 · Photo 5", href: "#archive" },
    { image: g2026("2026_6.jpg"), title: "2026 · Photo 6", href: "#archive" },
    { image: g2026("2026_7.jpg"), title: "2026 · Photo 7", href: "#archive" },
    { image: g2026("2026_8.jpg"), title: "2026 · Photo 8", href: "#archive" },
    { image: g2026("2026_9.jpg"), title: "2026 · Photo 9", href: "#archive" },
    { image: g2026("2026_10.jpg"), title: "2026 · Photo 10", href: "#archive" },
    { image: g2026("2026_11.jpg"), title: "2026 · Photo 11", href: "#archive" },
    { image: g2026("2026_12.jpg"), title: "2026 · Photo 12", href: "#archive" },
    { image: g2026("2026_13.jpg"), title: "2026 · Photo 13", href: "#archive" },
    { image: g2026("2026_14.jpg"), title: "2026 · Photo 14", href: "#archive" },
    { image: g2026("2026_15.jpg"), title: "2026 · Photo 15", href: "#archive" },
    { image: g2026("2026_16.jpg"), title: "2026 · Photo 16", href: "#archive" },
    { image: g2026("2026_17.jpg"), title: "2026 · Photo 17", href: "#archive" },
    { image: g2026("2026_18.jpg"), title: "2026 · Photo 18", href: "#archive" },
    { image: g2026("2026_19.jpg"), title: "2026 · Photo 19", href: "#archive" },
    { image: g2026("2026_20.jpg"), title: "2026 · Photo 20", href: "#archive" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/80">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main>
        <HalfCoverImage
          title="Conference Gallery"
          description="Moments from past ICACIT conferences and events."
          image="/main-hero.jpg"
          height="30vh"
          blackOpacity="bg-black/50"
        />

        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 lg:pt-10 lg:pb-12">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-[#2295BA]/25 bg-[#2295BA]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2295BA]">
                Gallery
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Highlights from ICACIT
              </h2>
              <div className="mt-3 w-14 h-1 rounded-full bg-[#2295BA]" />
              <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
                Explore selected moments from previous conferences — keynotes,
                presentations, networking, and the community that makes ICACIT
                possible.
              </p>
            </div>
          </div>
        </section>

        {/* DriftWall — wider tiles + monochrome */}
        <section className="relative w-full bg-slate-950 overflow-hidden">
          <div className="absolute inset-x-0 top-0 z-10 pointer-events-none h-16 bg-gradient-to-b from-slate-950/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none h-16 bg-gradient-to-t from-slate-950/80 to-transparent" />

          <div className="relative w-full h-[520px] sm:h-[560px] lg:h-[600px]">
            <DriftWall
              items={driftItems}
              columns={3}
              tileWidth={380}
              tileHeight={440}
              gap={18}
              tilt={6}
              turn={0}
              perspective={1200}
              depth={70}
              speed={40}
              direction="up"
              variance={0.3}
              parallax={0.35}
              lift={30}
              fade={0.5}
              dim={0.5}
              overlayColor="#020617"
              radius={12}
              roll={0}
              pauseOnHover={false}
              grayscale={true}
            />
          </div>
        </section>

        <section id="archive" className="py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Event archive
            </h3>
            <p className="mt-2 text-slate-500 text-sm sm:text-base">
              Browse photo sets by year and conference.
            </p>
          </div>

          <GalleryViewer galleryData={galleryData} />
        </section>
      </main>

      <Footer />
    </div>
  );
}