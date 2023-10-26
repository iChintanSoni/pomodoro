import { useState } from 'react';
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Timer from './timer/Timer';
import './pomodoro.css';

type TimerType = {
    value: string;
    countdown: number;
}

const timerTypes = [
    {
        value: 'Pomodoro',
        countdown: 25 * 60 * 1000,
    },
    {
        value: 'Short Break',
        countdown: 5 * 60 * 1000,
    },
    {
        value: 'Long Break',
        countdown: 10 * 60 * 1000,
    }
];

export function Pomodoro() {

    const [selectedTimerType, setSelectedTimerType] = useState<TimerType>(timerTypes[0]);

    return (
        <div className='pomodoro-root'>
            <ButtonGroup variant="outlined" aria-label="Timer type button group" size='small'>
                {
                    timerTypes.map(type => (<Button variant={selectedTimerType.value === type.value ? 'contained' : 'outlined'} onClick={() => setSelectedTimerType(type)}>{type.value}</Button>))
                }
            </ButtonGroup>
            <Timer time={selectedTimerType.countdown} />
        </div>
    );
}