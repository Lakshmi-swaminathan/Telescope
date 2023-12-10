describe('SignUp Page', () => {
  beforeEach(() => {
    // Visit the homepage first
    cy.visit('/');

    // Click the "Sign Up" button on the login page
    cy.contains("Don't have an account? Sign Up").click();
  });

  it('should display the SignUp form', () => {
    // Ensure the SignUp form elements are present
    cy.get('h2').contains('Register as a new user');
    cy.get('label[for="name"]').contains('Full Name');
    cy.get('label[for="email"]').contains('Email address');
    cy.get('label[for="password"]').contains('Password');
    });

  it('should show an error message for invalid registration', () => {
    // Intercept the registration request and force it to fail
    cy.intercept('POST', '**/user/create-user', {
      statusCode: 400,
      body: {
        message: 'Invalid registration',
      },
    }).as('registrationRequest');

    // Fill the SignUp form with invalid data and submit
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.contains('Submit').click();

    // Wait for the registration request to complete
    cy.wait('@registrationRequest');

  });

  it('should navigate to the login page on successful registration', () => {
    // Intercept the registration request and force it to succeed
    cy.intercept('POST', '**/user/create-user', {
      statusCode: 200,
      body: {
        message: 'Registration successful',
      },
    }).as('registrationRequest');

    // Fill the SignUp form with valid data and submit
    cy.get('input[name="name"]').type('Valid User');
    cy.get('input[name="email"]').type('valid@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.contains('Submit').click();

    // Wait for the registration request to complete
    cy.wait('@registrationRequest');
    cy.url().should('include', '/');
  });
});
