"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MoveRight, Phone } from "lucide-react";
import { contactInfo, featuredBrands, siteNav } from "@/lib/content";

type ModalPanel = "about" | "contact";

interface FooterProps {
  onOpenModal: (panel: ModalPanel) => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="px-4 pb-8 pt-20 sm:px-6">
      <div className="site-footer-shell">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brands/litty/wordmark.png"
              alt="Litty Co."
              width={132}
              height={96}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-xl text-sm leading-7 text-stone-300/72">
              Litty is the umbrella layer for the whole ecosystem: culture,
              ambition, products, services, and the world they all belong to.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className="footer-button" onClick={() => onOpenModal("about")}>
                About Litty
              </button>
              <button type="button" className="footer-button footer-button--accent" onClick={() => onOpenModal("contact")}>
                Contact
              </button>
            </div>
          </div>

          <div>
            <p className="footer-title">Explore</p>
            <div className="mt-4 grid gap-2 text-sm">
              {siteNav.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-title">Brand lanes</p>
            <div className="mt-4 grid gap-2 text-sm">
              {featuredBrands.map((brand) => (
                <Link key={brand.slug} href={brand.route} className="footer-link">
                  {brand.displayName}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 rounded-[1.8rem] border border-white/10 bg-white/5 p-5 md:grid-cols-3">
          <a href={`mailto:${contactInfo.email}`} className="footer-contact-line">
            <Mail size={16} />
            {contactInfo.email}
          </a>
          <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="footer-contact-line">
            <Instagram size={16} />
            @littyco
          </a>
          <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`} className="footer-contact-line">
            <Phone size={16} />
            {contactInfo.phone}
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Built for the ecosystem. Litty Co. pass one.</p>
          <Link href="/brands" className="inline-flex items-center gap-2 text-stone-200 transition hover:text-[var(--accent-gold)]">
            See the whole brand family
            <MoveRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
