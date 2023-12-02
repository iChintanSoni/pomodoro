import "./index.css";
import Text from "./../../Text";
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
      <Text variant="h6">{props.label}</Text>
    </div>
  );
}

export default Tab;
