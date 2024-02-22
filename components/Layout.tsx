import { ReactNode } from "react";
import NavigationBar from "./ui/molecules/navigation-bar/NavigationBar";
import Footer from "./ui/molecules/footer/Footer";
import { useModal } from "./ui/atoms/modal/context/modalProvider";
import global from "@/styles/global.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isScroll } = useModal();
  return (
    <>
      <div className={isScroll ? undefined : global.stopScroll}>
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
