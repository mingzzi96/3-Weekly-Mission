import { ReactNode } from "react";
import NavigationBar from "./ui/molecules/navigation-bar/NavigationBar";
import Footer from "./ui/molecules/footer/Footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isLoginPage =
    pathname && (pathname === "/signin" || pathname === "/signup");

  return (
    <>
      {isLoginPage ? null : (
        <header>
          <NavigationBar />
        </header>
      )}
      <main>{children}</main>
      {isLoginPage ? null : (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
