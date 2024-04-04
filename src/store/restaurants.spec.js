import {configureStore} from '@reduxjs/toolkit';
import restaurants from './restaurants/reducers';
import thunk from 'redux-thunk';

import {loadRestaurants} from './restaurants/actions';

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    it('stores the restaurants', async () => {
      const records = [
        {
          id: 1,
          name: 'Sushi Place',
        },
        {
          id: 2,
          name: 'Pizza Place',
        },
      ];

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      const initalState = {
        restaurants: {
          records: [],
        },
      };

      const store = configureStore({
        reducer: {restaurants},
        preloadedState: initalState,
        middleware: getDefaultMiddleware =>
          getDefaultMiddleware({
            thunk: {
              extraArgument: api,
            },
          }),
      });

      await store.dispatch(loadRestaurants());

      expect(store.getState().restaurants.records).toEqual(records);
    });
  });
});
