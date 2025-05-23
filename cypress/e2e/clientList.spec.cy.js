describe('DevSquad tests', () => {
    it('Consult Client recently added List', () => {
      cy.visit('/list-clients')
      cy.contains("Joan Mark") // looking for the client name added
      cy.contains("joan@email.com") // looking for the recent email added
      cy.contains('Almond') // looking for part of the address
      // Confirmed that the recent Client created was succeed, it is included in the Client List. But the feature Client List failed for not being according to the UI/UX standards.
    })
  })