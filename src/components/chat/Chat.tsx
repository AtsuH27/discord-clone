import React from 'react'
import './Chat.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import ChatHeader from './ChatHeader';
import { IoMdGift } from "react-icons/io";
import { MdOutlineGif } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import ChatMessage from './ChatMessage';

const Chat = () => {
  return (
    <div className='chat'>
    {/*chatHeader*/}
    <ChatHeader/>
    {/*chatMessage*/}
    <div className='ChatMessage'>
      <ChatMessage/>
      <ChatMessage/>
      <ChatMessage/>
      <ChatMessage/>
    </div>
    {/*chatInput*/}
    <div className='ChatInput'>
      <IoMdAddCircleOutline/>
      <form>
        <input type='text' placeholder='#Udemyへメッセージを送信'/>
        <button type='submit' className='chatInputbutton'>
          送信
        </button>
      </form>
      <div className='chatInputIcons'>
        <IoMdGift/>
        <MdOutlineGif/>
        <MdEmojiEmotions/>
      </div>
    </div>
    </div>
  )
}

export default Chat
