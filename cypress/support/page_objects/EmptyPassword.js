class EmptyPassword {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    fillUsername(username) {
        cy.get('[name="username"]').clear().type(username);
    }

    fillPassword(password) {
        cy.get('[name="password"]').clear();
        if (password) {
            cy.get('[name="password"]').type(password);
        }
    }

    submitLogin() {
        cy.get('.oxd-button--main').click();
    }

    getRequiredMessage() {
        return cy.contains('Required');
    }
}

export default EmptyPassword;
