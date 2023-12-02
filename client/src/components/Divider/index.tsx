import "./index.css";

interface DividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {}

function Divider(props: DividerProps) {
  return <hr className="Divider" {...props} />;
}

export default Divider;
