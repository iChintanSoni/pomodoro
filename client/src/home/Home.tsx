import { Pomodoro } from "../pomodoro/Pomodoro";
import { Tasks } from "../tasks/tasks";
import "./home.css";

export function Home() {
    return (
        <div className="home-root">
            <Pomodoro />
            <Tasks />
        </div>
    );
}