import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectMail: null,
    sandMessegeIsOpen: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload;
    },
    openSandMessege: (state) => {
      state.sandMessegeIsOpen = true;
    },
    closeSendMessege: (state) => {
      state.sandMessegeIsOpen = false;
    },
  },
});

export const { selectMail, openSandMessege, closeSendMessege } =
  mailSlice.actions;

export const selectSandMessageIsOpen = (state) => state.mail.sandMessegeIsOpen;

export default mailSlice.reducer;
