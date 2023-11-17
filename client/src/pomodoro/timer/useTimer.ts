import { useState, useEffect } from "react";

const useCounter = (input: number) => {
  const [count, setCount] = useState<number>(input);

  const decrement = () => {
    setCount((old) => {
      return old - 1000;
    });
  };

  const reset = () => {
    setCount(input);
  };

  return { count, decrement, reset };
};

type Action = "Start" | "Pause" | "Reset";
type State = "Started" | "Paused" | "Idle";

const useTimer = (inputTime: number) => {
  const {
    count,
    decrement: decrementCounter,
    reset: resetCounter,
  } = useCounter(inputTime);

  useEffect(() => {
    reset();
    resetCounter();
    // eslint-disable-next-line
  }, [inputTime]);

  const [action, setAction] = useState<Action>("Reset");
  const [state, setState] = useState<State>("Idle");
  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    switch (action) {
      case "Start":
        timeout = setTimeout(() => {
          if (count > 0) {
            decrementCounter();
          } else {
            setAction("Reset");
          }
        }, 1000);
        setState("Started");
        break;
      case "Pause":
        if (timeout) clearTimeout(timeout);
        setState("Paused");
        break;
      case "Reset":
        if (timeout) clearTimeout(timeout);
        resetCounter();
        setState("Idle");
        break;
      default:
        break;
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [action, count, decrementCounter]);

  const start = () => {
    setAction("Start");
  };

  const pause = () => {
    setAction("Pause");
  };

  const reset = () => {
    setAction("Reset");
  };

  return {
    count,
    state,
    start,
    pause,
    reset,
  };
};

export default useTimer;
