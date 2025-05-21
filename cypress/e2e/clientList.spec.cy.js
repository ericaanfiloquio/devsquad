describe('DevSquad tests', () => {
    it('Consult Client List', () => {
      cy.visit('https://qa-training.sbx.devsquad.app/list-clients')
      cy.contains("Joe Smith")
      cy.contains("joes@email.com") // Confirmed that the recent Client created was succeed, it is included in the Client List
    })
  })