// app/components/LeftRightParaSectionLarge.jsx
import Image from "next/image";

export default function LeftRightParaSectionLarge({
  firstTitle = "ICACIT 2027",
  firstDescription,
  tagline,
}) {
  const logos = [
    {
      src: "/nibm-logo.png",
      alt: "NIBM City University",
      // label: "Organized by",
    },
    {
      src: "/icacit-logo.png",
      alt: "ICACIT 2027",
      // label: "In Collaboration with",
    },
    {
      src: "/soce-logo.png",
      alt: "School of Computing & Engineering",
      // label: "Powered by",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 border-b border-slate-100">
      {/* Soft decorative blobs (like the poster background) */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#2295BA]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — Text content */}
          <div className="lg:col-span-7">
            {/* ABOUT pill */}
            <span className="inline-flex items-center rounded-full border border-[#2295BA]/30 bg-[#2295BA]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#2295BA]">
              About
            </span>

            {/* Title */}
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              ICACIT{" "}
              <span className="text-[#2295BA]">2027</span>
            </h2>

            {/* Theme / tagline */}
            {tagline && (
              <p className="mt-5 text-lg sm:text-xl font-semibold text-slate-800 leading-snug max-w-xl">
                {tagline.split(/AI|Security|Sustainable/).map((part, i, arr) => {
                  // Simple highlight for key words if present
                  return <span key={i}>{part}</span>;
                })}
              </p>
            )}

            {/* Accent line */}
            <div className="mt-5 w-16 h-1 rounded-full bg-[#2295BA]" />

            {/* Description */}
            {firstDescription && (
              <div
                className="mt-6 text-[15.5px] sm:text-[16.5px] leading-relaxed text-slate-600 max-w-2xl text-justify"
                dangerouslySetInnerHTML={{ __html: firstDescription }}
              />
            )}
          </div>

          {/* RIGHT — Flyer / visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Soft glow behind flyer */}
              <div className="absolute -inset-4 rounded-3xl bg-[#2295BA]/15 blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-white/60 bg-white">
                <Image
                  src="/ICACIT 2027.jpeg"
                  alt="ICACIT 2027 Conference Flyer"
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 90vw, 380px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM — Partner logos bar */}
        <div className="mt-16 pt-10 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 lg:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  {logo.label}
                </span>
                <div className="relative w-32 h-14 sm:w-36 sm:h-16">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}