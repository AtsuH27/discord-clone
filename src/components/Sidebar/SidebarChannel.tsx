import { DocumentData } from "firebase/firestore";
import "./SidebarChannel.css";
import { useAppDispach } from "../../app/hook";
import { setChannelInfo } from "../../fuetures/ChannelSlice";

type Props={
  id:string;
  channel:DocumentData;
}

const SidebarChannel = (props:Props) => {
  
  const {id,channel} = props;
  const dispatch = useAppDispach()

  return (
    <div 
      className='sidebarChannel' 
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId:id,
            channelName:channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="SidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel