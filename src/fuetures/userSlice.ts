import {createSlice} from "@reduxjs/toolkit"
import { IninitialUserState } from "../Types";

const initialState:IninitialUserState={
    user:null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user = null;
        },
    },
});

export const {login,logout}=userSlice.actions;
//login logoutを他ファイルでも使用できるように、エクスポートする。
export default userSlice.reducer;