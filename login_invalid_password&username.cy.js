/// <reference types="cypress" />

describe('Login Feature - Invalid Username and Password', () => {
  it('Pengguna tidak dapat login dengan data tidak valid (username salah & password salah)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('WrongUser');
    cy.get('[name="password"]').type('wrongpassword');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});
