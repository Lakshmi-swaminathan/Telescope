// cypress/integration/login.spec.js

describe('product Upload Page', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('/');
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
      

    });
  
   
  
    it('should navigate to the upload product page', () => {
        cy.contains('Upload Product').click();
        cy.contains('Pleased Upload the Product');
        cy.contains('Submit');
    });

   
});
