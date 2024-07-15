import React, { useEffect, useState } from 'react'
import './Chat.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import ChatHeader from './ChatHeader';
import { IoMdGift } from "react-icons/io";
import { MdOutlineGif } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import ChatMessage from './ChatMessage';
import {  useAppSelector } from '../../app/hook';
import { addDoc, collection, CollectionReference, DocumentData, DocumentReference, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';




const Chat = () => {
  const [inputText,setInputText]=useState<string>();
  const channelId = useAppSelector((state)=>state.channel.channelId);
  const channelName = useAppSelector((state)=> state.channel.channelName);
  
  const user = useAppSelector((state)=>state.user.user);
  const{subDocuments:messages}=useSubCollection("channels","message");
  


  const sendMeasage = async(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  )=>{
    e.preventDefault();
    // channelsコレクションの中にあるmessageコレクションの中にメッセージ情報を入れる。
    const collectionRef:CollectionReference<DocumentData> = collection(
      db,
      "channels",
      String(channelId),
      "message"
    );

    const docRef:DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
      message:inputText,
      timeStamp:serverTimestamp(),
      user:user,
      }
  );
    setInputText("");
  };

  return (
    <div className='chat'>
    {/*chatHeader*/}
    <ChatHeader channelName={channelName}/>
    {/*chatMessage*/}
    <div className='ChatMessage'>
      {messages.map((message,index)=>(
        <ChatMessage 
         key={index} 
         message={message.message}
         timestamp={message.timeStamp}
         user={message.user}
         />
      ))}
      
      {/* <ChatMessage/>
      <ChatMessage/>
      <ChatMessage/> */}
    </div>
    {/*chatInput*/}
    <div className='ChatInput'>
      <IoMdAddCircleOutline/>
      <form>
        <input type='text' placeholder='#Udemyへメッセージを送信' 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
          setInputText(e.target.value)
        }
        value={inputText}
        />
        <button type='submit' 
          className='chatInputbutton' 
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>
          sendMeasage(e)}>
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
