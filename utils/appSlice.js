import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleMenu:(state,action)=>{
            state.isMenuOpen = !state.isMenuOpen || action.payload
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
          },
    }
})

export const { toggleMenu,closeMenu } = appSlice.actions;
export default appSlice.reducer;
