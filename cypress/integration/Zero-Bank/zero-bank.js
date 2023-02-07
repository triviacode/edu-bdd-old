import { 
    Given,
    Then,
    When,
 } from "cypress-cucumber-preprocessor/steps";

const url = 'http://zero.webappsecurity.com/index.html'
Given('A user open Zero Bank page', () => {
  cy.visit(url)
})

When('A user type {string} in the search and press Enter', () => {
    cy.get("#searchTerm").type(Bills)
})

Then(`A user should see the result`, () => {
    cy.url().should('include', '/search.html?searchTerm=Bills')
})