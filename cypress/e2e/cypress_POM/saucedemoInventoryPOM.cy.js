/// <reference types="cypress" />
import LoginPage from "../../support/POM/LoginPage";
import InventoryPage from "../../support/POM/InventoryPage";

describe("Actions on Inventory Page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
    LoginPage.typeUsername(Cypress.env("USER_NAME"))
      .typePassword(Cypress.env("USER_PASSWORD"))
      .clickLoginButton();
  });

  it("Assertions of the web-elements visibility", () => {
    InventoryPage.ifElementsVisible();
  });

  it("Assertion that the sort drop-down options exist", () => {
    InventoryPage.verifyDropDownOptions();
  });

  it("Assertion of the URL after clicking on the Cart", () => {
    InventoryPage.cartClick();
    cy.url().should("include", "cart.html");
  });

  it("Assertion that correct Item is opened after clicking on it", () => {
    InventoryPage.labsBackpackClick();
  });
});
