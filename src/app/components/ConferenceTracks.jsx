"use client";

export default function ConferenceTracks({ tracks }) {
  return (
    <section
      id="tracks"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Title */}
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Conference Tracks
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          ICACIT 2026 invites contributions that advance knowledge across
          multiple domains of computing and information technology. The
          following tracks have been identified to guide submissions and
          highlight current research priorities in both academic and applied
          contexts.
        </p>
      </div>

      {/* Track Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {tracks.map((track, index) => (
          <div key={index} className="bg-white p-6 shadow transition">
            <h3 className="text-xl font-semibold text-gray-900">
              {track.title}
            </h3>
            <p className="mt-2 text-gray-700 text-sm sm:text-base prose text-justify">
              {track.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
