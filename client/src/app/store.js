import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; // adjust path if needed

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // Optional: Add middleware like redux-thunk or devtools customization
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;
