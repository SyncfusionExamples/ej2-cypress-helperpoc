# Cypress

This POC provides the information about simple wrapper test cases by using cypress.

## What is Cypress?

[Cypress](https://www.cypress.io/features/) is a front end testing tool for the realtime web applications. This enables developer/tester to write faster, easier and more reliable tests.

## Setup

Cypress is install via the `npm`. Please follow the below steps for installing cypress.

### Installing and Running

- Open terminal and setting up the root project directory.
- Run the `npm install cypress`

Above is enough for installing Cypress.

- open the Cypress test runner application via the following terminal command.
- Run `npx cypress open` from your root directory.
- After a some times, the Cypress Test Runner will launch.

### Testing

- Create the new spec file called `home_page_spec.js` for hosting the application.
- Then create the sample spec helper file which is to be tested by using cypress.
- Here we can use the wrapper for testing the test cases in cypress as well as protractor.

### Creating Helper

```typescript
export class DropdownHelper {

    constructor(id, wrapperFn) {
        this.id = id;
        this.wrapperFn = wrapperFn
        return this;
    }

    selector(arg) {
        return (this.wrapperFn ? this.wrapperFn(arg) : arg);
    }
```

- The above class is import in the cypress's `home_page_spec.js`

```typescript
import {export class name in helper} from '{helperPath}';
```

- Then the imported class is used to create the object instance.

- By the above scenario we can create as follows

```typescript
  it('successfully loads', function (done) {
        cy.visit('').then(function () {
            curDropDown = new DropdownHelper('icons', cy.get);
            done();
        });
    });

    it('Simple test1', function () {
        curDropDown.getElement().should('have.value', '');
    });
```
- Here the `cy.get` is a selector for element.

## How To Run This POC

- Clone/download it into locally.
- Extract the node_modules.
- Open the cypress test runner by executing the `npx cypress open` command from the project's root folder.
- Then Cypress Test Runner will launch. Click the  `home_page_spec.js` file in the `cypress/integration/` location.
- And also check the helper function file Cypress in `testDropdownlist.js` at
`cypress/integration/helpers/dropdownlistHelper/`