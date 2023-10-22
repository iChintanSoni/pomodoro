import { useAppSelector, useAppDispatch } from "../../hooks";
import { default as MuiList } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task, remove, toggleComplete } from "../tasks.slice";
import Divider from "@mui/material/Divider";

interface Props {
    openTask: (task: Task) => void
}

export function List(props: Props) {
    const { tasks } = useAppSelector((state) => state.tasks);
    return (
        <MuiList sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                tasks.length
                    ? tasks.map((value) => (<MuiListItem task={value} openTask={props.openTask} key={value.id} />))
                    : <ListItemText primary={'No tasks'} />
            }
        </MuiList>
    );
}

function MuiListItem({ task, openTask }: {
    task: Task,
    openTask: (task: Task) => void
}) {
    const dispatch = useAppDispatch();
    const labelId = `checkbox-list-label-${task.id}`;
    return (
        <>
            <ListItem
                key={task.id}
                secondaryAction={
                    <IconButton edge="end" aria-label="remove task" onClick={() => dispatch(remove(task.id))}>
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton onClick={() => openTask(task)}>
                    <ListItemIcon onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                            checked={task.completed}
                            onChange={() => dispatch(toggleComplete(task.id))}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={task.title} secondary={`Pomos: ${task.actualPomodoros}/${task.estimatedPomodoros}`} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
}