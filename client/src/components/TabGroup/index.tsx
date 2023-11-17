import "./index.css";

import React, { ReactElement } from "react";
import { TabProps } from "./Tab";

interface TabGroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  value: number;
  handleChange: (index: number) => void;
}

const index: React.FC<TabGroupProps> = (props) => {
  return (
    <div className="TabGroup" {...props}>
      {React.Children.map(props.children, (child, index) => {
        const childElement = child as ReactElement<TabProps>;
        const childElementProps = childElement.props;
        return React.cloneElement<TabProps>(childElement, {
          ...childElementProps,
          isActive: props.value === index,
          onClick: () => {
            props.handleChange(index);
          },
        });
      })}
    </div>
  );
};

export default index;
