class DashboardPage {
  selectorList() {
    const selectors = {
      gridDashboard: ".orangehrm-dashboard-grid",
    };
    return selectors;
  }

  validateDashPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(this.selectorList().gridDashboard);
  }
}

export default DashboardPage;
