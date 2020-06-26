describe('Search input', () => {
  it('focuses on input on load', () => {
    cy.visit('http://localhost:4200');

    cy.focused()
      .should('have.class', 'search-form__input');
  });
});
