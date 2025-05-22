describe('DevSquad tests', () => {
    it('Consult Client List', () => {
      cy.visit('/list-clients')
      cy.contains("Joe Smith")
      cy.contains("joes@email.com") // Confirmed that the recent Client created was succeed, it is included in the Client List
    })
  })