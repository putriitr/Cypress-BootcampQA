import ForgotPasswordPage from '../support/page_objects/ForgotPasswordPage';

describe('Forgot Password Feature', () => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com';

  before(() => {
    cy.visit(baseUrl); 
  });

  it('should navigate to Forgot Password, auto-fill username, and reset password', () => {
    cy.contains('Forgot your password?').click();

    cy.url().should('include', '/auth/requestPasswordResetCode');

    cy.get('input[placeholder="Username"]', { timeout: 15000 })
      .should('be.visible')
      .type('Admin'); 

    cy.wait(5000);

    cy.contains('Reset Password', { timeout: 20000 })
      .should('be.visible')
      .click(); 

    cy.contains('Please check your email for reset instructions', { timeout: 30000 }) 
      .should('be.visible'); 
  });
});
