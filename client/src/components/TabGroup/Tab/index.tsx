import "./index.css";
import mergeClassNames from "../../util/class.util";

export interface TabProps {
  isActive?: boolean;
  label: string;
  onClick?: () => void;
}

function Tab(props: TabProps) {
  const classNames = ["Tab"];
  if (props.isActive) {
    classNames.push("active");
  }
  return (
    <div className={mergeClassNames(classNames)} onClick={props.onClick}>
      <span>{props.label}</span>
    </div>
  );
}

export default Tab;
