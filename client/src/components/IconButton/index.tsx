import "./index.css";

interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: string;
}

function IconButton(props: IconButtonProps) {
  return (
    <button {...props} className="IconButton">
      <span className="material-symbols-outlined">{props.icon}</span>
    </button>
  );
}

export default IconButton;
