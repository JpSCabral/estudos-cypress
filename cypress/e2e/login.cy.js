import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("template spec", () => {
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
});
