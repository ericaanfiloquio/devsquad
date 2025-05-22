describe('DevSquad tests', () => {

  const selectorsList = {
    fullName: "[label='Full name']",
    emailAddress: "[label='Email Address']",
    countryPrefix: "#countryPrefix",
    phoneNumber: "[name='phone']",
    dateBirth: "[label='Date of birth']",
    addressField: "[label='Address']",
    countryResidence: "[label='Country of Residence']",
    stateResidence: "[label='State']",
    clientType: "[role='radio']",
    annualIncome: "[name='annualIncome']",
    termsConditionsBox: "[role='checkbox']",
    submitButton: "#btn-submit",
    successfullMessage: ".max-w-sm"
  }

  it('Filling up Client Form', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Joan Mark')
    cy.get(selectorsList.emailAddress).click().type('joan@email.com')
    cy.get(selectorsList.countryPrefix).click().type('1')
    cy.get(selectorsList.phoneNumber).click().type('5558889999')
    cy.get(selectorsList.dateBirth).click().type('2000-05-08')
    cy.get(selectorsList.addressField).click().type('1515 Almond road')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('United States').should('be.visible').click()
    cy.wait(500) // allow States to load - trying to avoid error with Livewire
    cy.get(selectorsList.stateResidence).click()
    cy.contains('Arkansas').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    cy.get(selectorsList.annualIncome).type('20000')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.successfullMessage) // This is to make sure the confirmation was received.

    // Error regarding Livewire while it tries to connect and sincronize back-end with front-end.
  })
})