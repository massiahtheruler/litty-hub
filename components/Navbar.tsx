"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteNav } from "@/lib/content";

type ModalPanel = "about" | "contact";

interface NavbarProps {
  onOpenModal: (panel: ModalPanel) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleModalOpen = (panel: ModalPanel) => {
    setMobileOpen(false);
    onOpenModal(panel);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="site-nav-shell">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brands/litty/wordmark.png"
            alt="Litty Co."
            width={110}
            height={80}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 xl:flex">
          {siteNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-pill ${active ? "nav-pill--active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <button type="button" className="nav-pill" onClick={() => onOpenModal("about")}>
            About
          </button>
          <button type="button" className="nav-pill nav-pill--warm" onClick={() => onOpenModal("contact")}>
            Contact
          </button>
        </nav>

        <button
          type="button"
          className="soft-icon-button xl:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-panel xl:hidden">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "mobile-nav-link--active"
                  : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button type="button" className="mobile-nav-link" onClick={() => handleModalOpen("about")}>
            About
          </button>
          <button
            type="button"
            className="mobile-nav-link mobile-nav-link--accent"
            onClick={() => handleModalOpen("contact")}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
