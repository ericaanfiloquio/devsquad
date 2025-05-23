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
    successfullMessage: ".max-w-sm",
    errorAlert: "[data-flux-error='']"
  }

  it('Filling up Client Form - correctly', () => {
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
    cy.get(selectorsList.successfullMessage) // This is to make sure the confirmation was received. PASSED.

    // Error regarding Livewire while it tries to connect and sincronize back-end with front-end.
  })
  it('Filling up Client Form - being minor', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Henry August')
    cy.get(selectorsList.emailAddress).click().type('Henry@email.com')
    cy.get(selectorsList.countryPrefix).click().type('55')
    cy.get(selectorsList.phoneNumber).click().type('36584525')
    cy.get(selectorsList.dateBirth).click().type('2015-05-08')
    cy.get(selectorsList.addressField).click().type('20 Augustus')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('Brazil').should('be.visible').click()
    cy.wait(500) // allow States to load - trying to avoid error with Livewire
    cy.get(selectorsList.stateResidence).click()
    cy.contains('Rio de Janeiro').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    cy.get(selectorsList.annualIncome).type('10')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
     // There is no age limit: while exploring the application, it didn't show any "error alert" informing that the Client should not be under certain age (18 or 16, for example). FAILED.
  })

  it('Filling up Client Form - Prefix of unexisting country', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Maria August')
    cy.get(selectorsList.emailAddress).click().type('maria@email.com')
    cy.get(selectorsList.countryPrefix).click().type('99')
    cy.get(selectorsList.phoneNumber).click().type('36584525')
    cy.get(selectorsList.dateBirth).click().type('2000-05-08')
    cy.get(selectorsList.addressField).click().type('20 Augustus')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('Brazil').should('be.visible').click()
    cy.wait(500) // allow States to load - trying to avoid error with Livewire
    cy.get(selectorsList.stateResidence).click()
    cy.contains('Rio de Janeiro').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    cy.get(selectorsList.annualIncome).type('10')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
     // Prefix: the application should not allow a unexisting prefix number. An "error alert" should pop-up, but it doesn't. It allows that the registration is completed. FAILED.
  })

  it('Filling up Client Form - Without selecting a State', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Nav August')
    cy.get(selectorsList.emailAddress).click().type('nav@email.com')
    cy.get(selectorsList.countryPrefix).click().type('1')
    cy.get(selectorsList.phoneNumber).click().type('36584525')
    cy.get(selectorsList.dateBirth).click().type('2000-05-08')
    cy.get(selectorsList.addressField).click().type('20 Augustus')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('Canada').should('be.visible').click()
    // cy.get(selectorsList.stateResidence).click()
    // cy.contains('Ontario').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    cy.get(selectorsList.annualIncome).type('10')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorAlert).contains('required')
     // State is a mandatory field. The system does not allow to complete the registration without selecting a State. Error alert message appears right below the field: "The name field is required." PASSED.

  })

  it('Filling up Client Form - Without an email address', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Nav August')
    cy.get(selectorsList.emailAddress).click()
    cy.get(selectorsList.countryPrefix).click().type('1')
    cy.get(selectorsList.phoneNumber).click().type('36584525')
    cy.get(selectorsList.dateBirth).click().type('2000-05-08')
    cy.get(selectorsList.addressField).click().type('20 Augustus')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('Canada').should('be.visible').click()
    cy.get(selectorsList.stateResidence).click()
    cy.contains('Ontario').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    cy.get(selectorsList.annualIncome).type('10')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorAlert).contains('required')
     // The system does not allow to select a State without having selected a Country first, which is correct. A message appears informing the "The name field is required." PASSED
     
  })

  it('Filling up Client Form - With no Income', () => {
    cy.visit('/#')
    cy.get(selectorsList.fullName).type('Michelle')
    cy.get(selectorsList.emailAddress).click().type('michelle@test.com')
    cy.get(selectorsList.countryPrefix).click().type('1')
    cy.get(selectorsList.phoneNumber).click().type('36584525')
    cy.get(selectorsList.dateBirth).click().type('2000-05-08')
    cy.get(selectorsList.addressField).click().type('20 Augustus')
    cy.get(selectorsList.countryResidence).click()
    cy.contains('Canada').should('be.visible').click()
    cy.get(selectorsList.stateResidence).click()
    cy.contains('Ontario').should('be.visible').click()
    cy.get(selectorsList.clientType).eq(1).click()
    // cy.get(selectorsList.annualIncome).type('10')
    cy.get(selectorsList.termsConditionsBox).click()
    cy.get(selectorsList.submitButton).click()
    cy.get(selectorsList.errorAlert)
     // The field "Annual Income" is mandatory, but it does not appear the "error alert" message. The border of the box field turns red when not filled in and try to submit. But to follow the same standard as the order mandatory fields, the message "The name field is required" should appear. FAILED.
     
  })
})