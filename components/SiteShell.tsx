"use client";

import { PropsWithChildren, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContactModal from "@/components/AboutContactModal";
import CursorAura from "@/components/CursorAura";

type ModalPanel = "about" | "contact";

export default function SiteShell({ children }: PropsWithChildren) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<ModalPanel>("about");

  const openModal = (panel: ModalPanel) => {
    setActivePanel(panel);
    setIsModalOpen(true);
  };

  return (
    <>
      <CursorAura />
      <Navbar onOpenModal={openModal} />
      <main>{children}</main>
      <Footer onOpenModal={openModal} />
      <AboutContactModal
        isOpen={isModalOpen}
        activePanel={activePanel}
        onClose={() => setIsModalOpen(false)}
        onSelectPanel={setActivePanel}
      />
    </>
  );
}
