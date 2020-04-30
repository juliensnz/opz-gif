/// <reference types="cypress" />

import 'cypress-file-upload';

context('Add a loop to the tool', () => {
  beforeEach(() => {
    cy.task('cleanDownloadsDirectory').visit('/');
    cy.exec('cp ./cypress/fixtures/skeleton.gif ./public/skeleton.gif', {log: true});
  });

  it('add a loop url', function () {
    cy.wait(500).get('[data-testid="loop_container_0"]').click();

    cy.wait(500).get('[data-testid="adder_modal"]').should('be.visible');
    cy.get('[data-testid="url_source_button"]').click();

    cy.get('[data-testid="url_source_input"]').type('http://localhost:3000/opz-gif/skeleton.gif');
    cy.get('[data-testid="url_source_confirm"]').click();
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
