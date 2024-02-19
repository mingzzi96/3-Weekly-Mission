import { ReactNode } from "react";
import NavigationBar from "./ui/molecules/navigation-bar/NavigationBar";
import Footer from "./ui/molecules/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
