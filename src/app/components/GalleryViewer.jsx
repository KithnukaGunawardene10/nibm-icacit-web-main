// app/components/GalleryViewer.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryViewer({ galleryData = [] }) {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, index, title) => {
    setLightbox({ images, index, title });
  };

  const closeLightbox = () => setLightbox(null);

  const prev = () => {
    if (!lightbox) return;
    setLightbox((s) => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length,
    }));
  };

  const next = () => {
    if (!lightbox) return;
    setLightbox((s) => ({
      ...s,
      index: (s.index + 1) % s.images.length,
    }));
  };

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
      <div className="space-y-12">
        {galleryData.map((yearGroup) => (
          <div key={yearGroup.year}>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2295BA]">
                {yearGroup.year}
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">
                Conference photos
              </h3>
            </div>

            {yearGroup.conferences.map((conf, cIdx) => (
              <div key={cIdx} className="mb-10 last:mb-0">
                <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className="px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/70">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-800">
                      {conf.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {conf.images.length} photos
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {conf.images.map((src, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() =>
                            openLightbox(conf.images, i, conf.title)
                          }
                          className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2295BA]/40"
                        >
                          <Image
                            src={src}
                            alt={`${conf.title} – photo ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                          <span className="absolute bottom-2 right-2 rounded-md bg-black/50 px-1.5 py-0.5 text-[10px] font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            {i + 1}/{conf.images.length}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            className="absolute left-3 sm:left-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            className="absolute right-3 sm:right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh]">
              <Image
                src={lightbox.images[lightbox.index]}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">
              {lightbox.title} · {lightbox.index + 1} / {lightbox.images.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}