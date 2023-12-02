import "./index.css";
import Text from "./../../components/Text";
import Icon from "./../../components/Icon";
import { Check } from "../../components/Icons";
import { Theme } from "../../theme.context";

interface SurroundingItemProp {
  selected: boolean;
  theme: Theme;
  onSelected: (theme: Theme) => void;
}

function SurroundingItem(props: SurroundingItemProp) {
  return (
    <button
      onClick={() => props.onSelected(props.theme)}
      className="surrounding-theme-button"
    >
      {props.selected && <Icon>{Check}</Icon>}
      <Text variant="button">{props.theme.label}</Text>
    </button>
  );
}

export default SurroundingItem;
