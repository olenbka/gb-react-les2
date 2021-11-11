import React from "react";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { MessageInput } from "../../components/MessageInput";
import { MessageList } from "../../components/MessageList";
import { getChatMessagesById } from "../../store/messages/selectors";
import { createMessage } from "../../store/messages/actions";
import { hasChatById } from "../../store/chats/selectors";

export const Messages = () => {
    const { chatId } = useParams();
    const dispatch = useDispatch();

    console.log('getChatMessagesById(chatId)', getChatMessagesById(chatId), useSelector(getChatMessagesById(chatId)))

    const messageList = useSelector((state) => {
        console.log('state', state)
        return getChatMessagesById(chatId)(state)
    });
    const hasChat = useSelector(hasChatById(chatId));

    const sendMessage = useCallback((author, text) => {
        const newMessage = {
            author,
            text
        };
        dispatch(createMessage(newMessage, chatId))
    }, [dispatch, chatId]);

    const onSendMessage = (value) => {
        sendMessage("user", value);
    };

    useEffect(() => {
        if (!messageList || messageList.length === 0) {
            return
        }

        // const tail = messageList[messageList.lenght - 1];
        // if (tail.author==="bot") {
        //     return;
        // }

        // sendMessage("bot", "hello");
    }, [sendMessage, messageList]);

    if (!hasChat) {
        return <Redirect to ="/chats" />;
    }

    console.log('messageList', messageList)

    return (
        <>
            <MessageList messageList={messageList} />
            <MessageInput onSend={onSendMessage} />
        </>
    );
};
