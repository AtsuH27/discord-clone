import React from 'react'
import "./Sidebar.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import SidebarChannel from './SidebarChannel';
import { FaMicrophone,FaHeadphones } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";


const Sidebar = () => {
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
              <IoMdAdd className='sidebarAddIcon'/>
            </div>
            <div className='sidebarChannelList'>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
              <SidebarChannel/>
              </div>
              <div className='sidebarFooter'>
              <div className='sidebarAccount'>
              <img src='./icon.png' alt=''/>
              <div className='accountName'>
                <h4>atsuHironaka</h4>
                <span>#8162</span>
                
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