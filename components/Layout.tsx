import { ReactNode } from "react";
import NavigationBar from "./navigation-bar/NavigationBar";

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
