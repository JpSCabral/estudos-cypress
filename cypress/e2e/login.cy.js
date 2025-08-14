describe("template spec", () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonField: "[type='submit']",
    alertField: ".oxd-alert",
    addressLink:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    addressLoginLink: "/web/index.php/dashboard/index",
    headerText: ".oxd-topbar-header-breadcrumb",
  };

  it("Login - success", () => {
    cy.visit(selectorList.addressLink);
    cy.get(selectorList.usernameField).type("Admin");
    cy.get(selectorList.passwordField).type("admin123");
    cy.get(selectorList.buttonField).click();
    cy.location("pathname").should("equal", selectorList.addressLoginLink);
    cy.get(selectorList.headerText).contains("Dashboard");
  });
  it.skip("Login - failed", () => {
    cy.visit(selectorList.addressLink);
    cy.get(selectorList.usernameField).type("Admin");
    cy.get(selectorList.passwordField).type("123");
    cy.get(selectorList.buttonField).click();
    cy.get(selectorList.alertField);
  });
});
