import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { USER_AUTHOR } from "../constants/authors";
import { hasChatById } from "../store/chats/selectors";
import { sendMessageWithThunk } from "../store/messages/actions";
import { getChatMessagesById } from "../store/messages/selectors";


export const withChatMessages = (Component) => {
    return (props) => {
        const {chatId} = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesById(chatId));
        const hasChat = useSelector(hasChatById(chatId));

        const onSendMessage = (value) => {
            dispatch(sendMessageWithThunk(USER_AUTHOR, value, chatId))
        };

        return <Component
            {...props}
            messageList={messageList}
            hasChat={hasChat}
            onSendMessage={onSendMessage}
        />
    }
}
