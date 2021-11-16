import { useDispatch, useSelector  } from "react-redux";
import { useCallback } from "react";
import { createChat } from "../helpers";
import { getChatList } from "../store/chats/selectors";
import { addChat, removeChat } from "../store/chats/actions";
import { removeMessagesByChatId} from "../store/messages/actions";

export const withChats = (Component) => {
    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();

        const onCreateChat = useCallback(() => {
            console.log(addChat(createChat('chat name')))
            dispatch(addChat(createChat('chat name')))
        }, [dispatch]);

        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessagesByChatId(chatId))
        }, [dispatch]);

        return <Component
            {...props}
            chats={chats}
            onCreateChat={onCreateChat}
            onDeleteChat={onDeleteChat}
        />
    }
}



