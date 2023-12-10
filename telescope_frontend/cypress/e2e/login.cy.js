// cypress/integration/login.spec.js

describe('Login Page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('/');
  });

  it('should display the login form', () => {
    // Ensure the login form elements are present
    cy.get('.form-label').contains('Email');
    cy.get('.form-label').contains('Password');
    cy.get('.submit-button').contains('Submit');
    cy.get('.sign-up-button').contains("Don't have an account? Sign Up");
  });

  it('should show an error message for invalid credentials', () => {
    // Intercept the login request and force it to fail
    cy.intercept('POST', '**/user/login-user', {
      statusCode: 401,
      body: {
        message: 'Invalid credentials',
      },
    }).as('loginRequest');

    // Enter invalid credentials and submit the form
    cy.get('input[type="email"]').type('invalid@example.com');
    cy.get('input[type="password"]').type('invalidpassword');
    cy.get('.submit-button').click();

    // Wait for the login request to complete
    cy.wait('@loginRequest');

    // Verify that an error message is displayed
    cy.get('.error-message').should('contain', 'Invalid credentials');
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
    cy.get('input[type="email"]').type('lakshmiswaminathan08@gmail.com');
    cy.get('input[type="password"]').type('test');
    cy.get('.submit-button').click();

    // Wait for the login request to complete
    cy.wait('@loginRequest');

    // Verify that the user is redirected to the homepage
    cy.url().should('include', '/homepage');
  });
});
