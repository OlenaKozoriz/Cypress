/// <reference types="cypress" />
import LoginPage from "../../support/POM/LoginPage";

describe("Filling of Login form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Successful login", () => {
    LoginPage.typeUsername("standard_user")
      .typePassword("secret_sauce")
      .clickLoginButton();
    cy.get('[data-test="title"]').should("have.text", "Products");
    cy.url().should("include", "saucedemo.com");
  });

  it("Log In with incorrect password", () => {
    LoginPage.typeUsername("standard_user")
      .typePassword("secret")
      .clickLoginButton();
    LoginPage.verifyError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Log In with incorrect username", () => {
    LoginPage.typeUsername("_user")
      .typePassword("secret_sauce")
      .clickLoginButton();
    LoginPage.verifyError(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Log In with blank username", () => {
    LoginPage.typePassword("secret_sauce").clickLoginButton();
    LoginPage.verifyError("Epic sadface: Username is required");
  });

  it("Log In with blank password", () => {
    LoginPage.typeUsername("standard_user").clickLoginButton();
    LoginPage.verifyError("Epic sadface: Password is required");
  });
});
