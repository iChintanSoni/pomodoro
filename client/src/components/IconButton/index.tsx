import "./index.css";

import React from "react";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: string;
}

const index: React.FC<IconButtonProps> = (props) => {
  return (
    <button className="IconButton" {...props}>
      <span className="material-symbols-outlined">{props.icon}</span>
    </button>
  );
};

export default index;
