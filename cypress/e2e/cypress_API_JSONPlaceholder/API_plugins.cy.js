/// <reference types="cypress" />

describe("API testing by using 'cypress-plugin-api' plugin", () => {
  beforeEach(() => {
    cy.visit("https://jsonplaceholder.typicode.com/");
  });

  it("Getting all the existing photos", () => {
    //В даному запиті ми використовуємо лише назву запита (GET) та URL-шлях
    cy.api("GET", "https://jsonplaceholder.typicode.com/photos").should(
      (response) => {
        //Функція обробки відповіді should, де можна виконати будь-які перевірки
        const body = response.body;
        expect(response.status).to.eq(200);
        expect(body.length).to.be.eq(5000);
        expect(body[10].url).to.eq("https://via.placeholder.com/600/1ee8a4");
      }
    );
  });

  it("Posting a new User", () => {
    const newUser = {
      name: "Olena Kozoriz",
      username: "okozoriz",
      email: "okozoriz@ukr.net",
      address: {
        street: "Molodizhna",
        suite: "2",
        city: "Chubynske",
        zipcode: "19840",
      },
      phone: "38099-611-87-66",
      website: "olenakozoriz.net",
      company: {
        name: "Allvue Systems",
        catchPhrase: "synergize scalable supply-chains",
      },
    };
    //В даному запиті ми використовуємо назву запита (POST), URL-шлях та параметри запиту у вигляді об'єкту,винесеного в окрему константу
    cy.api(
      "POST",
      "https://jsonplaceholder.typicode.com/users",
      newUser
    ).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.email).to.be.eq(newUser.email);
      expect(response.body.id).to.be.eq(11);
      expect(response.body.company.catchPhrase).to.contain("synergize");
    });
  });

  it("Deleting the Post 10", () => {
    const deletedPost = {
      userId: 1,
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    };
    cy.api(
      "DELETE",
      "https://jsonplaceholder.typicode.com/posts/10/",
      deletedPost
    ).should((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
