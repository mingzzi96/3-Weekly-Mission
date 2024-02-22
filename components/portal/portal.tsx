import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

type PortalProps = PropsWithChildren;

const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, document.getElementById("portal")!);
};

const PortalContainer = ({ children }: PortalProps) => {
  return <Portal>{children}</Portal>;
};

export default PortalContainer;
