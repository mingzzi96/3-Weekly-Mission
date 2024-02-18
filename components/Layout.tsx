import { ReactNode } from "react";
import NavigationBar from "./ui/molecules/navigation-bar/NavigationBar";
import Footer from "./ui/molecules/footer/Footer";

interface MyComponentProps {
  children: ReactNode;
}

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
