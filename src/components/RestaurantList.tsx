import React from 'react';
import {useEffect} from 'react';

export default function RestaurantList({loadRestaurants, restaurants}: any) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <ul>
      {restaurants.map((restaurant: any) => {
        return <li key={restaurant.id}>{restaurant.name}</li>;
      })}
    </ul>
  );
}
