import React, { ReactNode, memo, useRef } from "react";
import "./index.css";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode | undefined;
}

function SideNav(props: SideNavProps) {
  const sideNavRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className="elevatedContainer"
      onClick={props.onClose}
      style={{ visibility: props.open ? "visible" : "hidden" }}
    >
      <div
        className="SideNav"
        onClick={(e) => e.stopPropagation()}
        ref={sideNavRef}
        style={{ width: props.open ? "100vw" : "0" }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default memo(SideNav);
