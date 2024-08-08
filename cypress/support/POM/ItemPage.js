class InventoryPage {
  //Locators
  get itemImage() {
    return cy.get('[data-test="item-sauce-labs-backpack-img"]');
  }
  get itemDescription() {
    return cy.get('[data-test="inventory-item-desc"]');
  }
  get itemPrice() {
    return cy.get('[data-test="inventory-item-price"]');
  }
  get itemName() {
    return cy.get('[data-test="inventory-item-name"]');
  }
  get addToCartButton() {
    return cy.get("#add-to-cart");
  }
  get removeButton() {
    return cy.get('[data-test="remove"]');
  }
  //Methods
  ifElementsOfItemExist() {
    this.itemImage.should("exist");
    this.itemDescription.should("exist");
    this.itemPrice.should("exist");
    this.itemName.should("exist");
    return this;
  }
  ifRemoveButtonExist() {
    this.addToCartButton.click();
    this.removeButton.should("exist");
  }
  ifAddToCartButtonExist() {
    this.removeButton.click();
    this.addToCartButton.should("exist");
  }
}

export default new InventoryPage();
