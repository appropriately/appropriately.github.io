import { ReactNode } from "react";

export interface ModalOptions {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnBackdropClick?: boolean;
}

export interface ModalContextType {
  open: boolean;
  content: ReactNode | null;
  options: ModalOptions | null;
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
}
