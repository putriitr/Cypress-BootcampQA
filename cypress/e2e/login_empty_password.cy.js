// /// <reference types="cypress" />

// describe('Login Feature - Empty Password', () => {
//   it('Pengguna tidak dapat login jika password tidak diisi', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').clear(); 
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('.oxd-alert-content-text').should('contain', 'Required');
//   });
// });


// // With Intercept
// /// <reference types="cypress" />

// describe('Login Feature - Empty Password', () => {
//   it('Pengguna tidak dapat login jika password tidak diisi', () => {
//     cy.intercept('POST', '**/auth/login').as('loginRequest');

//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('Admin');
//     cy.get('[name="password"]').clear();

//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
//   });
// });



// POM
/// <reference types="cypress" />

import EmptyPassword from '../support/page_objects/EmptyPassword'; 

describe('Login Feature - Empty Password', () => {
  const emptyPasswordObj = new EmptyPassword(); 

  it('Pengguna tidak dapat login jika password tidak diisi', () => {
    emptyPasswordObj.visit();

    emptyPasswordObj.fillUsername('Admin'); 
    emptyPasswordObj.fillPassword(''); 
    emptyPasswordObj.submitLogin(); 

    emptyPasswordObj.getRequiredMessage().should('be.visible');
  });
});
