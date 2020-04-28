// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    // usually we recommend setting baseUrl in cypress.json
    // but for simplicity of this example we just use it here
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3000');
  });

  it('displays 14 loops', function () {
    cy.get('[data-testid^="loop_container"]').should('have.length', 14);
  });

  it('does not display any modals', function () {
    cy.wait(500).get('[data-testid^="adder_modal"]').should('not.be.visible');
    cy.wait(500).get('[data-testid^="wtf_modal"]').should('not.be.visible');
    cy.wait(500).get('[data-testid^="like_modal"]').should('not.be.visible');
  });

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
});

export {};
