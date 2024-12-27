class InvalidBoth {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  fillUsername(username) {
    cy.get('[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[name="password"]').type(password);
  }

  submitLogin() {
    cy.get('.oxd-button--main').click();
  }

  getInvalidCredentialsMessage() {
    return cy.get('.oxd-alert-content-text');
  }

  checkUrl() {
    cy.url().should('include', '/auth/login');
  }
}

export default InvalidBoth;
