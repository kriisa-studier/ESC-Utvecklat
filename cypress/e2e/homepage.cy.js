Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("Homepage test: server + element", () => {

  it("should load on localhost:5504 and show figcaption", () => {
    cy.visit("/");

    cy.url().should("include", "5504");

    cy.get("figcaption")
      .should("exist")
      .and("have.text", "Hacker Escape Rooms");
  });

});
