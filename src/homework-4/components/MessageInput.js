import { useEffect, useState, useRef } from "react";
import propTypes from "prop-types";
import { Paper, IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"; 
import { Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
    },
    input: {
        flexGrow: 1,
    }
}))

export const MessageInput = (props) => {
    const classes = useStyles();
    const [value, setValue] = useState("");

    const inputRef = useRef(null);

    const resetForm = () => {
        setValue("");
    };

    const onSubmitMessage = (event) => {
        event.preventDefault();
        props.onSend(value);
        resetForm();
    };

    const onChangeMessageInput = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if(inputRef.current) { inputRef.current?.focus(); }
    });

    return (
        <Paper
          className={classes.paper}
          component="form"
          onSubmit={onSubmitMessage}
        >
          <InputBase
            inputRef={(ref) => ref && ref.focus()}
            className={classes.input}
            onChange={onChangeMessageInput}
            placeholder={props.placeholder}
            value={value}
            type="text"
          />
          <IconButton type="submit">
            <Send />
          </IconButton>
        </Paper>
    );
};

MessageInput.propTypes = {
    onSend: propTypes.func,
    placeholder: propTypes.string
};

MessageInput.defaultTypes = {
    placeholder: "type message"
};
