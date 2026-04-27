"use client";

import { useEffect, useState } from "react";
import { Flame, Instagram, Mail, MapPin, Phone, Sparkles, X } from "lucide-react";
import { contactInfo } from "@/lib/content";

type ModalPanel = "about" | "contact";

interface AboutContactModalProps {
  isOpen: boolean;
  activePanel: ModalPanel;
  onClose: () => void;
  onSelectPanel: (panel: ModalPanel) => void;
}

export default function AboutContactModal({
  isOpen,
  activePanel,
  onClose,
  onSelectPanel
}: AboutContactModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }

    const timeout = window.setTimeout(() => setShouldRender(false), 520);
    return () => window.clearTimeout(timeout);
  }, [isOpen]);

  useEffect(() => {
    if (!shouldRender) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  const isAboutActive = activePanel === "about";
  const isContactActive = activePanel === "contact";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 sm:px-6">
      <button
        type="button"
        aria-label="Close Litty modal"
        className={`absolute inset-0 bg-black/72 backdrop-blur-md ${
          isOpen
            ? "animate-[modalBackdropIn_420ms_ease_forwards]"
            : "animate-[modalBackdropOut_360ms_ease_forwards]"
        }`}
        onClick={onClose}
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-4 md:flex-row md:gap-0">
        <section
          className={`modal-panel modal-panel--about ${
            isOpen
              ? "animate-[panelBookLeftIn_560ms_cubic-bezier(0.2,0.9,0.2,1)_forwards]"
              : "animate-[panelBookLeftOut_420ms_cubic-bezier(0.4,0,0.2,1)_forwards]"
          } ${
            isAboutActive
              ? "md:-translate-y-2"
              : "md:translate-y-2 md:opacity-[0.92]"
          }`}
        >
          <div className="modal-glow modal-glow--left" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow-pill">
                  <Sparkles size={12} />
                  About Litty
                </p>
                <h3 className="modal-heading">The ecosystem in one frame.</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="soft-icon-button"
              >
                <X size={18} />
              </button>
            </div>

            <p className="modal-copy">
              Litty is the lifestyle wrapper around the whole system. It is where
              ambition, culture, product, service, and atmosphere all feel like
              they belong to the same rise.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="surface-tile">
                <p className="tile-label">What it does</p>
                <p className="tile-copy">
                  Turns multiple business lanes into one visible brand world.
                </p>
              </div>
              <div className="surface-tile">
                <p className="tile-label">How it feels</p>
                <p className="tile-copy">
                  Dark, focused, cinematic, and aspirational without losing the realness.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onSelectPanel("about")}
                className={`modal-switch ${isAboutActive ? "modal-switch--active" : ""}`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onSelectPanel("contact")}
                className={`modal-switch ${isContactActive ? "modal-switch--active" : ""}`}
              >
                Contact
              </button>
            </div>
          </div>
        </section>

        <section
          className={`modal-panel modal-panel--contact ${
            isOpen
              ? "animate-[panelBookRightIn_560ms_cubic-bezier(0.2,0.9,0.2,1)_forwards]"
              : "animate-[panelBookRightOut_420ms_cubic-bezier(0.4,0,0.2,1)_forwards]"
          } ${
            isContactActive
              ? "md:-translate-y-2"
              : "md:translate-y-2 md:opacity-[0.92]"
          }`}
        >
          <div className="modal-glow modal-glow--right" />
          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-6">
              <p className="eyebrow-pill">
                <Flame size={12} />
                Contact
              </p>
              <h3 className="modal-heading">Reach the brand directly.</h3>
            </div>

            <div className="grid gap-3">
              <a href={`mailto:${contactInfo.email}`} className="contact-line">
                <span className="contact-line__icon">
                  <Mail size={16} />
                </span>
                <span>
                  <span className="contact-line__label">Email</span>
                  <span className="contact-line__value">{contactInfo.email}</span>
                </span>
              </a>
              <a href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`} className="contact-line">
                <span className="contact-line__icon">
                  <Phone size={16} />
                </span>
                <span>
                  <span className="contact-line__label">Phone</span>
                  <span className="contact-line__value">{contactInfo.phone}</span>
                </span>
              </a>
              <div className="contact-line">
                <span className="contact-line__icon">
                  <MapPin size={16} />
                </span>
                <span>
                  <span className="contact-line__label">Base</span>
                  <span className="contact-line__value">{contactInfo.city}</span>
                </span>
              </div>
              <a href={contactInfo.instagram} target="_blank" rel="noreferrer" className="contact-line">
                <span className="contact-line__icon">
                  <Instagram size={16} />
                </span>
                <span>
                  <span className="contact-line__label">Instagram</span>
                  <span className="contact-line__value">@littyco</span>
                </span>
              </a>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/6 px-5 py-4 text-sm leading-7 text-stone-200/78">
              For pass one, contact stays direct and personal. The lead form and
              booking logic can layer in later without rebuilding this motion system.
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onSelectPanel("about")}
                className={`modal-switch ${isAboutActive ? "modal-switch--active" : ""}`}
              >
                About
              </button>
              <button
                type="button"
                onClick={() => onSelectPanel("contact")}
                className={`modal-switch ${isContactActive ? "modal-switch--active" : ""}`}
              >
                Contact
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
