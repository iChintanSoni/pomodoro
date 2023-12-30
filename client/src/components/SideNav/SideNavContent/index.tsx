import React, { ReactNode } from "react";
import "./index.css";

interface SideNavContentProps {
  children?: ReactNode | undefined;
}

function SideNavContent(props: SideNavContentProps) {
  return <div className="SideNavContent">{props.children}</div>;
}

export default SideNavContent;
