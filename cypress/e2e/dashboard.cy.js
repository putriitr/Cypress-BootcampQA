/// <reference types="cypress" />
import dashboard from '../support/page_objects/Dashboard';

describe('Dashboard Feature - Directory Menu', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/web/index.php/dashboard').as('dashboardPage');
    cy.intercept('GET', '**/web/index.php/directory/viewDirectory').as('directoryPage');
    cy.visit('/web/index.php/auth/login');
    cy.get('input[placeholder="Username"]').type('Admin');
    cy.get('input[placeholder="Password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });

  it('Pengguna dapat mengakses menu Dashboard dan Directory', () => {
    cy.wait('@dashboardPage').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    dashboard.verifyDashboardTitle();

    dashboard.navigateToDirectory();
    cy.wait('@directoryPage').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    dashboard.verifyDirectoryPageTitle();

    dashboard.searchEmployee('Linda');
    dashboard.verifySearchResult('Linda');
  });
});
