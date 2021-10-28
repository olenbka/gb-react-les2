import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export const Homework = () => {
  const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const onChangeMessageInput = (event) =>{
        setValue(event.target.value);
    };
     
    const sendMessage = (author, text) => {
      const newMessageList = [...messageList];
      const newMessage = {
        author,
        text,
      }
      newMessageList.push(newMessage);
      setMessageList(newMessageList);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      sendMessage('user', value);

      setValue('');
    }

  return (
    <div>
      <h1>Homework</h1>
      <ul>
        {messageList.map((item) => (
          <li>
            {item.author}- {item.text}
          </li>
        ))}
      </ul> 
      
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChangeMessageInput} type="text" />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Homework />
  </React.StrictMode>,
  document.getElementById('root')
);
