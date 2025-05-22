# DevSquad testings

> You can find the E2E tests at cypress/e2e/clientForm.spec.cy.js
> You can find the tests made in the Client List page at cypress/e2e/clientList.spec.cy.js
> You can find evidences at Evidences folder

***

> **General bugs**  
> [*1] While testing using Cypress, I noticed the following error: `(uncaught exception) Error: Uncaught Snapshot missing on Livewire component with id: b6RmgJ47nOiHbV9yUafv` - id's component changes depending on the component required. While trying to solve it, I tried:  
> 1 - to "slow down" the filling of the fields within the automation, thinking that the error could be from the back-end not having enough time to give the information to the front-end; 
> 2 - using other attibutes, finding those more compatible with the Livewire tool;  
> 3 - made sure some end-points were visible before confirming them, such as the selection of country and state.
> 4 - This error, however, do not affect the manual test nor the automation completion, that means it did not affect the usability of the page, but needs to be checked in case it affects the system later. 
  
> [*2]While starting the automation, I noticed another error by just visiting the page, before clicking or filling any field: `(uncaught exception)TypeError: Cannot redefine property: disabled`. 
> 1 - Possible cause: The script is trying to redefine the disabled property of a button, which may violate the native configuration of this property in the DOM. 
> 2 - This error, however, do not affect the manual test nor the automation completion, that means it did not affect the usability of the page, but needs to be checked in case it affects the system later.   

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/)

## 1 - Testing steps: clientForm.spec.cy.js

**Positive Scenario: Trying to Create a New Client by filling in the Client Profile Form**
        
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:------------------|:--------------|:--------|:--------|:--------|
| 1.1 Fill in Full Name field | Field is filled with a full name; It should be mandatory a minimum of caracteres. | Field is mandatory, minimum of caracteres is 2. Field served its purpose, but error [*2] appears during automation | Passed | High | High |
| 1.2 Fill in Email Address field using correct structure of an email: name@email.com | The app accepts only e-mails with the correct structure | The app do not allow email address with not @ in it; Field is mandatory. Field served its purpose; error [*2] during automation | Passed | High | High |
| 1.3 Fill in Prefix Number fields correctly, using existing country calling code (+1) | Field should allow only numbers | Field allow only numbers correctly, up to 2 numbers only, since the database only contains countries with up to 2 numbers in the prefix. Field automatically adds the signal '+'. Field served its purpose, but error [*2] during automation | Passed | High | High |
| 1.4 Fill in Phone Number | Field allows only numbers | Field format is US and Canada format, but in the database we have Brazil, do it should adapt according to the country chosen. Error [*2] appeared during automation | Failed | Medium | Medium |
| 1.5 Fill in Date of birth field as a +18 user | It should allow to fill in an existing data; data format should be US one, since the website is based in US: MM-DD-YEAR | Data format is not the US one, it is: DD-MM-YEAR - understand which format it should have; Error [*2] appears during automation | Failed | Medium | Low |
| 1.6 Fill in Address field | Free field to write the full or part of the street name | It is possible to write part or the full address, it's an open choice. Although the field served its purpose, we must understand if due to privacy of data, is not mandatory to inform certain details as number of residence or full name of the street. Error [*2] during automation | Check error | Medium | Low |
| 1.7 Fill in Country of Residence field | Select between 3 countries available | It allows to choose among the three countries. Errors [*1] and [*2] during automation | Passed | Medium | High |
| 1.8 Fill in State field | Field is loaded after choosing the country; States should match the country chosen | Field loads with unmatching States, allowing to choose a state from a different country than the one selected. Errors [*1] and [*2] during automation | Failed | High | High |
| 1.9 Choose the Client type | Able to choose between Individual or Business | App does not allow the user to choose Individual, without any explanation showing the reason of the restriction. Errors [*1] and [*2] during automation | Failed | Medium | High |
| 1.10 Fill in Annual Income with numbers | It should allow the filling of numbers in the field | It allows filling numbers and it returns "amount" in dollars using "," between the numbers. It has no caracteres limit. Error [*2] during automation | Passed | High | High |
| 1.11 Check the box "I agree to the Terms and Conditions" | User should be able to mark the box by clickinh on it, indicating the user Agreed to the terms; User should be capable to access and read the Terms before marking the box | It is not possible to mark the box; user has no access to the Terms and Conditions on this page through link or as a text. Error [*2] during automation | Failed | High | High |
| 1.12 Click Submit button | User is able to upload the new Client Form and should receive a message confirming the Client registration was successfull | Submit button works well: confirmation message pops-up informing Client was created successfully. Errors [*1] and [*2]| Passed | High | High |
   
***

## 2 - Testing steps: clientList.spec.cy.js

Pre-conditions: The user has created the new Client registration and it was successfull. The user has access to the Client List: (https://qa-training.sbx.devsquad.app/list-clients)

**Positive Scenario: Try to consult the Client List in order to find the recent created Client**

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 2.1 Consult if last client registered is on the list | User is able to filter the column Name and find the client easily | There is currently no way to filter the column. The user must scroll down the page to find the client registration, as the list is sorted ASC. This result, makes the usability of this feature not intuitive and does not follow the good UX practices. | Failed | Medium | High |
  
> **Improvment notes to talk and understand with the PO and developers:**  
> The Client List should be intuitive and dynamic — users shouldn’t have to spend too much time searching for information. Filters should be added, allowing users to sort each column as they wish (ascending or descending). It should also be possible to search using partial text in fields like name, date of birth, address, and others. It is part of the user experience.  
