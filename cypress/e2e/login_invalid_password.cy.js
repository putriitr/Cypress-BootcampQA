// /// <reference types="cypress" />

// describe('Login Feature - Invalid Password', () => {
//   it('Pengguna tidak dapat login dengan data tidak valid (username benar & password salah)', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').type('wrongpassword');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
//   });
// });


// // With Intercept
// /// <reference types="cypress" />

// describe('Login Feature - Invalid Password with Real API Response', () => {
//   beforeEach(() => {
//     cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');
//   });

//   it('Pengguna tidak dapat login dengan data tidak valid (username benar & password salah)', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').type('wrongpassword');

//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.wait('@loginRequest').then((interception) => {
//       expect(interception.response.statusCode).to.eq(302);

//       expect(interception.response.headers.location).to.include('/auth/login');
//     });

//     cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
//   });
// });


// POM
/// <reference types="cypress" />
import invalidPassword from '../support/page_objects/InvalidPassword';

describe('Login Feature - Invalid Password', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');
  });

  it('Pengguna tidak dapat login dengan data tidak valid (username benar & password salah)', () => {
    invalidPassword.visitLoginPage();

    invalidPassword.enterUsername('Admin');
    invalidPassword.enterPassword('wrongpassword');

    invalidPassword.clickLoginButton();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(302);
      expect(interception.response.headers.location).to.include('/auth/login');
    });

    invalidPassword.verifyErrorMessage('Invalid credentials');
  });
});
