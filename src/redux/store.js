import { configureStore } from '@reduxjs/toolkit';
import appData from './features/data';


export default configureStore({
  reducer: {
	  appData,
  },
})
