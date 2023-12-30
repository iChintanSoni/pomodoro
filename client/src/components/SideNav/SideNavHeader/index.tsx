import React, { ReactNode } from "react";
import "./index.css";

interface SideNavHeaderProps {
  children?: ReactNode | undefined;
}

function SideNavHeader(props: SideNavHeaderProps) {
  return <div className="SideNavHeader">{props.children}</div>;
}

export default SideNavHeader;
