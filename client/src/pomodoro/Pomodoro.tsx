import { memo, useState } from "react";
import Timer from "./timer";
import "./pomodoro.css";
import TabGroup from "../components/TabGroup";
import Tab from "./../components/TabGroup/Tab";
import Task from "./task";

export type TimerType = {
  label: string;
  duration: number;
};

const timerTypes: TimerType[] = [
  {
    label: "pomodoro",
    duration: 25 * 60 * 1000,
  },
  {
    label: "mini break",
    duration: 5 * 60 * 1000,
  },
  {
    label: "long break",
    duration: 10 * 60 * 1000,
  },
];

function Pomodoro() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pomodoro-root">
      <TabGroup value={selected} handleChange={(index) => setSelected(index)}>
        {timerTypes.map((type) => (
          <Tab label={type.label} key={type.label} />
        ))}
      </TabGroup>
      <Timer type={timerTypes[selected]} />
      <Task />
    </div>
  );
}

export default memo(Pomodoro);
