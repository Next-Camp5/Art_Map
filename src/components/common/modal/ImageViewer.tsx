'use client';

import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { createPortal } from 'react-dom';

import XIcon from '@/components/Icon/XIcon';

interface ImageViewerProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ImageViewer = ({ children, onClose }: ImageViewerProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    onClose();
  };

  useGSAP(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0.4, scale: 1 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  return createPortal(
    <div
      ref={modalRef}
      className="bg-black fixed pointer-events-none z-[60] inset-0 max-w-[375px] mx-auto h-full flex justify-center items-center"
    >
      {children}
      <button
        className="absolute top-20 right-0 text-white pointer-events-auto"
        onClick={handleClose}
      >
        <XIcon stroke="white" />
      </button>
    </div>,
    document.body
  );
};

export default ImageViewer;
