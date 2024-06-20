import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./message-slice";

const rootReducer = combineReducers({
  message: messageReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;