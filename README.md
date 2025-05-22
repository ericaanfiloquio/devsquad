# DevSquad testings

You can find the E2E tests at cypress/e2e.

## 1 - clientForm.spec.cy.js

Pre-conditions: The user has access to the Form Page, and it is functioning correctly: (https://qa-training.sbx.devsquad.app/)

Filling in Client Profile Form
        
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:------------------|:--------------|:--------|:--------|:--------|
| 1.1 Fill in Full Name field | Field is filled with the full name correctly; Field needs to be mandatory with a minimum of caracters | Field is mandatory, minimum of caracterers is 2 | Passed | High | |
| 1.2 Fill in Email Address field using correct structure of an email: name@email.com | The app accepts only e-mails with the correct structure | The app do not allow email address with not @ in it; Field is mandatory | Passed | High | |
| 1.3 Fill in Phone Number fields correctly, using existing country calling code (+1) | Phone number is accepted and the app adds the signal +, formatting correctly | Adding the number, the system automatically fills the signal + in the beginning | Passed | High | |
| 1.4 Fill in Date of birth field as a +18 user | Date is shown in the US format: MM-DD-YEAR; System should not allowed minors | Data format is not the US one, it is: DD-MM-YEAR; The application allows minors. | Failed | Medium | Low |
| 1.5 Fill in Address field | Field should have certain requirements: minimum of caracter. We must understand if due to privacy of data the user is not required to inform certaint details as number of residence or building, full name of street | It is a free writing field; criteria should be reviwed | Passed | Medium | |
| 1.6 Fill in Country of Residence field | Select between 3 countries available | App allows to choose among the three countries | Passed | Medium | |
| 1.7 Fill in State field | Field is loaded after choosing the country; States should match the country chosen | Field loads with unmatching States to the Country, allowing to choose a state from a different country than the one selected | Failed | High | High |
| 1.8 Choose the Client type | Able to choose between Individual or Business | App does not allow the user to choose Individual, without any explanation showing the reason of the restriction | Failed | Medium | High |
| 1.9 Fill in Annual Income with numbers | Fill the amount using only numbers; the app should not allow other type of caracteres | | | High | |
| 1.10 Check the box "I agree to the Terms and Conditions" | By clicking in the box mark, this one should be filled, indicating the user Agreed to the terms; User should be capable to access and read the Terms before marking the box | The app does not allow to mark the box; user has no access to the Terms and Conditions on this page through link or by seeing the text rolling the page down | Failed | High | High |
| 1.11 Click Submit button | User is able to upload the new Client Form and should receive a message confirming the Client registration was successfull | Submit button works well: confirmation message pops-up informing Client was created successfully | Passed | High | |

<!-- Understand what is causing the back-end fail;
    Test Negative Scenarios: Incomplete Address field; Incomplete Full Name;
    Use other attibutes "wire" to avoid the back-end error  -->
 
**While testing using Cypress, I noticed the following error: `(uncaught exception) Error: Uncaught Snapshot missing on Livewire component with id: b6RmgJ47nOiHbV9yUafv`. While trying to solve it, I tried:
1 - to "slow down" the filling of the fields within the automation, thinking that the error could be from the back-end not having enough time to give the information to the front-end; 
2 - using other attibutes, finding those more compatible with the Livewire tool;
3 - made sure some end-points were visible before confirming them, such as the selection of country and state.**
***

## 2 - clientList.spec.cy.js

Pre-conditions: The user has created the new Client registration and it was successfull. The user has access to the Client List: (https://qa-training.sbx.devsquad.app/list-clients)

Consulting Client List

| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:-----------------|:--------------|:--------|:--------|:--------|
| 2.1 Consult if last client registered is on the list | User is able to filter the column Name and find the client easily | There is currently no way to filter the column. The user must scroll down the page to find the client registration, as the list is sorted ASC. The usability of this search feature is not intuitive and does not follow good UX practices. | Failed | Medium | High |

**The Client List should be intuitive and dynamic — users shouldn’t have to spend too much time searching for information. Filters should be added, allowing users to sort each column as they wish (ascending or descending). It should also be possible to search using partial text in fields like name, date of birth, address, and others. It is part of the user experience**
