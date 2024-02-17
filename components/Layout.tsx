import { ReactNode } from "react";
import NavigationBar from "./ui/molecules/navigation-bar/NavigationBar";

interface MyComponentProps {
  children: ReactNode;
}

const Layout = ({ children }: MyComponentProps) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Layout;
