/// <reference types="cypress" />

class InvalidUsername {
    visitLoginPage() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
  
    enterUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[name="password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('.oxd-button--main.orangehrm-login-button').click();
    }
  
    verifyErrorMessage(message) {
      cy.get('.oxd-alert-content-text').should('contain', message);
    }
  }
  
  export default new InvalidUsername();
  