import { Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ChatList } from "../../components/ChatList";
import { Messages } from "../Messages";
import { withChats } from "../../hocs/withChats";

const useStyles = makeStyles ({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
});

export const ChatsRender = ({
    chats,
    onCreateChat,
    onDeleteChat
}) => {
    const classes = useStyles() ;
    
    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDeleteChat} list={chats}/>
                <Button onClick ={onCreateChat}>Create chat</Button>
            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId" />
                </Switch>
            </div>
        </div>
    );
};

export const Chats = withChats(ChatsRender);
