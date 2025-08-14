import userData from "../fixtures/userData.json";

describe("template spec", () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[type='password']",
    buttonField: "[type='submit']",
    alertField: "[role='alert']",
    gridDashboard: ".orangehrm-dashboard-grid",
    menuMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    userScreenVal: ".orangehrm-edit-employee-navigation",
    firstName: "[name='firstName']",
    secondName: "[name='middleName']",
    lastName: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    optionField: ".oxd-select-text",
    submitBtt: "[type='submit']",
  };

  it("Login - success", () => {
    cy.visit("/auth/login");
    cy.get(selectorList.usernameField).type(userData.userSucess.username);
    cy.get(selectorList.passwordField).type(userData.userSucess.password);
    cy.get(selectorList.buttonField).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorList.gridDashboard);
  });
  it("Login - failed", () => {
    cy.visit("/auth/login");
    cy.get(selectorList.usernameField).type(userData.userFail.username);
    cy.get(selectorList.passwordField).type(userData.userFail.password);
    cy.get(selectorList.buttonField).click();
    cy.get(selectorList.alertField);
  });
  it.only("User info update - success", () => {
    cy.visit("/auth/login");
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(selectorList.usernameField).type(userData.userSucess.username);
    cy.get(selectorList.passwordField).type(userData.userSucess.password);
    cy.get(selectorList.buttonField).click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(selectorList.gridDashboard);
    cy.get(selectorList.menuMyInfo).click();
    cy.location("pathname").should(
      "equal",
      "/web/index.php/pim/viewPersonalDetails/empNumber/7"
    );
    cy.get(selectorList.userScreenVal);
    cy.get(selectorList.firstName).clear().type("John");
    cy.get(selectorList.secondName).clear().type("Peter");
    cy.get(selectorList.lastName).clear().type("Vaz");
    cy.get(selectorList.genericField).eq(3).clear().type("Xerk");
    cy.get(selectorList.genericField).eq(4).clear().type("2469");
    cy.get(selectorList.genericField).eq(5).clear().type("48569");
    cy.get(selectorList.genericField).eq(6).clear().type("2025-05-10");
    cy.get(".--close").click();
    cy.get(selectorList.optionField).eq(0).click().type("Dominican");
    cy.get(selectorList.optionField).eq(1).click().type("Married");
    cy.get(selectorList.submitBtt).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  });
});
