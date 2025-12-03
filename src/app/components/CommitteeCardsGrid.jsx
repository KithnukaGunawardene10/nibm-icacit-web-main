"use client";

import CommitteeListingCard from "./CommitteeListingCard";

export default function CommitteeCardsGrid({ title, items }) {
  return (
    // Full-width background
    <div className="w-full bg-white py-12">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl font-bold text-black mb-8">{title}</h2>
        )}

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {items.map((committee) => (
            <CommitteeListingCard
              key={committee.committeeId}
              image={committee.image}
              name={committee.name}
              position={committee.position}
              href={`/committee/${committee.committeeId}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
