import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../fuetures/userSlice";
import channelReducer  from "../fuetures/ChannelSlice";

export const store =configureStore({
    reducer:{
        user:userReducer,
        channel:channelReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
//dispatchの型を指定する。store変数の中身を指定する。
export type RootState = ReturnType<typeof store.getState>
//storeが持っている状態の型を指定する。
//右側の処理で型を返して、RootStateに入れる。※公式ドキュメントに書いている
