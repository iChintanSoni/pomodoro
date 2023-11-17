import "./index.css";
import Text from "./../../Text";

import React from "react";

export interface TabProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isActive?: boolean;
  label: string;
}

const index: React.FC<TabProps> = (props) => {
  return (
    <div {...props} className={`Tab ${props.isActive ? "active" : ""}`}>
      <Text variant="h6">{props.label}</Text>
    </div>
  );
};

export default index;
