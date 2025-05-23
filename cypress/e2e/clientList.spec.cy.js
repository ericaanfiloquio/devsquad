describe('DevSquad tests', () => {
    it('Consult Client recently added List', () => {
      cy.visit('/list-clients')
      cy.contains("Joan Mark") // looking for the client name added
      cy.contains("joan@email.com") // looking for the recent email added
      cy.contains('Almond') // looking for part of the address
      // Confirmed that the recent Client created was succeed, it is included in the Client List. But the feature Client List failed for not being according to the UI/UX standards.
      // It is a very simple page, and it can improve a lot by:
      // 1 - Adding filter in the columns, where the user can choose what to see, how to sort the data.
      // 2 - If it is an Admin user, one should be able to edit and delete the registrations.
    
    })
  })