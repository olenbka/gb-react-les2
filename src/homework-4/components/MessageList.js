import { Message } from "./Message"

export const MessageList = ({messageList}) => {
    return <ul>{
        messageList.map((message, idx) => <li key={idx}>
            <Message {...message} />
        </li>)
    }</ul>
}
