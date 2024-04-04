import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export function RestaurantList({loadRestaurants, restaurants}: any) {
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

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
