import React from 'react'
import'./ChatMessage.css'
import { RxAvatar } from "react-icons/rx";

const ChatMessage = () => {
  return (
    <div className='message'>
      <RxAvatar/>
      <div className='messageInfo'>
        <h4>
            atsu Hironaka
            <span className='messageTimestamp'>2024/07/01</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  )
}

export default ChatMessage
