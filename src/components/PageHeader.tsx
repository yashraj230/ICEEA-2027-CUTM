import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";

/* ── Navigation data ──────────────────────────────────────── */
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: [string, string][] };

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About ICEEA",
    children: [
      ["About Conference", "/about"],
      ["About University", "https://www.cutm.ac.in/"],
      ["About IPN-Mexico", "https://www.ipn.mx/"],
      ["Organizing Committee", "/committee"],
    ],
  },
  {
    label: "Speakers",
    children: [
      ["Keynote Speakers", "/speakers"],
      ["International Speakers", "/speakers"],
      ["Indian Speakers", "/speakers"],
      ["Invited Speakers", "/speakers"],
    ],
  },
  {
    label: "Submissions",
    children: [
      ["Submit Abstract", "https://docs.google.com/forms/d/e/1FAIpQLSd2pIc4oUaXXp9q28ZuUSGuKamIgBzWmZPntRzqFY614VvlDQ/viewform"],
      ["Submission Guidelines", "/submissions/guidelines"],
      ["Important Dates", "/important-dates"],
      ["Review Process", "/submissions/review"],
    ],
  },
  {
    label: "Conference",
    children: [
      ["Conference Schedule", "/program/schedule"],
      ["ICEEA-ICETS-2027 Themes", "/themes"],
      ["Field Trip", "/field"],
      ["Venue & Travel", "/venue-travel"],
      ["Tour Information", "/tour"],
    ],
  },
  { label: "Registration", href: "/registration" },
  { label: "Visa Info", href: "/visa" },
  { label: "How to Apply", href: "/apply" },
  {
    label: "More Info",
    children: [
      ["General Inquiries", "/contact/general"],
      ["Contact Organizers", "/contact"],
      ["Directions & Map", "/contact/directions"],
      ["Accommodation", "/contact/accommodation"],
      ["Venue & Travel", "/venue-travel"],
    ],
  },
];

/* ── NavLink helper ─────────────────────────────────────── */
function NavLink({
  href,
  children,
  className,
  style,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href as any} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  );
}

/* ── Marquee ────────────────────────────────────────────── */
function Marquee() {
  const msg = "🎓 ICEEA-ICETS 2027 at Centurion University, Paralakhemundi, Odisha • Nov 8-10, 2027  •  ";
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #dc2626, #b91c1c)",
        color: "#fff",
        fontSize: "12.5px",
        padding: "6px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div style={{ whiteSpace: "nowrap", animation: "phMarquee 30s linear infinite" }}>
        {Array(8).fill(msg).join("")}
      </div>
    </div>
  );
}

