describe('base checks on Index page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the index page', () => {
    cy.get('h1').contains('AMAP Helia')
  })

  it('navigates to the Principes page', () => {
    cy.get('a[href="/principes"]').eq(0).click();
    cy.url().should("include", "/principes")
    cy.get('h1').contains(/Principes/i)
  })

  it('navigates to the Nouvelles page', () => {
    cy.get('a[href="/nouvelle"]').eq(0).click();
    cy.url().should("include", "/nouvelle")
    cy.get('h1').contains(/Dernières nouvelles/i)
  })
})

describe('validate Nouvelles', () => {
  it('should have 7 posts', () => {
    cy.visit('/nouvelle')
    cy.get('ul#blog-list li').should('have.length', 7);
  })
})