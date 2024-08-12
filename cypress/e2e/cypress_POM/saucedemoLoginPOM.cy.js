/// <reference types="cypress" />
import LoginPage from "../../support/POM/LoginPage";

//Usage of the environment variables from different config files (the regular one and 'test.config')
describe("Filling of Login form", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("Successful login", () => {
    LoginPage.typeUsername(Cypress.env("USER_NAME"))
      .typePassword(Cypress.env("USER_PASSWORD"))
      .clickLoginButton();
    cy.get('[data-test="title"]').should("have.text", "Products");
    cy.url().should("include", "saucedemo.com");
  });

  it("Log In with incorrect password", () => {
    LoginPage.typeUsername(Cypress.env("USER_NAME"))
      .typePassword("example")
      .clickLoginButton();
    LoginPage.verifyError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Log In with incorrect username", () => {
    LoginPage.typeUsername("_user")
      .typePassword(Cypress.env("USER_NAME"))
      .clickLoginButton();
    LoginPage.verifyError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Log In with blank username", () => {
    LoginPage.typePassword(Cypress.env("USER_PASSWORD")).clickLoginButton();
    LoginPage.verifyError("Epic sadface: Username is required");
  });

  it("Log In with blank password", () => {
    LoginPage.typeUsername(Cypress.env("USER_NAME")).clickLoginButton();
    LoginPage.verifyError("Epic sadface: Password is required");
  });
});
