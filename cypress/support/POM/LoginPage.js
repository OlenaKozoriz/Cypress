class LoginPage {
  // Локатори елементів сторінки
  get usernameInput() {
    return cy.get('[data-test="username"]');
  }
  get passwordInput() {
    return cy.get('[data-test="password"]');
  }
  get loginButton() {
    return cy.get("#login-button");
  }
  get error() {
    return cy.get('[data-test="error"]');
  }
  // Методи для взаємодії з елементами
  typeUsername(userName) {
    this.usernameInput.type(userName);
    return this;
  }
  typePassword(password) {
    this.passwordInput.type(password);
    return this;
  }
  clickLoginButton() {
    this.loginButton.click();
    return this;
  }

  verifyError(text) {
    this.error.should("have.text", text);
    return this;
  }
}
// Експорт класу для використання в тестах
export default new LoginPage();
