/// <reference types="cypress" />

describe("Filling of Login form", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/index.html");
  });
  it("Successful logging in", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".product_label").should("have.text", "Products");
    cy.url().should("include", "saucedemo.com");
    cy.get(".product_sort_container option")
      .eq(1)
      .should("have.text", "Name (Z to A)");
  });

  it("Log In with incorrect password", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("example");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]')
      .invoke("text")
      .should(
        "eq",
        "Epic sadface: Username and password do not match any user in this service"
      );
    cy.get('[data-test="error"]')
      .find('[data-icon="times-circle"]')
      .should("exist");
  });

  it("Log In with incorrect username", () => {
    cy.get('[data-test="username"]').type("user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]')
      .invoke("text")
      .should(
        "eq",
        "Epic sadface: Username and password do not match any user in this service"
      );
    cy.get("#login-button").should("be.enabled");
  });

  it("Log In with blank username", () => {
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]')
      .invoke("text")
      .should("eq", "Epic sadface: Username is required");
  });

  it("Log In with blank password", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get(".btn_action").click();
    cy.get('[data-test="error"]')
      .invoke("text")
      .should("eq", "Epic sadface: Password is required");
  });
});
