import { FC } from "react";
import "./index.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  selected?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className="Button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
