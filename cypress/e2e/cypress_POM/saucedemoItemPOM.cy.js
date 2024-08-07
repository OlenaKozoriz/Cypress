/// <reference types="cypress" />
import LoginPage from "../../support/POM/LoginPage";
import InventoryPage from "../../support/POM/InventoryPage";
import ItemPage from "../../support/POM/ItemPage";

describe("Actions on Item Page", () => {
  beforeEach(() => {
    cy.visit("/");
    LoginPage.typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLoginButton();
  });

  it("Assertions that the elements of the Item exist", () => {
    InventoryPage.labsBackpackClick();
    ItemPage.ifElementsOfItemExist();
  });

  it("Assertion that the 'Remove' button exists after adding the Item to the Cart", () => {
    InventoryPage.labsBackpackClick();
    ItemPage.ifRemoveButtonExist();
  });

  it("Assertion that the 'Add to Cart' button exists after clicking on the 'Remove' button", () => {
    InventoryPage.labsBackpackClick();
    ItemPage.ifRemoveButtonExist();
    ItemPage.ifAddToCartButtonExist();
  });
});
