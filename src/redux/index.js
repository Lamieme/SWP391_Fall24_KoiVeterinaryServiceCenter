import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalConfigSlice from './globalConfigSlice'

const rootReducer = combineReducers({
  globalConfig: globalConfigSlice
})

export default configureStore({
  reducer: rootReducer
})