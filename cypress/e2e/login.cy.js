describe("template spec", () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonField: "[type='submit']",
    alertField: ".oxd-alert",
    addressLink:
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    addressLoginLink: "/web/index.php/dashboard/index",
    gridDashboard: ".orangehrm-dashboard-grid"
  };

const userData = {
userSucess: {
  username: 'Admin',
  password: 'admin123'
},
userFail: {
  username: '123',
  password: '123'
}

}

  it("Login - success", () => {
    cy.visit(selectorList.addressLink);
    cy.get(selectorList.usernameField).type(userData.userSucess.username);
    cy.get(selectorList.passwordField).type(userData.userSucess.password);
    cy.get(selectorList.buttonField).click();
    cy.location("pathname").should("equal", selectorList.addressLoginLink);
    cy.get(selectorList.gridDashboard);
  });
  it.skip("Login - failed", () => {
    cy.visit(selectorList.addressLink);
    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.buttonField).click();
    cy.get(selectorList.alertField);
  });
});
