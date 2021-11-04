import { ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import propTypes from "prop-types";

export const Chat = ({ name, id }) => {
    return (
        <ListItem component ={Link} to={`/chats/${id}`}>
          <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string
};