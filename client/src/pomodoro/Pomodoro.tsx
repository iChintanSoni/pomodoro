import { useState } from "react";
import Timer from "./timer";
import "./pomodoro.css";
import TabGroup from "../components/TabGroup";
import Tab from "./../components/TabGroup/Tab";
import Task from "./task";

type TimerType = {
  value: string;
  countdown: number;
};

const timerTypes: TimerType[] = [
  {
    value: "pomodoro",
    countdown: 25 * 60 * 1000,
  },
  {
    value: "mini break",
    countdown: 5 * 60 * 1000,
  },
  {
    value: "long break",
    countdown: 10 * 60 * 1000,
  },
];

export function Pomodoro() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="pomodoro-root">
      <TabGroup value={selected} handleChange={(index) => setSelected(index)}>
        {timerTypes.map((type) => (
          <Tab label={type.value}></Tab>
        ))}
      </TabGroup>
      <Timer duration={timerTypes[selected].countdown} />
      <Task />
    </div>
  );
}
