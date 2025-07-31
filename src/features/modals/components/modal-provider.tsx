import { ReactNode, useState } from "react";
import { ModalContext } from "../context/modal";
import { ModalOptions } from "../types/modal";
import { Modal } from "./modal";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);
  const [options, setOptions] = useState<ModalOptions | null>(null);

  const openModal = (modalContent: ReactNode, options?: ModalOptions) => {
    setContent(modalContent);
    setOpen(true);
    setOptions(options ?? null);
  };

  const closeModal = () => {
    setOpen(false);
    setContent(null);
    setOptions(null);
  };

  return (
    <ModalContext.Provider
      value={{ open, content, options, openModal, closeModal }}
    >
      {children}
      <Modal />
    </ModalContext.Provider>
  );
}
