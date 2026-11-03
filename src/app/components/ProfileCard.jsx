"use client";

import { memo, useEffect, useRef } from "react";
import Link from "next/link";
import "./ProfileCard.css";

const THEMES = {
  light: {
    "--pc-frame": "rgba(240, 240, 243, 0.85)",
    "--pc-frame-edge": "rgba(24, 24, 27, 0.07)",
    "--pc-frame-highlight": "rgba(255, 255, 255, 0.95)",
    "--pc-frame-shadow":
      "0 22px 44px -22px rgba(24, 24, 27, 0.28), 0 6px 16px -10px rgba(24, 24, 27, 0.14)",
    "--pc-tile": "linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)",
    "--pc-tile-edge": "rgba(24, 24, 27, 0.08)",
    "--pc-tile-highlight": "rgba(255, 255, 255, 1)",
    "--pc-tile-shadow": "0 4px 10px -5px rgba(24, 24, 27, 0.22)",
    "--pc-ink": "#27272a",
    "--pc-muted": "rgba(39, 39, 42, 0.6)",
    "--pc-shade": "rgba(24, 24, 27, 0.14)",
    "--pc-blend": "multiply",
    "--pc-holo-filter": "invert(1) hue-rotate(180deg)",
    "--pc-sheen": "rgba(255, 255, 255, 0)",
  },
};

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function ProfileCard({
  avatarUrl = "",
  name = "",
  title = "",
  handle = "",
  status = "",
  statusColor = "#2295BA",
  contactText = "View",
  contactHref = "#",
  showUserInfo = true,
  radius = 16,
  holo = 0.7,
  glare = 0.5,
  enableTilt = true,
  tiltStrength = 12,
  parallax = 8,
  className = "",
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const size = { width: root.offsetWidth, height: root.offsetHeight };
    const x = { p: 0, v: 0, target: 0 };
    const y = { p: 0, v: 0, target: 0 };
    const light = { p: 0, target: 0 };
    let raf = 0;
    let last = 0;

    const write = () => {
      const angle = enableTilt ? tiltStrength : 0;
      const tilt = Math.min(1, Math.hypot(x.p, y.p));
      const s = root.style;
      s.setProperty("--pc-light-x", `${((x.p + 1) * 0.5 * size.width).toFixed(1)}px`);
      s.setProperty("--pc-light-y", `${((y.p + 1) * 0.5 * size.height).toFixed(1)}px`);
      s.setProperty("--pc-pointer-x", `${((x.p + 1) * 50).toFixed(2)}%`);
      s.setProperty("--pc-pointer-y", `${((y.p + 1) * 50).toFixed(2)}%`);
      s.setProperty("--pc-band-x", `${(50 + x.p * 15).toFixed(2)}%`);
      s.setProperty("--pc-band-y", `${(50 + y.p * 15).toFixed(2)}%`);
      s.setProperty("--pc-rotate-x", `${(y.p * angle).toFixed(3)}deg`);
      s.setProperty("--pc-rotate-y", `${(-x.p * angle).toFixed(3)}deg`);
      s.setProperty("--pc-shift-x", `${(x.p * parallax).toFixed(2)}px`);
      s.setProperty("--pc-shift-y", `${(y.p * parallax).toFixed(2)}px`);
      s.setProperty("--pc-reach", tilt.toFixed(4));
      s.setProperty("--pc-tilt", (tilt * light.p).toFixed(4));
      s.setProperty("--pc-active", light.p.toFixed(4));
    };

    const frame = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;
      const stiffness = 120;
      const damping = 16;
      const steps = Math.max(1, Math.ceil(dt / (1 / 120)));
      const h = dt / steps;
      for (let i = 0; i < steps; i++) {
        for (const axis of [x, y]) {
          axis.v += (stiffness * (axis.target - axis.p) - damping * axis.v) * h;
          axis.p += axis.v * h;
        }
      }
      light.p += (light.target - light.p) * (1 - Math.exp(-dt / 0.2));
      write();
      const moving =
        Math.abs(x.target - x.p) > 0.0005 ||
        Math.abs(y.target - y.p) > 0.0005 ||
        Math.abs(light.target - light.p) > 0.002;
      raf = moving ? requestAnimationFrame(frame) : 0;
    };

    const wake = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const aim = (nx, ny, on = true) => {
      x.target = clamp(nx, -1, 1);
      y.target = clamp(ny, -1, 1);
      light.target = on ? 1 : 0;
      wake();
    };

    const aimAt = (e) => {
      const rect = root.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      aim(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        ((e.clientY - rect.top) / rect.height) * 2 - 1
      );
    };

    const onEnter = (e) => {
      if (e.pointerType === "mouse") aimAt(e);
    };
    const onMove = (e) => {
      if (e.pointerType === "mouse") aimAt(e);
    };
    const onLeave = () => aim(0, 0, false);

    root.addEventListener("pointerenter", onEnter);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerleave", onLeave);

    const ro = new ResizeObserver(() => {
      size.width = root.offsetWidth;
      size.height = root.offsetHeight;
      write();
    });
    ro.observe(root);
    write();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      root.removeEventListener("pointerenter", onEnter);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, [enableTilt, tiltStrength, parallax]);

  return (
    <div
      ref={rootRef}
      className={`profile-card ${className}`.trim()}
      style={{
        ...THEMES.light,
        "--pc-radius": `${radius}px`,
        "--pc-backdrop": "var(--pc-tile)",
        "--pc-holo": clamp(holo, 0, 1),
        "--pc-glare": clamp(glare, 0, 1),
        "--pc-parallax": `${parallax}px`,
        "--pc-status": statusColor,
        "--pc-holo-gain": 0.9,
      }}
    >
      <div className="profile-card__body">
        <div className="profile-card__tile">
          <span className="profile-card__sheen" />
          <span className="profile-card__holo" />
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="profile-card__photo" src={avatarUrl} alt={name} draggable={false} />
          ) : null}
          {(name || title) && (
            <>
              <span className="profile-card__scrim" />
              <div className="profile-card__info">
                {name ? <h3 className="profile-card__name">{name}</h3> : null}
                {title ? <p className="profile-card__title">{title}</p> : null}
              </div>
            </>
          )}
          <span className="profile-card__tile-rim" />
        </div>

        {showUserInfo && (
          <div className="profile-card__footer">
            {avatarUrl ? (
              <span className="profile-card__avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={avatarUrl} alt="" draggable={false} />
              </span>
            ) : null}
            <div className="profile-card__meta">
              {handle ? <span className="profile-card__handle">@{handle}</span> : null}
              {status ? <span className="profile-card__status">{status}</span> : null}
            </div>
            {contactText ? (
              <Link href={contactHref} className="profile-card__contact">
                {contactText}
              </Link>
            ) : null}
          </div>
        )}

        <span className="profile-card__glare" />
        <span className="profile-card__shade" />
        <span className="profile-card__rim" />
      </div>
    </div>
  );
}

export default memo(ProfileCard);