import { MouseEvent, PropsWithChildren, useEffect } from "react";
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
  const [openModalName, setOpenModalName] = useState<string | number | null>(
    null
  );

  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setPrevScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setPrevScrollPosition(window.scrollY);

    window.addEventListener("scroll", handleScroll);
  }, []);

  const openModal = (modalName: string | number) => {
    setCurrentScrollPosition(prevScrollPosition);
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${prevScrollPosition}px`;
    document.body.style.overflowY = "scroll";
    setOpenModalName(modalName);
  };

  const closeModal = () => {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.style.overflowY = "";
    window.scrollTo(0, currentScrollPosition);
    setOpenModalName(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openModalName }}>
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
