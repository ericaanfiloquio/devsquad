describe('DevSquad tests', () => {
  it.skip('Filling up Client Form', () => {
    cy.visit('https://qa-training.sbx.devsquad.app/#')
    cy.get("[label='Full name']").click().type("Joan Smith")
    cy.get("[label='Email Address']").click().type("joes@email.com")
    cy.get("#countryPrefix").click().type("1")
    cy.get("[name='phone']").click().type("5558889999")
    cy.get("[label='Date of birth']").click().type("2000-05-08")
    cy.get("[label='Address']").click().type("1515 Almond road")
    cy.get("[label='Country of Residence']").should('be.visible').click()
    cy.contains("United States").should('be.visible').click()
    cy.wait(500) // allow States to load - trying to avoid error with Livewire
    cy.get("[label='State']").click()
    cy.contains("Arkansas").should('be.visible').click()
    cy.get("[role='radio']").eq(1).click()
    cy.get("[name='annualIncome']").type('20000')
    cy.get("[role='checkbox']").click()
    cy.get("#btn-submit").click()
    cy.get(".max-w-sm")
    cy.contains("successfully") // This is to make sure the confirmation was received.
    // Error regarding Livewire while it tries to connect and sincronize back-end with front-end.
  })
})