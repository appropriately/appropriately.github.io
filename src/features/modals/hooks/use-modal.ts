import { useContext } from "react";
import { ModalContext } from "../context/modal";

export const useModal = () => {
  const { open, content, options, openModal, closeModal } =
    useContext(ModalContext);

  return { open, content, options, openModal, closeModal };
};
