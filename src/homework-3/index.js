import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {MessageInput} from "./components/MessageInput";
import {MessageList} from "./components/MessageList";

export const Homework = () => {
  const [messageList, setMessageList] = useState([]);

  const sendMessage = (author, text) => {
    const newMessageList = [...messageList];
    const newMessage = {
      author,
      text,
    }
    newMessageList.push(newMessage);
    setMessageList(newMessageList);
  }

  const onSendMessage = (value) => {
    sendMessage('user', value);
  }

  useEffect(() => {
    if (messageList.lenght === 0) {
      return;
    }

    const tail = messageList[messageList.lenght - 1];
    if (tail?.author === "bot") {
      return;
    }

    // sendMessage("bot", "hello");
  }, [ messageList ]);
      
  return (
    <div>
      <MessageInput onSend={onSendMessage} />
      <MessageList messageList={messageList} />
    </div>
  );
};


ReactDOM.render(<Homework />, document.getElementById('root'))
