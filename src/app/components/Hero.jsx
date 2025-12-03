import { BASE_URL } from "../util/constant/common";

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[80vh] sm:h-[75vh] lg:h-[80vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${BASE_URL}/main-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          The International Conference on
          <br />
          <span className="text-[#2295BA]">
            Advanced Computing and Information Technology
          </span>
        </h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-100">
          March 26th, 2026 &bull; Colombo, Sri Lanka
        </p>

        <p className="mt-4 max-w-4xl text-sm font-semibold sm:text-base md:text-lg text-gray-200">
          ICACIT 2026, organized by NIBM School of Computing & Engineering, is a
          premier forum for researchers, practitioners, and students to share
          innovative ideas and present original research. The conference covers
          Software Engineering, IT for Business, Network Security, and
          Multimedia, offering keynote lectures, technical sessions, workshops,
          and networking opportunities.
        </p>
      </div>
    </section>
  );
}
