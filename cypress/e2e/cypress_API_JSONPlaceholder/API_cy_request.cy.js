/// <reference types="cypress" />
describe("API testing by using 'cy.request'", () => {
  beforeEach(() => {
    cy.visit("https://jsonplaceholder.typicode.com/");
  });

  it("Getting all the users' albums", () => {
    //В даному запиті ми використовуємо лише назву запита (GET) та URL-шлях
    cy.request(
      "GET",
      "https://jsonplaceholder.typicode.com/users/1/albums"
    ).then((response) => {
      //Функція обробки відповіді then, де можна виконати будь-які перевірки
      const body = response.body;
      expect(body.length).to.be.eq(10);
      expect(body[0].title).to.eq("quidem molestiae enim");
    });
  });

  it("Posting a new comment for the Post 3", () => {
    const newComment = {
      name: "Dorian Grey",
      email: "doriangrey@ukr.net",
      body: "You must use your surname in full. Your first name should either be your full first name, or a commonly recognised variation or the initial of your first name.",
      postId: 3,
    };
    //В даному запиті ми використовуємо назву запита (POST), URL-шлях та параметри запиту у вигляді об'єкту,винесеного в окрему константу
    cy.request(
      "POST",
      "https://jsonplaceholder.typicode.com/posts/3/comments",
      newComment
    ).then((response) => {
      expect(response.body.email).to.be.eq(newComment.email);
      expect(response.body.id).to.be.eq(501);
      expect(response.body.body).to.contain(
        "You must use your surname in full"
      );
    });
  });

  it("Editing the comment for the Post 1", () => {
    const editedComment = {
      userId: 1,
      id: 1,
      title: "Mariah Angela Carey",
      body: "laudantium enim quasi est quidem magnam voluptate",
    };
    cy.request(
      "PUT",
      "https://jsonplaceholder.typicode.com/posts/1/",
      editedComment
    ).then((response) => {
      expect(response.body.title).to.contain("Mariah");
      expect(response.body).to.have.property(
        "body",
        "laudantium enim quasi est quidem magnam voluptate"
      );
    });
  });
});
