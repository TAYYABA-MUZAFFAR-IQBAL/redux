import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import i18nReducer from "../features/i18next/i18nSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    i18n: i18nReducer,
  },
})
