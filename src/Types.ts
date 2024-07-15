
export interface IninitialUserState{
    user:null|{
        uid:string;
        photo:string;
        email:string;
        displayName:string;
    };
}

export interface IninitialChannelState{
    channelId : string | null ;
    channelName : string | null ;
}