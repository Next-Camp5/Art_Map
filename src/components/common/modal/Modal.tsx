"use client";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
  className?: string;
  isClosing: boolean;
  onClose: () => void;
}

const Modal = ({ children, className = "", onClose, isClosing }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <div className={`${className} mx-auto max-w-sm`}>
      {!isClosing && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 cursor-pointer"
          onClick={handleClose}
        ></div>
      )}
      <div
        className={` ${isClosing ? "pointer-events-none" : ""} relative z-50`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