/* ── Chevron icon (SVG for crispness) ───────────────────── */
function ChevronDown({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={className}
      style={{
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        opacity: open ? 1 : 0.6,
        flexShrink: 0,
      }}
    >
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Desktop dropdown ───────────────────────────────────── */
function DesktopDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem & { children: [string, string][] };
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearCloseTimer();
    onOpen();
  }, [clearCloseTimer, onOpen]);

  const handleMouseLeave = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      onClose();
      closeTimer.current = null;
    }, 200);
  }, [clearCloseTimer, onClose]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="ph2-dropdown-wrap"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`ph2-nav-link${isOpen ? " ph2-active" : ""}`}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{item.label}</span>
        <ChevronDown open={isOpen} />
      </button>

      {/* Dropdown panel */}
      <div
        className="ph2-dropdown-panel"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
          pointerEvents: isOpen ? "auto" : "none",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="ph2-dropdown-inner">
          {item.children.map(([label, href], i) => (
            <NavLink
              key={label}
              href={href}
              className="ph2-dd-link"
              style={{ animationDelay: isOpen ? `${i * 30}ms` : "0ms" }}
              onClick={onClose}
            >
              <span className="ph2-dd-dot" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile nav item ────────────────────────────────────── */
function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (item.children) {
    return (
      <div className="ph2-mobile-group">
        <button
          type="button"
          className="ph2-mobile-trigger"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <span>{item.label}</span>
          <ChevronDown open={expanded} />
        </button>
        <div
          className="ph2-mobile-submenu"
          style={{
            maxHeight: expanded ? `${item.children.length * 48 + 16}px` : "0",
            opacity: expanded ? 1 : 0,
          }}
        >
          {item.children.map(([label, href]) => (
            <NavLink
              key={label}
              href={href}
              className="ph2-mobile-sublink"
              onClick={onClose}
            >
              <span className="ph2-dd-dot" />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <NavLink href={item.href!} className="ph2-mobile-link" onClick={onClose}>
      {item.label}
    </NavLink>
  );
}

/* ── Hamburger icon (animated) ──────────────────────────── */
function HamburgerIcon({ open }: { open: boolean }) {
  const lineBase: React.CSSProperties = {
    display: "block",
    width: "20px",
    height: "2px",
    borderRadius: "2px",
    background: "#fff",
    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
    transformOrigin: "center",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
      <span
        style={{
          ...lineBase,
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
        }}
      />
      <span
        style={{
          ...lineBase,
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      <span
        style={{
          ...lineBase,
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}

/* ── CSS ────────────────────────────────────────────────── */
const STYLES = `
/* Marquee keyframe */
@keyframes phMarquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Responsive breakpoints */
@media (min-width: 1100px) {
  .ph2-desktop-nav { display: flex !important; }
  .ph2-hamburger { display: none !important; }
}
@media (min-width: 640px) {
  .ph2-ciiemad { display: block !important; }
}

/* ── Desktop nav link ─────────────────────── */
.ph2-nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 13px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 550;
  color: rgba(226, 232, 240, 0.88);
  cursor: pointer;
  border: none;
  background: transparent;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  font-family: inherit;
  letter-spacing: 0.01em;
}
.ph2-nav-link:hover,
.ph2-nav-link.ph2-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}
.ph2-nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #34d399, #a3e635);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}
.ph2-nav-link:hover::after,
.ph2-nav-link.ph2-active::after {
  width: 60%;
}

/* ── Dropdown wrapper ─────────────────────── */
.ph2-dropdown-wrap {
  position: relative;
}

.ph2-dropdown-panel {
  position: absolute;
  left: 0;
  top: calc(100% + 4px);
  min-width: 240px;
  z-index: 200;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0.25s;
  padding-top: 4px;
}

.ph2-dropdown-inner {
  background: linear-gradient(160deg, rgba(6, 40, 26, 0.98), rgba(8, 51, 34, 0.98));
  border: 1px solid rgba(52, 211, 153, 0.25);
  border-radius: 14px;
  padding: 6px;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(52, 211, 153, 0.08),
    0 0 30px -5px rgba(52, 211, 153, 0.12);
  backdrop-filter: blur(20px) saturate(1.8);
  overflow: hidden;
}

/* ── Dropdown link ────────────────────────── */
.ph2-dd-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 500;
  color: rgba(167, 243, 208, 0.9);
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  background: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
}
.ph2-dd-link:hover {
  background: rgba(52, 211, 153, 0.12);
  color: #fff;
  padding-left: 18px;
}

.ph2-dd-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(52, 211, 153, 0.4);
  flex-shrink: 0;
  transition: all 0.2s ease;
}
.ph2-dd-link:hover .ph2-dd-dot {
  background: #34d399;
  box-shadow: 0 0 8px rgba(52, 211, 153, 0.6);
}

/* ── Mobile drawer ────────────────────────── */
.ph2-mobile-drawer {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
}

.ph2-mobile-group {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.ph2-mobile-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 4px;
  font-size: 14.5px;
  font-weight: 600;
  color: #e2e8f0;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: color 0.2s;
}
.ph2-mobile-trigger:hover {
  color: #fff;
}

.ph2-mobile-submenu {
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  padding-bottom: 4px;
}

.ph2-mobile-sublink {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  margin: 2px 0;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 500;
  color: #a7f3d0;
  text-decoration: none;
  transition: all 0.2s ease;
}
.ph2-mobile-sublink:hover {
  background: rgba(52, 211, 153, 0.1);
  color: #fff;
}

.ph2-mobile-link {
  display: block;
  padding: 14px 4px;
  font-size: 14.5px;
  font-weight: 600;
  color: #e2e8f0;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.2s;
}
.ph2-mobile-link:hover {
  color: #fff;
}

/* ── Hamburger button ─────────────────────── */
.ph2-hamburger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.25s ease;
  color: #fff;
}
.ph2-hamburger:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(52, 211, 153, 0.3);
}

/* ── Logo divider glow ────────────────────── */
@keyframes ph2DividerPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
`;

/* ── Main Header ────────────────────────────────────────── */
export default function PageHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside closes dropdown
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ESC key closes everything
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
    setOpenDropdown(null);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, []);

  return (
    <header
      id="home"
      ref={headerRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled
          ? "linear-gradient(135deg, rgba(4, 30, 20, 0.97) 0%, rgba(6, 40, 26, 0.97) 50%, rgba(3, 24, 16, 0.97) 100%)"
          : "linear-gradient(135deg, #041e14 0%, #06281a 50%, #031810 100%)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(52,211,153,0.1)"
          : "0 2px 16px rgba(0,0,0,0.3)",
        backdropFilter: "blur(16px) saturate(1.6)",
      }}
    >
      <style>{STYLES}</style>

      {/* ── Top bar ──────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1360px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "6px 20px" : "10px 20px",
          gap: "8px",
          transition: "padding 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* ── Logo ───────────────────────────────────── */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            flexShrink: 0,
            textDecoration: "none",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "4px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src="/Picsart_26-01-21_18-55-13-995.png"
              alt="CUTM Logo"
              style={{
                height: scrolled ? "52px" : "64px",
                width: scrolled ? "52px" : "64px",
                objectFit: "contain",
                display: "block",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              width: "1px",
              height: scrolled ? "36px" : "48px",
              background: "linear-gradient(to bottom, transparent, rgba(52,211,153,0.5), transparent)",
              animation: "ph2DividerPulse 3s ease-in-out infinite",
              transition: "height 0.4s ease",
            }}
          />

          {/* Title block */}
          <div style={{ lineHeight: 1.3 }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                background: "linear-gradient(90deg, #34d399, #a3e635)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textTransform: "uppercase",
              }}
            >
              ICEEA · ICETS
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "#f1f5f9",
                marginTop: "1px",
                letterSpacing: "-0.02em",
              }}
            >
              2027
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "#94a3b8",
                letterSpacing: "0.02em",
              }}
            >
              Nov 8–10 · Odisha, India
            </div>
          </div>
        </Link>

        {/* ── Desktop Navigation ─────────────────────── */}
        <nav
          className="ph2-desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "1px",
          }}
        >
          {nav.map((item) =>
            item.children ? (
              <DesktopDropdown
                key={item.label}
                item={item as NavItem & { children: [string, string][] }}
                isOpen={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={() => setOpenDropdown(null)}
                onToggle={() =>
                  setOpenDropdown((prev) => (prev === item.label ? null : item.label))
                }
              />
            ) : (
              <NavLink key={item.label} href={item.href!} className="ph2-nav-link">
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* ── Right side (CIIEMAD logo + hamburger) ──── */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <div
            className="ph2-ciiemad"
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "3px",
              border: "2px solid rgba(52,211,153,0.3)",
              display: "none",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src="/CIIEMAD LOGO.jpg"
              alt="CIIEMAD IPN Logo"
              style={{
                height: scrolled ? "46px" : "56px",
                width: scrolled ? "46px" : "56px",
                objectFit: "contain",
                display: "block",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>

          <button
            className="ph2-hamburger"
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ────────────────────────────── */}
      <div
        className="ph2-mobile-drawer"
        style={{
          maxHeight: mobileOpen ? "100vh" : "0",
          opacity: mobileOpen ? 1 : 0,
          borderTop: mobileOpen ? "1px solid rgba(52,211,153,0.15)" : "none",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, rgba(4,30,20,0.99) 0%, rgba(2,18,12,0.99) 100%)",
            padding: "12px 20px 24px",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          {nav.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={closeMobile} />
          ))}

          {/* Mobile CTA */}
          <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(52,211,153,0.15)" }}>
            <NavLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSd2pIc4oUaXXp9q28ZuUSGuKamIgBzWmZPntRzqFY614VvlDQ/viewform"
              onClick={closeMobile}
              style={{
                display: "block",
                textAlign: "center",
                padding: "12px 24px",
                background: "linear-gradient(135deg, #059669, #16a34a)",
                color: "#fff",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(5,150,105,0.35)",
                transition: "all 0.25s ease",
              }}
            >
              Submit Abstract →
            </NavLink>
          </div>
        </div>
      </div>

      {/* ── Marquee ──────────────────────────────────── */}
      <Marquee />
    </header>
  );
}