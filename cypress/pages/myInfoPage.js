class MyInfoPage {
  selectorList() {
    const selectors = {
      userScreenVal: ".orangehrm-edit-employee-navigation",
      firstName: "[name='firstName']",
      secondName: "[name='middleName']",
      lastName: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      optionField: ".oxd-select-text",
      submitBtt: "[type='submit']",
    };

    return selectors;
  }

  validateUserPage() {
    cy.location("pathname").should(
      "equal",
      "/web/index.php/pim/viewPersonalDetails/empNumber/7"
    );
    cy.get(this.selectorList().userScreenVal);
  }

  fillPersonalDetails(firstName, secondName, lastName) {
    cy.get(this.selectorList().firstName).clear().type(firstName);
    cy.get(this.selectorList().secondName).clear().type(secondName);
    cy.get(this.selectorList().lastName).clear().type(lastName);
  }
}
export default MyInfoPage;
