import { configureStore } from '@reduxjs/toolkit'
import screenReducer from '../feature/screen/screenSlice'
export default configureStore({
  reducer: {
    screen :screenReducer
  }
})