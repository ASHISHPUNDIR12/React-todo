import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


export default function Todoitem({ todo, removeTodo, toggleTodo }) {
    {
        const labelId = `checkbox-list-label-${todo.list}`;

        return (
            <ListItem
                key={todo.id}
                secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                        <CommentIcon onClick={removeTodo} />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>
                    <ListItemIcon  >
                        <Checkbox
                            onChange={toggleTodo}
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                    </ListItemIcon >
                    <ListItemText id={labelId} primary={todo.text} />
                </ListItemButton>
            </ListItem>
        );
    }

}