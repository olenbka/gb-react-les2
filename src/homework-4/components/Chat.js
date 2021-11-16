import { ListItem, ListItemText } from '@material-ui/core';
import { ListItemSecondaryAction }  from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import propTypes from "prop-types";

export const Chat = ({ name, id, onClick }) => {
    return (
        <ListItem component={Link} to={`/chats/${id}`}>
          <ListItemText>{name}</ListItemText>

          <ListItemSecondaryAction>
              <IconButton onClick={onClick} edge="end" aria-label="delete">
                  <DeleteIcon/>
              </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
    );
};

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    onClick: propTypes.func
};
