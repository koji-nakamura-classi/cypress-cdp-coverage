# Cypress CDP Coverage

Cypress plugin for JS/CSS coverage using Chrome DevTools Protocol

## Usage

Add to your `cypress/support/index.js` file

```
before(() => {
  cy.task('startCoverage');
});

after(() => {
  cy.task('stopCoverage');
});
```

Register tasks in your `cypress/plugins/index.js` file

```
module.exports = (on, config) => {
  on('task', {
    ...require('cypress-cdp-coverage')
  });
}
```
