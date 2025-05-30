import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState: {
        noteList: []
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        }
    },

});

export const { setNoteList } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;
