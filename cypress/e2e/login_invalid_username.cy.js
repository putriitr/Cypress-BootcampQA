// /// <reference types="cypress" />

// describe('Login Feature - Invalid Username', () => {
//   it('Pengguna tidak dapat login dengan data tidak valid (username salah & password benar)', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     cy.get('[name="username"]').type('WrongUser');
//     cy.get('[name="password"]').type('admin123');
//     cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

//     cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
//   });
// });



// With Intercept
/// <reference types="cypress" />

describe('Login Feature - Invalid Username with Intercept', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/web/index.php/auth/validate').as('loginRequest');
  });

  it('Pengguna tidak dapat login dengan data tidak valid (username salah & password benar)', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get('[name="username"]').type('WrongUser');
    cy.get('[name="password"]').type('admin123');
    cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(302);

      expect(interception.response.headers['location']).to.include('/auth/login');
    });

    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });
});

