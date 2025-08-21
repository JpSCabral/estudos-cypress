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
  it("User info update - success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userSucess.username,
      userData.userSucess.password
    );
    dashboardPage.validateDashPage();
    menuAccess.accessMyInfo();
    myInfoPage.firstDetails(
      chance.first(),
      chance.first(),
      chance.last(),
      chance.prefix()
    );
    myInfoPage.secondDetails(
      chance.integer({ min: 0, max: 2000 }),
      chance.integer({ min: 0, max: 4000 }),
      chance.date({ string: true, american: false }),
      chance.date({ string: true, american: false })
    );
    myInfoPage.thirdDetails(chance.integer({ min: 0, max: 1 }));
    myInfoPage.saveValidate();
  });
});
