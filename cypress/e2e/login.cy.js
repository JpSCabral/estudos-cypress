import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import MenuAccess from "../pages/menuAccess";
import MyInfoPage from "../pages/myInfoPage";
const Chance = require("chance");

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuAccess = new MenuAccess();
const myInfoPage = new MyInfoPage();
const chance = new Chance();

describe("template spec", () => {
  // const selectorList = {
  // };

  it.skip("Login - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSucess.username,
      userData.userSucess.password
    );
    dashboardPage.validateDashPage();
  });
  it.skip("Login - failed", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );
    loginPage.validateLoginFail();
  });
  it("User info update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSucess.username,
      userData.userSucess.password
    );
    dashboardPage.validateDashPage();
    menuAccess.accessMyInfo();
    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.first(),
      chance.last()
    );

    // cy.get(selectorList.genericField).eq(3).clear().type("Xerk");
    // cy.get(selectorList.genericField).eq(4).clear().type("2469");
    // cy.get(selectorList.genericField).eq(5).clear().type("48569");
    // cy.get(selectorList.genericField).eq(6).clear().type("2025-05-10");
    // cy.get(".--close").click();
    // cy.get(selectorList.optionField).eq(0).click().type("Dominican");
    // cy.get(selectorList.optionField).eq(1).click().type("Married");
    // cy.get(selectorList.submitBtt).eq(0).click();
    // cy.get("body").should("contain", "Successfully Updated");
  });
});
