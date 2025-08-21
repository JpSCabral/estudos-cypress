class SideMenuItens {
  selectorList() {
    const selectors = {
      itensMenu: ".oxd-main-menu-item",
      menuMyInfo: "[href='/web/index.php/pim/viewMyDetails']",
    };

    return selectors;
  }

  accessAdmin() {
    cy.get(this.selectorList().itensMenu[0]).click();
  }
  accessPim() {
    cy.get(this.selectorList().itensMenu[1]).click();
  }
  accessLeave() {
    cy.get(this.selectorList().itensMenu[2]).click();
  }
  accessTime() {
    cy.get(this.selectorList().itensMenu[3]).click();
  }
  accessRecruitment() {
    cy.get(this.selectorList().itensMenu[4]).click();
  }
  accessMyInfo() {
    cy.get(this.selectorList().menuMyInfo).click();
  }
  accessPerfomance() {
    cy.get(this.selectorList().itensMenu[6]).click();
  }
  accessDashboard() {
    cy.get(this.selectorList().itensMenu[7]).click();
  }

  accessDirectory() {
    cy.get(this.selectorList().itensMenu[8]).click();
  }

  accessMaintenance() {
    cy.get(this.selectorList().itensMenu[9]).click();
  }

  accessClaim() {
    cy.get(this.selectorList().itensMenu[10]).click();
  }

  accessBuzz() {
    cy.get(this.selectorList().itensMenu[11]).click();
  }
}

export default SideMenuItens;
