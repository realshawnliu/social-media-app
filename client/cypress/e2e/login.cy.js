describe("Login Page", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("displays login form", function () {
    cy.get("form").should("be.visible");
    cy.get("input[name=email]").should("be.visible");
    cy.get("input[name=password]").should("be.visible");
    cy.get("button[type=submit]").should("be.visible");
  });

  it("can login with correct credentials", function () {
    const email = "1@gmail.com";
    const password = "1@gmail.com";

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("button[type=submit]").click();

    cy.url().should("include", "/home");
  });

  it("shows an error when using wrong credentials", function () {
    const email = "wrong@email.com";
    const password = "wrongpassword";

    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(password);
    cy.get("button[type=submit]").click();

    cy.get('[data-testid="ErrorOutlineOutlinedIcon"]').should("be.visible");
  });
});
