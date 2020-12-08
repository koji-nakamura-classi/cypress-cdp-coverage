it('(none)', () => {
  cy.visit('http://localhost:8080/');
})

it('a', () => {
  cy.visit('http://localhost:8080/?a');
})

it('b', () => {
  cy.visit('http://localhost:8080/?b');
})

