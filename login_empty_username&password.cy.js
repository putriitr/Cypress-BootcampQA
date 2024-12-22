/// <reference types="cypress" />

describe('Login Feature - Empty Username and Password', () => {
  it('Pengguna tidak dapat login jika username dan password tidak diisi', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').clear(); 
    cy.get('[name="password"]').clear(); 
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    cy.get('.oxd-alert-content-text').should('contain', 'Required'); 
  });
});
