import { Pomodoro } from "../pomodoro/Pomodoro";
import "./home.css";

export function Home() {
    return (
        <div className="home-root">
            <Pomodoro />
        </div>
    );
}