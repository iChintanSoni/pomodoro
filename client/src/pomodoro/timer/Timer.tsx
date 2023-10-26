import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import PlayIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/PauseCircle';
import ResetIcon from '@mui/icons-material/RestartAlt';
import ReactTextTransition from 'react-text-transition';
import "./timer.css";

const msToTime = (duration: number) => {
    let secondsInNumber = Math.floor((duration / 1000) % 60);
    let minutesInNumber = Math.floor((duration / (1000 * 60)) % 60);

    let minutes = (minutesInNumber < 10) ? "0" + minutesInNumber : minutesInNumber;
    let seconds = (secondsInNumber < 10) ? "0" + secondsInNumber : secondsInNumber;

    return minutes + ":" + seconds;
}

interface Props {
    time: number;
}

type Status = 'idle' | 'started' | 'paused';

export default function Timer(props: Props) {
    const [time, setTime] = useState(props.time);
    const [status, setStatus] = useState<Status>('idle');

    useEffect(() => {
        setTime(props.time);
        setStatus('idle');
    }, [props.time]);

    useEffect(() => {
        if (status === 'started') {
            let myInterval = setInterval(() => {
                if (time > 0) {
                    setTime(time - 1000)
                } if (time === 0) {
                    setStatus('idle');
                    setTime(props.time);
                    clearInterval(myInterval);
                }
            }, 1000)
            return () => {
                clearInterval(myInterval);
            }
        }
    });

    return (
        <div className='timer-root'>

            {/* <Typography variant="h1" color="primary">
                {msToTime(time)}
            </Typography> */}

            <section>
                {`${msToTime(time)}`.split("").map((txt, i) => (
                    <ReactTextTransition
                        key={i}
                        direction="down"
                        className="timer"
                        inline
                    >
                        {txt}
                    </ReactTextTransition>
                ))}
            </section>

            <div className='timer-actions'>
                {
                    status === 'idle' || status === 'paused' ? <Button variant="outlined" startIcon={<PlayIcon />} onClick={() => setStatus('started')}>
                        {status === 'paused' ? <>Resume</> : <>Start</>}
                    </Button> : <></>
                }
                {
                    status === 'started' ?
                        <Button variant="outlined" startIcon={<PauseIcon />} onClick={() => setStatus('paused')}>
                            Pause
                        </Button> : <></>
                }
                {
                    status === 'paused' ?
                        <Button variant="outlined" startIcon={<ResetIcon />} onClick={() => {
                            setTime(props.time);
                            setStatus('idle')
                        }}>
                            Reset
                        </Button> : <></>
                }
            </div>
        </div>
    );
}
