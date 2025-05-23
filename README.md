# DevSquad QA testings
   
You can find the E2E tests in the Client Form page at `cypress/e2e/clientForm.spec.cy.js`
   
You can find the tests made in the Client List page at `cypress/e2e/clientList.spec.cy.js`
   
You can find evidences at `evidences` folder   
   
## Bellow, you will find the full tests descriptions, devided as:
   
| Id test | Scenario | Where |
|:-------|:------------------|:--------------|
| - | General Bugs | - |
| 1 | Filling up Client Form - correctly | cypress/e2e/clientForm.spec.cy.js |
| 2 | Consult Client recently added List | cypress/e2e/clientList.spec.cy.js |
| 3 | Filling up Client Form - Being minor | cypress/e2e/clientForm.spec.cy.js |
| 4 | Filling up Client Form - Prefix of nonexistent country | cypress/e2e/clientForm.spec.cy.js |
| 5 | Filling up Client Form - Without selecting a State | cypress/e2e/clientForm.spec.cy.js |
| 6 | Filling up Client Form - Without an email address | cypress/e2e/clientForm.spec.cy.js |
| 7 | Filling up Client Form - With no Income | cypress/e2e/clientForm.spec.cy.js |
| 8 | Filling in Client Form - With incorrect Birth Date | cypress/e2e/clientForm.spec.cy.js | 

***
   
## General bugs 

**Bug*1** While testing using Cypress, I noticed the following error: `(uncaught exception) Error: Uncaught Snapshot missing on Livewire component with id: b6RmgJ47nOiHbV9yUafv` - id's component changes depending on the component required. 
   
While trying to solve it, I tried:  
   
> 1 - to "slow down" the filling of the fields within the automation, thinking that the error could be from the back-end not having enough time to give the information to the front-end; 
   
> 2 - using other attibutes, finding those more compatible with the Livewire tool;  
   
> 3 - made sure some end-points were visible before confirming them, such as the selection of country and state.
   
> 4 - This error, however, do not affect the manual test nor the automation completion, that means it did not affect the usability of the page, but needs to be checked in case it affects the system later. 
  
**Bug*2** While starting the automation, I noticed another error by just visiting the page, before clicking or filling any field: `(uncaught exception)TypeError: Cannot redefine property: disabled`.    

> 1 - Possible cause: The script is trying to redefine the disabled property of a button, which may violate the native configuration of this property in the DOM.   

> 2 - This error, however, do not affect the manual test nor the automation completion, that means it did not affect the usability of the page, but needs to be checked in case it affects the system later.   
   
## 1 - Filling in Client Form - correctly 

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/)

**Positive Scenario**
        
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:------------------|:--------------|:--------|:--------|:--------|
| 1.1 Fill in Full Name field | Field is filled with a full name; It should be mandatory a minimum of characters. | Field is mandatory, minimum of characters is 2. Field served its purpose, but error [*2] appears during automation | Passed | High | High |
| 1.2 Fill in email field | It allows to fill any email using the correct structure: 'email@email.com' | It is possible to fill any email following the correct structure, but it also allow to fill an incomplete email: 'email@email' | Failed | Medium | Medium |
| 1.3 Fill in Prefix Number fields correctly, using existing country calling code (+1) | Field should allow only numbers | Field allow only numbers correctly, up to 2 numbers only, since the database only contains countries with up to 2 numbers in the prefix. Field automatically adds the signal '+'. Field served its purpose, but error [*2] during automation | Passed | High | High |
| 1.4 Fill in Phone Number |  It allows to fill any phone number with 10 characters | It is possible to fill any type of phone number, even less than 10 characters, which is not correct Field allows only numbers; Field format is US and Canada format, but in the database we have Brazil, so it should adapt according to the country chosen. Error [*2] appeared during automation | Failed | Medium | Medium |
| 1.5 Fill in Date of birth field as a +18 user | It should allow to fill in an existing data; data format should be US one, since the website is based in US: MM-DD-YEAR | Data format is not the US one, it is: DD-MM-YEAR - understand which format it should have; Error [*2] appears during automation | Failed | Medium | Low |
| 1.6 Fill in Address field | Free field to write the full or part of the street name | It is possible to write part or the full address, it's an open choice. Although the field didn't need to be a bix box, since the Country and State, which are part of the Address are chosen later, it is interestig for the user to write down details of the address, like color or reference. We must understand if due to data privacy, is not mandatory to inform certain details as number of residence or full name of the street. The field served to its purpose, but to fully understand this details, I'd go within the business rules and criteria. Error [*2] during automation | Failed | Medium | Low |
| 1.7 Fill in Country of Residence field | Select between 3 countries available | It allows to choose among the three countries. Errors [*1] and [*2] during automation | Passed | Medium | High |
| 1.8 Fill in State field | Field is loaded after choosing the country; States should match the country chosen | Field loads with unmatching States, allowing to choose a state from a different country than the one selected. Errors [*1] and [*2] during automation | Failed | High | High |
| 1.9 Choose the Client type | Able to choose between Individual or Business | App does not allow the user to choose Individual, without any explanation showing the reason of the restriction. Errors [*1] and [*2] during automation | Failed | Medium | High |
| 1.10 Fill in Annual Income with numbers | It should allow the filling of numbers in the field | It allows filling numbers and it returns "amount" in dollars using "," between the numbers. It has no characters limit. Error [*2] during automation | Passed | High | High |
| 1.11 Check the box "I agree to the Terms and Conditions" | User should be able to mark the box by clickinh on it, indicating the user Agreed to the terms; User should be capable to access and read the Terms before marking the box | It is not possible to mark the box; user has no access to the Terms and Conditions on this page through link or as a text. Error [*2] during automation | Failed | High | High |
| 1.12 Click Submit button | User is able to upload the new Client Form and should receive a message confirming the Client registration was successfull | Submit button works well: confirmation message pops-up informing Client was created successfully. Errors [*1] and [*2]| Passed | High | High |


