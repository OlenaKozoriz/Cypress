class InventoryPage {
  //Locators
  get burgerMenuIcon() {
    return cy.get("#react-burger-menu-btn");
  }
  get cartIcon() {
    return cy.get('[data-test="shopping-cart-link"]');
  }
  get sortDropDown() {
    return cy.get('[data-test="product-sort-container"] option');
  }
  get labsBackpackItem() {
    return cy.get('[data-test="inventory-item-name"]');
  }
  //Methods
  ifElementsVisible() {
    this.burgerMenuIcon.should("be.visible");
    this.cartIcon.should("be.visible");
    this.sortDropDown.should("exist");
    return this;
  }

  verifyDropDownOptions() {
    this.sortDropDown.should("have.length", 4);
    this.sortDropDown.should("have.value", "az", "za", "lohi", "hilo");
  }
  cartClick() {
    this.cartIcon.click();
  }
  labsBackpackClick() {
    this.labsBackpackItem.contains("Sauce Labs Backpack").click();
  }
}

export default new InventoryPage();
