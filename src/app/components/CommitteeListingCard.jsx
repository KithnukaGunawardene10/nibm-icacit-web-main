"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CommitteeListingCard({
  image,
  name,
  position,
  href = "#",
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    const state = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      active: 0,
      tActive: 0,
    };

    const write = () => {
      const w = root.offsetWidth || 1;
      const h = root.offsetHeight || 1;
      root.style.setProperty("--rx", `${state.y * 12}deg`);
      root.style.setProperty("--ry", `${-state.x * 12}deg`);
      root.style.setProperty("--sx", `${state.x * 8}px`);
      root.style.setProperty("--sy", `${state.y * 8}px`);
      root.style.setProperty("--lx", `${((state.x + 1) * 0.5 * w).toFixed(1)}px`);
      root.style.setProperty("--ly", `${((state.y + 1) * 0.5 * h).toFixed(1)}px`);
      root.style.setProperty("--px", `${((state.x + 1) * 50).toFixed(1)}%`);
      root.style.setProperty("--py", `${((state.y + 1) * 50).toFixed(1)}%`);
      root.style.setProperty("--active", state.active.toFixed(3));
    };

    const tick = () => {
      state.x += (state.tx - state.x) * 0.12;
      state.y += (state.ty - state.y) * 0.12;
      state.active += (state.tActive - state.active) * 0.12;
      write();
      const moving =
        Math.abs(state.tx - state.x) > 0.001 ||
        Math.abs(state.ty - state.y) > 0.001 ||
        Math.abs(state.tActive - state.active) > 0.001;
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      const r = root.getBoundingClientRect();
      state.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      state.ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      state.tActive = 1;
      wake();
    };

    const onLeave = () => {
      state.tx = 0;
      state.ty = 0;
      state.tActive = 0;
      wake();
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);
    write();

    return () => {
      cancelAnimationFrame(raf);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const handle = (name || "member")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 14);

  return (
    <div
      ref={rootRef}
      style={{
        width: "100%",
        maxWidth: 320,
        margin: "0 auto",
        perspective: 1000,
        ["--rx"]: "0deg",
        ["--ry"]: "0deg",
        ["--sx"]: "0px",
        ["--sy"]: "0px",
        ["--lx"]: "50%",
        ["--ly"]: "50%",
        ["--px"]: "50%",
        ["--py"]: "50%",
        ["--active"]: "0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: 10,
          borderRadius: 26,
          background: "rgba(240,240,243,0.88)",
          boxShadow:
            "0 22px 44px -22px rgba(24,24,27,0.28), 0 6px 16px -10px rgba(24,24,27,0.14)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          transformStyle: "preserve-3d",
          willChange: "transform",
          position: "relative",
        }}
      >
        {/* Photo tile */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 5",
            borderRadius: 16,
            overflow: "hidden",
            background: "linear-gradient(180deg,#fff,#f3f4f6)",
            boxShadow: "0 4px 10px -5px rgba(24,24,27,0.22)",
          }}
        >
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name || ""}
              draggable={false}
              style={{
                position: "absolute",
                inset: -8,
                width: "calc(100% + 16px)",
                height: "calc(100% + 16px)",
                objectFit: "cover",
                objectPosition: "center top",
                transform: "translate3d(var(--sx), var(--sy), 0)",
                pointerEvents: "none",
              }}
            />
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
                fontWeight: 700,
                color: "#94a3b8",
              }}
            >
              {(name || "?").charAt(0)}
            </div>
          )}

          {/* scrim */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 28%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          {/* name on photo */}
          <div
            style={{
              position: "absolute",
              left: 16,
              right: 16,
              bottom: 14,
              color: "#fff",
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.25 }}>
              {name}
            </div>
            {position ? (
              <div
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                {position}
              </div>
            ) : null}
          </div>

          {/* glare */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(circle at var(--lx) var(--ly), rgba(255,255,255,0.55) 0%, transparent 55%)",
              mixBlendMode: "overlay",
              opacity: "calc(0.55 * var(--active))",
            }}
          />

          {/* foil */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "repeating-linear-gradient(115deg, transparent 0%, rgba(34,149,186,0.28) 8%, rgba(255,255,255,0.35) 12%, transparent 20%)",
              backgroundSize: "220% 220%",
              backgroundPosition: "var(--px) var(--py)",
              mixBlendMode: "color-dodge",
              opacity: "calc(0.45 * var(--active))",
            }}
          />
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "2px 8px 4px",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#eee",
              flex: "none",
            }}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : null}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#27272a",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              @{handle || "member"}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "rgba(39,39,42,0.6)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#2295BA",
                  display: "inline-block",
                }}
              />
              {position || "Committee"}
            </div>
          </div>

          <Link
            href={href}
            style={{
              height: 34,
              padding: "0 12px",
              borderRadius: 12,
              background: "#fff",
              border: "1px solid rgba(24,24,27,0.08)",
              boxShadow: "0 4px 10px -5px rgba(24,24,27,0.2)",
              color: "#27272a",
              fontSize: 12,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flex: "none",
            }}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}