import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect, useState } from 'react';
import { Task, add, newTask, update } from '../tasks.slice';
import './add-edit.css';

interface Props {
    task: Task | null;
    onClose: () => void;
}

export function AddEdit(props: Props) {

    const { tasks } = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const [task, setTask] = useState<Task>(props.task ?? newTask());

    useEffect(() => {
        if (props.task) {
            setTask(tasks.find((task) => task.id === props.task!!.id) ?? newTask());
        }
    }, [props.task, tasks]);

    const save = () => {
        if (task.id) {
            dispatch(update(task))
        } else {
            dispatch(add(task))
        }
        cancel();
    }

    const cancel = () => {
        setTask(newTask());
        props.onClose();
    }

    return (
        <Dialog
            open={props.task !== null}
            onClose={props.onClose}
            scroll={'paper'}
            fullWidth={true}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">Add Task</DialogTitle>
            <DialogContent dividers={true}>
                <div className='content'>
                    <TextField
                        autoFocus
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        placeholder='Title...'
                        label='Enter title'
                        type="text"
                        fullWidth
                        variant="filled"
                        color='primary'
                    />
                    <div className='act-exp-pomos'>
                        {task.id && <TextField
                            placeholder='Actual Pomos'
                            label='Actual Pomos'
                            type="number"
                            inputProps={{ min: 0 }}
                            fullWidth
                            value={task.actualPomodoros}
                            onChange={(e) => setTask({ ...task, actualPomodoros: e.target.value ? parseInt(e.target.value) : 0 })}
                            variant="filled"
                            color='primary'
                        />}
                        <TextField
                            placeholder='Estimated Pomos'
                            label='Estimated Pomos'
                            type="number"
                            inputProps={{ min: 0 }}
                            fullWidth
                            value={task.estimatedPomodoros}
                            onChange={(e) => setTask({ ...task, estimatedPomodoros: e.target.value ? parseInt(e.target.value) : 0 })}
                            variant="filled"
                            color='primary'
                        />
                    </div>
                    <TextField
                        placeholder='Enter notes...'
                        label='Notes'
                        type="text"
                        multiline
                        rows={4}
                        value={task.notes}
                        onChange={(e) => setTask({ ...task, notes: e.target.value })}
                        fullWidth
                        variant="filled"
                        color='primary'
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={cancel}>Cancel</Button>
                <Button onClick={save}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}