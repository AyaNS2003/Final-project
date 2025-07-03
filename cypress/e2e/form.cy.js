/* eslint-disable no-undef */
describe("forms test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  //happy path
  it("should add a new card when user enters valid input and submit", () => {
    cy.contains("Card Sets").click();
    cy.contains("Web Dev Flash Cards").click();
    cy.contains("Add New Card").click();
    cy.get("[data-cy=card_form]").should("exist");

    cy.get("input[name=termInput]").type("test term");
    cy.get("input[name=descriptionInput]").type("test description");
    cy.get("input[type=submit]").click();

    cy.contains("test term").should("exist");
    cy.contains("test description").should("exist");
  });

  it("should add a new set when user enters valid input and submit", () => {
    cy.contains("Card Sets").click();
    cy.contains("Add New Set").click();
    cy.get("[data-cy=set_form]").should("exist");

    cy.get("input[name=titleInput]").type("test set");
    cy.get("input[type=submit]").click();

    cy.contains("test set").should("exist");
  });

  //unhappypath
  it("should not add a new card when user enters invalid input and submit", () => {
    cy.contains("Card Sets").click();
    cy.contains("Web Dev Flash Cards").click();
    cy.contains("Add New Card").click();

    cy.get("[data-cy=card_form]").should("exist");

    //case1: empty term
    cy.get("input[name=descriptionInput]").type("test description");
    cy.get("input[type=submit]").click();
    cy.contains("TERM CANNOT BE EMPTY").should("exist");

    //case2: empty decription
    cy.get("input[name=termInput]").type("test term");
    cy.get("input[name=descriptionInput]").clear();
    cy.get("input[type=submit]").click();
    cy.contains("DESCRIPTION CANNOT BE EMPTY").should("exist");

    //case3: empty term and decription
    cy.get("input[name=termInput]").clear();
    cy.get("input[name=descriptionInput]").clear();
    cy.get("input[type=submit]").click();
    cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
  });

  it("should not add a new set when user enters invalid input and submit", () => {
    cy.contains("Card Sets").click();
    cy.contains("Add New Set").click();

    cy.get("[data-cy=set_form]").should("exist");

    cy.get("input[type=submit]").click();

    cy.contains("TITLE CANNOT BE EMPTY").should("exist");
  });
});
