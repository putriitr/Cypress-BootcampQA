// /// <reference types="cypress" />

// describe('Login Feature - Empty Username', () => {
//   it('Pengguna tidak dapat login jika username tidak diisi', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').clear(); 
//     cy.get('[name="password"]').type('admin123');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('.oxd-alert-content-text').should('contain', 'Required'); 
//   });
// });



// With Intercept
/// <reference types="cypress" />

describe('Login Feature - Empty Username', () => {
  it('Pengguna tidak dapat login jika username tidak diisi', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').clear(); 
    cy.get('[name="password"]').type('admin123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    cy.contains('Required', { timeout: 10000 }).should('be.visible');
  });
});

