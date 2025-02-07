import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
    const [text, setText] = useState("")
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    const handlesubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("")
    }
    return (
        <ListItem>
            <form onSubmit={handlesubmit}  >
                <TextField
                    onChange={handleChange}
                    label="Add todo"
                    color="secondary"
                    focused
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="create todo" edge="end" type="submit" >
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
        </ListItem >

    )

}

