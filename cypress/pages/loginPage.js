class LoginPage {
  selectorList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[type='password']",
      buttonField: "[type='submit']",
      alertField: "[role='alert']",
    };

    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username);
    cy.get(this.selectorList().passwordField).type(password);
    cy.get(this.selectorList().buttonField).click();
  }

  validateLoginFail() {
    cy.get(this.selectorList().alertField);
  }
}

export default LoginPage;
