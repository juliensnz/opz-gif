// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Base spec for simple scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays 14 loops', function () {
    cy.get('[data-testid^="loop_container"]').should('have.length', 14);
  });

  it('does not display any modals', function () {
    cy.wait(500).get('[data-testid="adder_modal"]').should('not.be.visible');
    cy.wait(500).get('[data-testid="wtf_modal"]').should('not.be.visible');
    cy.wait(500).get('[data-testid="like_modal"]').should('not.be.visible');
  });
});

export {};
