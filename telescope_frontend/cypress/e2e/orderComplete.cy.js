// cypress/integration/login.spec.js

describe('order complete Page', () => {
    beforeEach(() => {
      // Visit the login page before each test
      cy.visit('/');
    });
  
   
  
    it('OrderComplete page Ui validation', () => {
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
    // Fill the contact information
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#phoneNumber').type('1234567890');
    cy.get('#emailAddress').type('john.doe@example.com');

    // Fill the shipping address
    cy.get('#streetAddress').type('123 Main St');
    cy.get('#country').type('United States');
    cy.get('#city').type('Anytown');
    cy.get('#state').type('CA');
    cy.get('#zipCode').type('12345');

    // Fill the billing address
    cy.get('#billingStreetAddress').type('456 Billing St');
    cy.get('#billingCountry').type('United States');
    cy.get('#billingCity').type('Anytown');
    cy.get('#billingState').type('CA');
    cy.get('#billingZipCode').type('67890');

    

    cy.contains('checkout').click();
    cy.contains('Thank you for Ordering');

    });

   
});
