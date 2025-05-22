# DevSquad testings

You can find the E2E tests at cypress/e2e.

## 1 - clientForm.spec.cy.js
        Pre-conditions: The user has access to the Form Page, and it is functioning correctly: https://qa-training.sbx.devsquad.app/

        Filling in Client Profile Form
        
| Steps | Expected Results | Real Results | Status | Severity | Priority |
|:-------|:------------------|:--------------|
| 1.1 Fill in Full Name field | Field is filled with the full name correctly; Field needs to be mandatory with a minimum of caracters | Field is mandatory, minimum of caracterers is 2 | Passed | High | |
| 1.2 Fill in Email Address field using correct structure of an email: name@email.com | The app accepts only e-mails with the correct structure | The app do not allow email address with not @ in it; Field is mandatory | Passed | High | |
| 1.3 Fill in Phone Number fields correctly, using existing country calling code (+1) | Phone number is accepted and the app adds the signal +, formatting correctly | Adding the number, the system automatically fills the signal + in the beginning | Passed | High | |
| 1.4 Fill in Date of birth field as a +18 user | Date is shown in the US format: MM-DD-YEAR; System should not allowed minors | Data format is not the US one, it is: DD-MM-YEAR; The application allows minors. | Failed | Medium | Low |
| 1.5 Fill in Address field | Field should have certain requirements: minimum of caracter. We must understand if due to privacy of data the user is not required to inform certaint details as number of residence or building, full name of street | It is a free writing field; criteria should be reviwed | Passed | Medium | Low |
| 1.6 Fill in Country of Residence field | Select between 3 countries available | App allows to choose among the three countries | Passed | Medium | |
| 1.7 Fill in State field | Field is loaded after choosing the country; States should match the country chosen | Field loads with unmatching States to the Country, allowing to choose a state from a different country than the one selected | Failed | High | High |
| 1.8 Choose the Client type | Able to choose between Individual or Business | App does not allow the user to choose Individual, without any explanation showing the reason of the restriction | Failed | | |

## 2 - clientList.spec.cy.js