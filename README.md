# Cypress

This POC provides the information about simple wrapper test cases by using cypress.

## What is Cypress?

[Cypress](https://www.cypress.io/features/) is a front end testing tool for the realtime web applications. This enables developer/tester to write faster, easier and more reliable tests.

Getting Start with Cypress  - [https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

We have setup cypress using `npm`.

### Installing and Running

- Open terminal and setting up the root project directory.
- Run the `npm install`

Above is enough for installing Cypress.

- open the Cypress test runner application via the following terminal command.
- Run `npm run cypress:open` from your root directory.
- After a some times, the Cypress Test Runner will launch.


### Syncfusion Testing Helper.

- This is POC Sample that we create our helper in `/cypress/integration/helpers` folder.

## Using Our Test Helper

In this POC we have created the DropDownList Component Testing Helper. Following steps to use our Helper.

```typescript
    import {ClassName} from '{helperPath}';
```

- Then the imported class is used to initialize the helper.

```typescript
    curObj = new ClassName(args,SectorFunction);
```

- get the helper function to test the selectors elements.

```typescript
    curObj.getElement().should('have.value', '');
```