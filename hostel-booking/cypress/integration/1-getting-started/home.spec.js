describe("render hostel", () => {
    it("render home correctly", () => {
        cy.visit("/")
        cy.get("#container").should("exist")
    })
    it("render login component correctly", () => {
        cy.visit("/login")
        cy.get("#login").should("exist")
    })
    it("render sign up componentcorrectly", () => {
        cy.visit("/register")
        cy.get("#register").should("exist")
    })
    it("render welcome component correctly", () => {
        cy.visit("/welcome")
        cy.get("#welcome").should("exist")
    })
    it("render card component correctly", () => {
        cy.visit("/card")
        cy.get("#card").should("exist")
    })
    it("render success component correctly", () => {
        cy.visit("/success")
        cy.get("#success").should("exist")
    })
    it("render boys hostel component correctly", () => {
        cy.visit("/bhostel")
        cy.get("#bhostel").should("exist")
    })
    it("render girls hostel component correctly", () => {
        cy.visit("/ghostel")
        cy.get("#ghostel").should("exist")
    })
    it("render room component correctly", () => {
        cy.visit("/room")
        cy.get("#room").should("exist")
    })
})