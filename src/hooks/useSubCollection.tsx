import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import {onSnapshot, QuerySnapshot,collection, query, DocumentData, CollectionReference, Query, orderBy, Timestamp} from "firebase/firestore";
import { channel } from 'diagnostics_channel';
import { useAppSelector } from '../app/hook';


interface Messages{
    timeStamp:Timestamp;
    message:string;
    user:{
      uid:string;
      photo:string;
      email:string;
      displayName:string;
    }
  }

const useSubCollection = (collectionName:string,
    subCollectionName:string) => {
    const channelId = useAppSelector((state)=>state.channel.channelId); 
    const [subDocuments,setDocuments]=useState<Messages[]>([]);
    
 
    useEffect(()=>{ 
        let collectionRef = collection(
          db,
          collectionName,
          String(channelId),
          subCollectionName
        );
    
        const collectionRefOrderBy = query(
          collectionRef,
          orderBy("timeStamp","asc")
        );
    
        onSnapshot(collectionRefOrderBy,(snapshot)=>{
          let results:Messages[] = [];
          snapshot.docs.forEach((doc)=>{
            results.push({
              timeStamp:doc.data().timeStamp,
              message:doc.data().message,
              user:doc.data().user,
            })
          });
          setDocuments(results);
          console.log(results);
        });
      },[channelId]);
  
    return (
    {subDocuments}
  )
}

export default useSubCollection
