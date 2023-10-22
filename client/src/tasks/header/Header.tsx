import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddIcon from "@mui/icons-material/AddCircle";
import './header.css';
import Divider from "@mui/material/Divider";
import { Task, newTask } from '../tasks.slice';

interface Props {
    openTask: (task: Task) => void
}

export function Header(props: Props) {

    return (
        <div className='header-root'>
            <div className='header-content'>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color='primary'>
                    Tasks
                </Typography>
                <IconButton aria-label="Add tasks" onClick={() => props.openTask(newTask())} color='primary'>
                    <AddIcon />
                </IconButton>
            </div>
            <Divider />
        </div>
    );
}