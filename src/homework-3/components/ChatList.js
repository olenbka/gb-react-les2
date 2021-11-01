import { List } from '@material-ui/core';
import propTypes from "prop-types";
import { Chat } from "./Chat";

export const ChatList = ({ list }) => {
    return (
        <List>
        {list.map((item) => (
            <Chat key={item.id} {...item} />
        ))}
        </List>
    );
};

ChatList.propTypes = {
    list: propTypes.arrayOf(
        propTypes.chape({
            id: propTypes.string.isRequired,
            name: propTypes.string
        })
    )
};
