import { User } from "../../../../app/types/auth";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userAccount: {} as User | null,
};

const userAccountSlice = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userAccount = action.payload;
        },
        removeUser: (state) => {
            state.userAccount = null;
        },
        updateUser: (state, action) => {
            state.userAccount = { ...state.userAccount, ...action.payload };
        },
    },
});

export const { addUser, removeUser, updateUser } = userAccountSlice.actions;
export default userAccountSlice.reducer;
