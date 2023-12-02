import "./index.css";
import mergeClassNames from "../util/class.util";

interface IconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {}

function Icon(props: IconProps) {
  return (
    <span
      {...props}
      className={mergeClassNames(
        ["material-symbols-outlined", "Icon"],
        props.className
      )}
    >
      {props.children}
    </span>
  );
}

export default Icon;
