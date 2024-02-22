import { PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = PropsWithChildren;

const Portal = ({ children }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return ReactDOM.createPortal(children, document.getElementById("portal")!);
};

const PortalContainer = ({ children }: PortalProps) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;
