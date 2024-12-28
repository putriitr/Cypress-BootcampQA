class Dashboard {
  visitDashboard() {
    cy.visit('/web/index.php/dashboard');
  }

  verifyDashboardTitle() {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').should('have.text', 'Dashboard');
  }

  navigateToDirectory() {
    cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
  }

  verifyDirectoryPageTitle() {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text--h6').should('have.text', 'Directory');
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('button[type="submit"]').click();
  }

  verifySearchResult(name) {
    cy.get('.oxd-table').should('contain', name);
  }
}

export default new Dashboard();
