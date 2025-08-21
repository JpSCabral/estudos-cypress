class MyInfoPage {
  selectorList() {
    const selectors = {
      userScreenVal: ".orangehrm-edit-employee-navigation",
      firstName: "[name='firstName']",
      secondName: "[name='middleName']",
      lastName: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      optionField: ".oxd-select-wrapper",
      submitBtt: "[type='submit']",
      radioBtt: ".oxd-radio-wrapper",
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

  firstDetails(firstName, secondName, lastName, nickname) {
    cy.get(this.selectorList().firstName).clear().type(firstName);
    cy.get(this.selectorList().secondName).clear().type(secondName);
    cy.get(this.selectorList().lastName).clear().type(lastName);
    // cy.get(this.selectorList().genericField).eq(3).clear().type(nickname); muda de acordo com a pagina
  }

  secondDetails(employeeId, otherId, driversLicenseNumber) {
    cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId);
    cy.get(this.selectorList().genericField).eq(4).clear().type(otherId);
    cy.get(this.selectorList().genericField)
      .eq(5)
      .clear()
      .type(driversLicenseNumber);
    cy.get(this.selectorList().dateField).eq(0).clear().type("2025-21-08");
    cy.get(".--close").click();
  }

  thirdDetails(radioSelect) {
    cy.get(this.selectorList().optionField).eq(0).click();
    cy.get(".oxd-select-dropdown > :nth-child(12)").click();
    cy.get(this.selectorList().optionField).eq(1).click();
    cy.get(".oxd-select-dropdown > :nth-child(4)").click();
    cy.get(this.selectorList().dateField)
      .eq(radioSelect)
      .clear()
      .type("1999-21-08");
    cy.get(".--close").click();
    cy.get(this.selectorList().radioBtt).eq(1).click();
  }

  saveValidate() {
    cy.get(this.selectorList().submitBtt).eq(0).click();
    cy.get("body").should("contain", "Successfully Updated");
  }
}
export default MyInfoPage;
