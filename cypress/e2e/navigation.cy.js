/* eslint-disable no-undef */
describe("navigating test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to page contains card when clicking on card set", () => {
    cy.contains("Card Set").click();
    cy.get(".cardPageContainer").should("be.visible");
  });
  it("should navigate to about page when clicking on about", () => {
    cy.contains("About").click();
    cy.get(".aboutContainer").should("be.visible");
  });
  it("should navigate to home page page when clicking on home", () => {
    cy.contains("Home").click();
    cy.get(".homeContainer").should("be.visible");
  });
});
