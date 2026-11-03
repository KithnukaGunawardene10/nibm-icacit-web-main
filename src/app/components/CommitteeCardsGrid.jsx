// "use client";

// import CommitteeListingCard from "./CommitteeListingCard";

// export default function CommitteeCardsGrid({ title, items }) {
//   return (
//     // Full-width background
//     <div className="w-full bg-white py-12">
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {title && (
//           <h2 className="text-2xl font-bold text-black mb-8">{title}</h2>
//         )}

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
//           {items.map((committee) => (
//             <CommitteeListingCard
//               key={committee.committeeId}
//               image={committee.image}
//               name={committee.name}
//               position={committee.position}
//               href={`/committee/${committee.committeeId}`}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";

import ProfileCard from "./ProfileCard";

export default function CommitteeCardsGrid({ title, items }) {
  return (
    <div className="w-full bg-slate-100 py-12 sm:py-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
        ) : null}

        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((committee) => {
            const handle =
              (committee.name || "member")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "")
                .slice(0, 16) || "member";

            return (
              <ProfileCard
                key={committee.committeeId}
                avatarUrl={committee.image || ""}
                name={committee.name}
                title={committee.position}
                handle={handle}
                status={committee.position || "Committee"}
                statusColor="#2295BA"
                contactText="View"
                contactHref={`/committee/${committee.committeeId}`}
                showUserInfo={true}
                radius={16}
                holo={0.75}
                glare={0.5}
                enableTilt={true}
                tiltStrength={12}
                parallax={8}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}