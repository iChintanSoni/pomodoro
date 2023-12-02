import "./index.css";

import React, { ReactElement, ReactNode } from "react";
import { TabProps } from "./Tab";

interface TabGroupProps {
  value: number;
  handleChange: (index: number) => void;
  children?: ReactNode | undefined;
}

function TabGroup(props: TabGroupProps) {
  return (
    <div className="TabGroup">
      {props.children &&
        React.Children.map(props.children, (child, index) => {
          const childElement = child as ReactElement<TabProps>;
          const childClick = () => {
            props.handleChange(index);
          };
          return React.cloneElement<TabProps>(childElement, {
            isActive: props.value === index,
            onClick: childClick,
          });
        })}
    </div>
  );
}

export default TabGroup;
