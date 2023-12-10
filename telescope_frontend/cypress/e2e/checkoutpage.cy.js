// cypress/integration/login.spec.js

describe('checkout Page', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('/');
    });
  
   
  
    it('checkout page Ui validation', () => {
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
    cy.get('.Navbar').find('.ShopBag').click();
     // Intercept the API request to add products to the cart
     cy.intercept('POST', '**/api/cart/add-to-cart').as('addToCart');

      // Wait for the element to exist
    cy.get('.card-inner1').should('exist');
      // Access an element by its class
    cy.get('.card-inner1').find('.buy').first().click();
      // Click the shopping bag icon
    cy.get('.Navbar').find('.Cart').click();

    // Check if the URL has changed to /shop
    cy.url().should('include', '/cart');
    cy.contains('Your Cart');
    cy.contains('Proceed to Checkout').click();
    cy.url().should('include', '/checkout');
    cy.contains('checkout');
    });

   
});
