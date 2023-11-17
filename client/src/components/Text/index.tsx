import React, { FC } from "react";
import "./index.css";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "sub-title-1"
  | "sub-title-2"
  | "body-1"
  | "body-2"
  | "button"
  | "caption"
  | "overline";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant: Variant;
}

const Index: FC<TextProps> = (props) => {
  return (
    <span className={props.variant} {...props}>
      {props.children}
    </span>
  );
};

export default Index;
