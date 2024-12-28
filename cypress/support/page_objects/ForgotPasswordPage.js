class ForgotPasswordPage {
  get usernameField() {
    return cy.get('input[placeholder="Username"]');
  }

  get resetPasswordButton() {
    return cy.contains('Reset Password'); 
  }

  resetPassword(username) {
    this.usernameField.type(username); 
    this.resetPasswordButton.click(); 
  }
}

export default ForgotPasswordPage;
