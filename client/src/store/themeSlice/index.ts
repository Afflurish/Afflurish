import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Theme } from '../../types/theme';

import { dark } from '../../theme';

const initialState: Theme = dark;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state = action.payload;
        }
    }
});

export const { actions } = themeSlice;
export default themeSlice.reducer;