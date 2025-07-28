import Icon from "@/components/icon";
import { motion } from "motion/react";
import { useContext, useState } from "react";
import { ModalContext } from "../context/modal";

export function Modal() {
  const { open, content, options, closeModal } = useContext(ModalContext);
  const [isPulsing, setIsPulsing] = useState(false);

  if (!open || !content) return null;

  const handleBackdropClick = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 600);
  };

  const sizeClass = () => {
    switch (options?.size ?? "md") {
      case "sm":
        return "w-full sm:w-full sm:max-w-[300px]";
      case "md":
        return "w-full sm:w-full sm:max-w-[500px]";
      case "lg":
        return "w-full sm:w-full sm:max-w-[700px]";
      case "xl":
        return "w-full sm:w-full sm:max-w-[1200px]";
      case "full":
        return "w-full sm:w-full sm:max-w-full";
    }
  };

  return (
    <motion.dialog
      open={open}
      className="fixed inset-0 w-full h-full max-h-screen z-50 overflow-auto bg-black/25 flex p-3"
      onClick={handleBackdropClick}
    >
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: isPulsing ? [1, 1.5, 1] : 1,
        }}
        transition={{
          duration: 0.2,
          scale: isPulsing ? { duration: 0.3, ease: "easeInOut" } : undefined,
        }}
        className="absolute top-4 right-3 text-orange-300 hover:text-orange-500 hover:scale-110 transition-all duration-200 cursor-pointer"
        onClick={closeModal}
      >
        <Icon icon="x-lg" width={30} height={30} />
      </motion.button>

      <motion.div
        className={`relative rounded-sm bg-zinc-900 shadow-lg ${sizeClass()} m-auto text-white min-h-[100px]`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </motion.div>
    </motion.dialog>
  );
}
