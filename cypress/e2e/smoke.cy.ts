describe('Smoke Test', () => {
  it('can viwe the home page', () => {
    cy.visit('/');
    cy.contains('Opinion Ate Starter');
  });
});
