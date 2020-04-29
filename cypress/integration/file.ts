// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import 'cypress-file-upload';

context('Add a loop to the tool', () => {
  beforeEach(() => {
    cy.task('cleanDownloadsDirectory').visit('/');
  });

  it('add a loop file', function () {
    cy.get('[data-testid="loop_container_0"]').click();

    cy.wait(500).get('[data-testid="adder_modal"]').should('be.visible');
    cy.get('[data-testid="file_source_button"]').click();
    cy.fixture('skeleton.gif').then((fileContent) => {
      cy.wait(500)
        .get('[data-testid="file_source_input"]')
        .upload({fileContent, fileName: 'skeleton.gif', mimeType: 'image/gif'});
    });

    cy.get('[data-testid="loop_configurator_confirm"]').click();
    cy.get('[data-testid="main_download_button"]')
      .should('be.visible')
      .click()
      .readFile(`cypress/downloads/GIFs.zip`, 'base64')
      .then((downloadedFile) => {
        return downloadedFile.length;
      })
      .should('be.equal', Cypress.env('ci') !== 'true' ? 6606968 : 6723172);
  });
});

export {};
