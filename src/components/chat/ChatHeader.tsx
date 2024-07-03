import React from 'react'
import './ChatHeader.css';
import { IoIosNotifications } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { IoMdHelpCircle } from "react-icons/io";


const ChatHeader = () => {
  return (
    <div className='chatHeader'>
      <div className='chatHeaderleft'>
        
            <h3>
                <span className='chatHeaderHash'>#</span>
                Udemy
            </h3>
        </div>
        <div className='chatHeaderRight'>
            <IoIosNotifications/>
            <MdPushPin/>
            <IoMdPeople/>
            <div className='chatHeaderSearch'>
                <input type='text' placeholder='検索'/>
                <FaSearch/>
            </div>
            <IoMdSend/>
            <IoMdHelpCircle/>
        </div>
    </div>
  )
}

export default ChatHeader
