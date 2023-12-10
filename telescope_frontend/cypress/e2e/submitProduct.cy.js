// cypress/integration/product_upload.cy.js

describe('Submit product Page routing setup', () => {
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
     cy.contains('Upload Product').click();
    });
  
    it('should fill the Product Upload form, submit, and intercept API call', () => {
      // Intercept the product upload request and alias it
      cy.intercept('POST', '**/api/add-product').as('productUploadRequest');
  
      // Fill the Product Upload form with valid data
      cy.get('input[name="productname"]').type('Test Product');
      cy.get('input[name="productcost"]').type('100');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="image"]').type('https://drive.google.com/file/example');
      cy.get('textarea[name="productdescription"]').type('This is a test product.');
      cy.get('input[type="radio"][value="new"]').check();
  
      // Submit the form
      cy.get('button').contains('Submit').click();
  
      /// Wait for the product upload request to complete
    cy.wait('@productUploadRequest').then((interception) => {
        // Check the request payload
        const { body } = interception.request;
        expect(body.name).to.equal('Test Product');
        expect(body.description).to.equal('This is a test product.');
        expect(body.price).to.equal('100');
        
        // Check the redirected URL (change this based on your app logic)
        cy.url().should('include', '/SubmitProduct');
  
       cy.contains('Product is Successfully added');
      });
   
    });
  });
  