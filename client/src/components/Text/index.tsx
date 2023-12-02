import "./index.css";
import mergeClassNames from "../util/class.util";

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

function Text(props: TextProps) {
  return (
    <span
      {...props}
      className={mergeClassNames(props.variant, props.className)}
    >
      {props.children}
    </span>
  );
}

export default Text;
