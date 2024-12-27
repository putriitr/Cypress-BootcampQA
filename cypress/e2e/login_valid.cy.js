// /// <reference types="cypress" />

// describe('Login Feature - Valid Credentials', () => {
//   it('Pengguna dapat login dengan data valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').type('admin123');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
//   });
// });



// // With Intercept
// /// <reference types="cypress" />

// describe('Login Feature - Valid Credentials with Intercept', () => {
//   beforeEach(() => {
//     cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');
//   });

//   it('Pengguna dapat login dengan data valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');

//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').type('admin123');

//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.wait('@loginRequest').then((interception) => {
//       expect(interception.response.statusCode).to.eq(302);
//       expect(interception.response.headers.location).to.include('/dashboard');
//     });

//     cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
//   });
// });


// POM
/// <reference types="cypress" />
import loginValid from '../support/page_objects/loginValid';

describe('Login Feature - Valid Credentials with POM', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');
  });

  it('Pengguna dapat login dengan data valid', () => {
    loginValid.visitloginValid(); 

    loginValid.verifyLoginTitleValidloginValid(); 
    loginValid.enterUsername('Admin');
    loginValid.enterPassword('admin123'); 
    loginValid.clickLoginButton(); 

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.be.oneOf([200, 302]);
    });

    loginValid.verifyDashboardHeader('Dashboard');
  });
});


