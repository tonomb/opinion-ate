import {configureStore} from '@reduxjs/toolkit';
import restaurants from './restaurants/reducers';

const store = configureStore({
  reducer: {restaurants},
});

export default store;