> **Improvment notes to talk with developers:**  
> Understand in the back-end and API what is causing the bug*1 and bug*2 reported previously. Understand if is can affect the application: find a coding solution to maintain the code stable or understand if is really the automation structure that is causing the errors, since the interface during manual tests is not affected.

***

## 2 - Consult Client recently added List 

Pre-conditions: The user has created the new Client registration and it was successfull. The user has access to the Client List: (https://qa-training.sbx.devsquad.app/list-clients)

**Positive Scenario**

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 2.1 Consult if last client registered is on the list | User is able to filter the column Name and find the client easily | There is currently no way to filter the column. The user must scroll down the page to find the client registration, as the list is sorted ASC. This result, makes the usability of this feature not intuitive and does not follow the good UX practices. | Failed | Medium | High |
  

> **Improvment notes to talk and understand with the PO and developers:**  
> The Client List should be intuitive and dynamic — users shouldn’t have to spend too much time searching for information. Filters should be added, allowing users to sort each column as they wish (ascending, descending, selecting one or any options). It should also be possible to search using partial text in fields like name, date of birth, address, and others. It is part of the user experience.  

## 3 - Filling in Client Form - being minor 

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all fields, except for Date Birth field.

**Negative Scenario**

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 3.1 Try to create a Client Registration for a under age client | Fill in birth date of '2015-05-08', the client being of 10 years old. The app should not allow to submit an under age client, showing a message error, informing the client should be at least 'x' age. Discuss with the team, what should be the criteria | The app allows us to fill in an under age client and submit. A minor should not be able to have a registration on this system. It should have a clear criteria about it, and an error alert after filling a birth date under the minimum, blocking the user to submit | Failed | High | High |

> **Improvments to talk with developers:**  
> Discuss the age criteria and understand what is the acceptable minimum age of a client.

***

## 4 - Filling in Client Form - Prefix of unexisting country

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all the fields, except for Prefix field.

**Negative Scenario**

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 4.3 Try to create a Client registration with a unexisting Prefix | Fill in a prefix '99', an unexisting country. The app should show a message informing the user should fill in with an existing prefix, or that "this prefix does not exist" | The app allows any prefix up to 2 characters, even of unexisting country. No error alert is shown. It should show an error alert, blocking the user to submit| Failed | Medium | High |

> **Improvments to talk with developers:**  
> App should not allow any kind of prefix, otherwise the phone number will not exist at all. We can limit the database, so the user can choose only the prefixes allowed, according to the needs of the application.

***

## 5 - Filling in Client Form - Without selecting a State

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all the field except State.

**Negative Scenario**

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 5.1 Try to create a Client registration without the field State filled | Do not fill anything in this field, when clicking Submit, the app should show an "error" alert | Since State is a mandatory field, the system does not allow to complete the registration without selecting a State. Error alert message appears right below the field: "The name field is required." | Passed | Medium | Low |

## 6 - Filling in Client Form - Without an email address
  
Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all the field except email address.
  
**Negative Scenario**
   
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 6.1 Try to create a Client registration with no email address filled in | The system should show an error alert once one tries to submit | An error alert message appears, informing that "The name field is required" | Passed | Medium | |

## 7 - Filling in Client Form - With no Income

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all the field except Annual Income field.
  
**Negative Scenario**
   
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 7.1 Try to create a Client registration with no Annual Income filled in | The system should show an error alert once one tries to submit | No error alert message appears, but the border of the box field Annual Income becomes red, identifying the mistake. It should be corrected and shows a clear message of error, blocking the user to submit | Failed | High | High | 

## 8 - Filling in Client Form - With incorrect Birth Date 

Pre-conditions: The user has access to the Form Page, the page is on and it is functioning correctly: (https://qa-training.sbx.devsquad.app/). The user has filled all the field except Date Birth field.
  
**Negative Scenario**
   
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 8.1 Try to create a Client registration with an unexisting birth date | The system should show an error alert once one tries to submit | No error alert message appears, it is possible to submit a client with any birth date, such as: '1001-05-08'. It should be corrected and shows a message of error, blocking the user to submit | Failed | High | High | 

