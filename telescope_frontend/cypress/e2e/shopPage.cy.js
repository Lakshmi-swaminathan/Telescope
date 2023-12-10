// cypress/integration/login.spec.js

describe('Shop Page', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('/');
    });
  
   
  
    it('should navigate to the homepage on successful login', () => {
      // Intercept the login request and force it to succeed
      cy.intercept('POST', '**/user/login-user', {
        statusCode: 200,
        body: {
          message: 'Login successful',
        },
      }).as('loginRequest');
  
      // Enter valid credentials and submit the form
      cy.get('.form-input[type="email"]').type('lakshmiswaminathan08@gmail.com');
      cy.get('.form-input[type="password"]').type('test');
      cy.contains('Submit').click();
  
      // Wait for the login request to complete
      cy.wait('@loginRequest');
  
      // Verify that the user is redirected to the homepage
      cy.url().should('include', '/homepage');
      // Click the shopping bag icon
    cy.get('.Navbar').find('.shopBag').click();

    // Check if the URL has changed to /shop
    cy.url().should('include', '/Shop');
    });

   
});
