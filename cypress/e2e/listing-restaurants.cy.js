describe('Listing restaurants', () => {
  it('shows restaurants from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza place';

    cy.intercept('GET', 'https://api.outsidein.dev/*/restaurants', [
      {
        id: 1,
        name: sushiPlace,
      },
      {
        id: 2,
        name: pizzaPlace,
      },
    ]);

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
