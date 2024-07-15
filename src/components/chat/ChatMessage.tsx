import React from 'react'
import'./ChatMessage.css'
import { RxAvatar } from "react-icons/rx";
import { Timestamp } from 'firebase/firestore';

type Props = {
  timestamp:Timestamp;
  message:string;
  user:{
    uid:string;
    photo:string;
    email:string;
    displayName:string;
  };
};

const ChatMessage = (props : Props) => {

  const {message,timestamp,user} = props;
  
  return (
    <div className='message'>
      <img src={user?.photo}/>
      <div className='messageInfo'>
        <h4>
            {user?.displayName}
            <span className='messageTimestamp'>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ChatMessage
