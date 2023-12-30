import "./index.css";
import useTimer from "../../hooks/useTimer";
import IconButton from "../../components/IconButton";
import CircularProgressBar from "../../components/CircularProgressBar";
import { useCallback } from "react";
import { showNotification } from "../../utils/notification.util";
import { TimerType } from "../Pomodoro";

interface TimerProps {
  type: TimerType;
}

const msToTime = (duration: number) => {
  let secondsInNumber = Math.floor((duration / 1000) % 60);
  let minutesInNumber = Math.floor((duration / (1000 * 60)) % 60);

  let minutes = minutesInNumber < 10 ? "0" + minutesInNumber : minutesInNumber;
  let seconds = secondsInNumber < 10 ? "0" + secondsInNumber : secondsInNumber;

  return minutes + "m " + seconds + "s";
};

function Timer({ type }: TimerProps) {
  const onFinish = useCallback(() => {
    showNotification(`Your ${type.label} has finished!`);
  }, [type.label]);
  const { count, state, start, pause, reset } = useTimer(
    type.duration,
    onFinish
  );

  return (
    <div className="Timer">
      <CircularProgressBar
        strokeWidth={4}
        radius={128}
        progress={(count / type.duration) * 100}
        text={msToTime(count)}
      />
      <div className="timer-actions">
        {(state === "Idle" || state === "Paused") && (
          <IconButton
            onClick={() => {
              start();
              showNotification(`Your ${type.label} has started!`);
            }}
            icon={"play_arrow"}
          ></IconButton>
        )}
        {state === "Started" && (
          <IconButton onClick={pause} icon={"pause"}></IconButton>
        )}
        {state === "Paused" && (
          <IconButton onClick={reset} icon={"device_reset"}></IconButton>
        )}
      </div>
    </div>
  );
}

export default Timer;
