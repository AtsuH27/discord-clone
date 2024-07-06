import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import { useAppSelector } from './app/hook';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './fuetures/userSlice';


function App() {
  
  //storeでユーザーを管理する。
  //dispatchでユーザーの状態を変更する。
  //ユーザーの中身をuseSelectorでユーザー情報を取得できる。


  const user=useAppSelector((state)=>state.user);
  
  //console.log(user);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((loginUser)=>{
      console.log(loginUser);
      if(loginUser){
        dispatch(login({
          uid:loginUser.uid,
          photo:loginUser.photoURL,
          email:loginUser.email,
          displayName:loginUser.displayName,
        }));
      }else{
        dispatch(logout());
      }
    });
  },[dispatch]);

  return (
    <div className="App"> 
    {/*↓参考演算子　条件分岐　user ログインがある場合に画面の表示を行う*/}
    {user?
    (
      <>
      <Sidebar/>
      <Chat/>
      </>
    ):(
      <><Login/></>
    )}
    
    </div>
  );
}

export default App;
