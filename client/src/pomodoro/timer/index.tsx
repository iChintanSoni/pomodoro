import "./index.css";
import useTimer from "../../hooks/useTimer";
import IconButton from "../../components/IconButton";
import CircularProgressBar from "../../components/CircularProgressBar";

interface TimerProps {
  duration: number;
}

const msToTime = (duration: number) => {
  let secondsInNumber = Math.floor((duration / 1000) % 60);
  let minutesInNumber = Math.floor((duration / (1000 * 60)) % 60);

  let minutes = minutesInNumber < 10 ? "0" + minutesInNumber : minutesInNumber;
  let seconds = secondsInNumber < 10 ? "0" + secondsInNumber : secondsInNumber;

  return minutes + "m " + seconds + "s";
};

function Timer(props: TimerProps) {
  const { count, state, start, pause, reset } = useTimer(props.duration);

  return (
    <div className="Timer" {...props}>
      <CircularProgressBar
        strokeWidth={4}
        radius={128}
        progress={(count / props.duration) * 100}
        text={msToTime(count)}
      />
      <div className="timer-actions">
        {(state === "Idle" || state === "Paused") && (
          <IconButton onClick={start} icon={"play_arrow"}></IconButton>
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
