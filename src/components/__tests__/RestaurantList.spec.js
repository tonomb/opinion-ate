import {render, screen} from '@testing-library/react';
import RestaurantList from '../RestaurantList';

describe('RestaurantList', () => {
  it('Loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(
      <RestaurantList loadRestaurants={loadRestaurants} restaurants={[]} />,
    );

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('Should Display the restaurants', () => {
    const noop = () => {};

    const restaurants = [
      {id: 1, name: 'Sushi Place'},
      {id: 2, name: 'Pizza Place'},
    ];

    render(<RestaurantList loadRestaurants={noop} restaurants={restaurants} />);

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
