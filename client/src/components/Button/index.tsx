import "./index.css";
import mergeClassNames from "../util/class.util";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

function Button(props: ButtonProps) {
  return (
    <button {...props} className={mergeClassNames("Button", props.className)}>
      {props.children}
    </button>
  );
}

export default Button;
