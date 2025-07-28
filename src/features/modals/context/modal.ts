import { createContext, ReactNode } from "react";

export interface ModalOptions {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface ModalContextType {
  open: boolean;
  content: ReactNode | null;
  options: ModalOptions | null;
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  open: false,
  content: null,
  options: null,
  openModal: () => {},
  closeModal: () => {},
});
