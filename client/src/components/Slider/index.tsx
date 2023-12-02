import "./index.css";
import mergeClassNames from "../util/class.util";

interface SliderProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

function Slider(props: SliderProps) {
  return (
    <input
      {...props}
      type="range"
      className={mergeClassNames("slider", props.className)}
    ></input>
  );
}

export default Slider;
