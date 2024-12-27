// /// <reference types="cypress" />

// describe('Login Feature - Invalid Username and Password', () => {
//   it('Pengguna tidak dapat login dengan data tidak valid (username salah & password salah)', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('WrongUser');
//     cy.get('[name="password"]').type('wrongpassword');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
//   });
// });



// // With Intercept
// /// <reference types="cypress" />

// describe('Login Feature - Invalid Username and Password', () => {
//   it('Pengguna tidak dapat login dengan data tidak valid (username salah & password salah)', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

//     cy.get('[name="username"]').type('WrongUser');
//     cy.get('[name="password"]').type('wrongpassword');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.wait('@loginRequest').its('response.statusCode').should('eq', 302); 

//     cy.url().should('include', '/auth/login');

//     cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
//   });
// });


// POM
/// <reference types="cypress" />
import InvalidBoth from '../support/page_objects/InvalidBoth';

describe('Login Feature - Invalid Username and Password', () => {
  const invalidBoth = new InvalidBoth();

  it('Pengguna tidak dapat login dengan data tidak valid (username salah & password salah)', () => {
    invalidBoth.visit();

    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

    invalidBoth.fillUsername('WrongUser');
    invalidBoth.fillPassword('wrongpassword');
    invalidBoth.submitLogin();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302); 

    invalidBoth.checkUrl();

    invalidBoth.getInvalidCredentialsMessage().should('contain', 'Invalid credentials');
  });
});


