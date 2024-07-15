import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import SidebarChannel from './SidebarChannel';
import { FaMicrophone,FaHeadphones } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { auth, db } from '../../firebase';
import { useAppSelector } from '../../app/hook';
import useCollection from '../../hooks/useCollection';
import { addDoc, collection } from 'firebase/firestore';
//import { collection, query } from 'firebase/firestore/lite';


const Sidebar = () => {

  const user=useAppSelector((state)=>state.user.user);
  const {documents:channels}=useCollection("channels");
  const addChannel = async()=>{
    const  channelName :string|null = prompt("新しいチャンネルを追加します。")
    if(channelName){
        await addDoc(collection(db,"channels"),{
          channelName:channelName,
        });
    }
  }

  return (
    <div className='sidebar'>
      {/*sidebarLeft*/}
      <div className='sidebarLeft'>
      <div className='severIcon'>
        <img src='./discordIcon.png'></img>
      </div>
      <div className='severIcon'>
        <img src='./logo192.png'></img>
      </div>
      </div>
      {/*sidebarRight*/}
      <div className='sidebarRight'>
            <div className='sidebarTop'>
              <h3>Discord</h3>
              <MdOutlineExpandMore/>
            </div>
        {/*SidebarChannel*/}
          <div className='sidebarChannels'>
            <div className='sidebarChannelsHeader'>
              <div className='sideHeader'>
                <MdOutlineExpandMore/>
                <h4>プログラミングチャンネル</h4>
              </div>
              <IoMdAdd className='sidebarAddIcon'onClick={()=>addChannel()}/>
            </div>
            <div className='sidebarChannelList'>
              {channels.map((channel)=>(
                <SidebarChannel 
                  channel={channel} 
                  id={channel.id}
                  key={channel.id}
                  />  
              ))}
              </div>
              <div className='sidebarFooter'>
              <div className='sidebarAccount'>
                {/*authの状態を変更するとlogout出来る*/}
              <img src={user?.photo} alt='' onClick={()=>auth.signOut()}/>
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0,4)}</span>
                
                </div>
              </div>
              <div className='sidebarVoice'>
                <FaMicrophone/>
                <FaHeadphones/>
                <IoMdSettings/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Sidebar