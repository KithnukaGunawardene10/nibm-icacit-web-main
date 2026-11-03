// app/components/DriftWall.jsx
"use client";

export default function DriftWall({
  items = [],
  columns = 3,
  tileWidth = 380,
  tileHeight = 440,
  gap = 18,
  speed = 40,
  direction = "up",
  overlayColor = "#020617",
  radius = 12,
  grayscale = true,
  fade = 0.45,
}) {
  if (!items.length) {
    return (
      <div
        className="flex h-full w-full items-center justify-center text-white/40 text-sm"
        style={{ background: overlayColor }}
      >
        No images
      </div>
    );
  }

  // Split items into columns
  const cols = Array.from({ length: columns }, (_, colIndex) =>
    items.filter((_, i) => i % columns === colIndex)
  );

  // Duplicate each column for a seamless loop
  const loopCols = cols.map((col) => [...col, ...col, ...col]);

  // Higher speed = faster animation
  const duration = Math.max(20, 120 - speed);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: overlayColor }}
    >
      <style>{`
        @keyframes drift-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-33.333%); }
        }
        @keyframes drift-down {
          0% { transform: translateY(-33.333%); }
          100% { transform: translateY(0); }
        }
      `}</style>

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(ellipse at center, transparent 25%, ${overlayColor} 80%)`,
          opacity: fade,
        }}
      />

      {/* Angled stage — slight north-east lean */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        <div
          className="flex h-[140%] items-start justify-center"
          style={{
            gap: `${gap}px`,
            transform: "rotateX(12deg) rotateZ(-8deg) translateY(-4%)",
            transformStyle: "preserve-3d",
          }}
        >
          {loopCols.map((colItems, colIndex) => (
            <div
              key={colIndex}
              className="relative h-full overflow-hidden"
              style={{ width: tileWidth }}
            >
              <div
                className="flex flex-col"
                style={{
                  gap: `${gap}px`,
                  animation: `${
                    direction === "down" ? "drift-down" : "drift-up"
                  } ${duration + colIndex * 4}s linear infinite`,
                }}
              >
                {colItems.map((item, i) => (
                  <a
                    key={`${item.image}-${i}`}
                    href={item.href || "#archive"}
                    className="relative block shrink-0 overflow-hidden"
                    style={{
                      width: tileWidth,
                      height: tileHeight,
                      borderRadius: radius,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title || ""}
                      className={`h-full w-full object-cover ${
                        grayscale ? "grayscale" : ""
                      }`}
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        e.currentTarget.style.background = "#1e293b";
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}