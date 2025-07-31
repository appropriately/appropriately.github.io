import { createContext } from "react";
import { ModalContextType } from "../types/modal";

export const ModalContext = createContext<ModalContextType>({
  open: false,
  content: null,
  options: null,
  openModal: () => {},
  closeModal: () => {},
});
