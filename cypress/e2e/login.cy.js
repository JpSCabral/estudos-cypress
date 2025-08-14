import userData from "../fixtures/userData.json";

describe("template spec", () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonField: "[type='submit']",
    alertField: "[role='alert']",
    addressLink:
      "",
    addressLoginLink: "/web/index.php/dashboard/index",
    gridDashboard: ".orangehrm-dashboard-grid",
  };

  it("Login - success", () => {
    cy.visit('/auth/login');
    cy.get(selectorList.usernameField).type(userData.userSucess.username);
    cy.get(selectorList.passwordField).type(userData.userSucess.password);
    cy.get(selectorList.buttonField).click();
    cy.location("pathname").should("equal", selectorList.addressLoginLink);
    cy.get(selectorList.gridDashboard);
  });
  it("Login - failed", () => {
    cy.visit(selectorList.addressLink);
    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.buttonField).click();
    cy.get(selectorList.alertField);
  });
});
