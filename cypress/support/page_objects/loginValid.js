/// <reference types="cypress" />

class LoginValid {
    visitloginValid() {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]', { timeout: 10000 }).should('be.visible');
    }
  
    verifyLoginTitleValidloginValid() {
      cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title')
        .should('have.text', 'Login');
    }
  
    enterUsername(username) {
      cy.get('[name="username"]').type(username);
    }
  
    enterPassword(password) {
      cy.get('[name="password"]').type(password);
    }
  
    clickLoginButton() {
      cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')
        .click();
    }
  
    verifyDashboardHeader(expectedHeader) {
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
        .should('have.text', expectedHeader);
    }
  }
  
  export default new LoginValid();
  