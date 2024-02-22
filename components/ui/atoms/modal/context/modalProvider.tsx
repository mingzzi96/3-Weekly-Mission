import { MouseEvent, PropsWithChildren, useRef } from "react";
import React, { createContext, useContext, useState } from "react";

type ModalProviderProps = PropsWithChildren;

interface ModalContextProps {
  isScroll?: boolean;
  openModal: (modalName: string | number) => void;
  closeModal: (e: MouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  openModalName: string | number | null;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isScroll, setIsScroll] = useState<boolean>(true);
  const [openModalName, setOpenModalName] = useState<string | number | null>(
    null
  );

  const openModal = (modalName: string | number) => {
    setOpenModalName(modalName);
    setIsScroll(false);
  };

  const closeModal = () => {
    setOpenModalName(null);
    setIsScroll(true);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, openModalName, isScroll }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
