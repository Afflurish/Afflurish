import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    id: string,
    display_name: string,
    email: string,
    token: string
};

export interface AuthState {
    user?: UserState 
};

const initialState: AuthState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthUser: (state, action: PayloadAction<UserState>) => {
            state.user = action.payload;
        },
        clearAuthUser: (state) => {
          state.user = undefined;
        }
    }
});

export const { actions } = authSlice;
export default authSlice.reducer;