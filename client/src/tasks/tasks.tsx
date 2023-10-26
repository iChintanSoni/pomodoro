import Stack from '@mui/material/Stack';
import "./tasks.css";
import { Header } from './header/Header';
import { List } from './list/list';
import { AddEdit } from './add-edit/AddEdit';
import { useState } from 'react';
import { Task } from './tasks.slice';

export function Tasks() {

    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    const handleClose = () => {
        setSelectedTask(null);
    }

    const openTask = (task: Task) => {
        setSelectedTask(task);
    }

    return (
        <div className='tasks-root'>
            <Stack>
                <Header openTask={openTask} />
                <List openTask={openTask} />
                <AddEdit task={selectedTask} onClose={handleClose} />
            </Stack>
        </div>);
}
