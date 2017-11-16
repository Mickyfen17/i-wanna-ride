describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
  });
});

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Check for home page default DOM elements', () => {
    cy.get('h1.home-page-header').should('contain', 'I Wanna Ride');

    cy.get('h3.home-page-caption').should('contain', 'Sick of shredding the trails alone');

    cy
      .get('button.home-page-button')
      .first()
      .should('contain', 'Login');

    cy
      .get('button.home-page-button')
      .last()
      .should('contain', 'About');
  });

  it('Check Home page Login / Sign Up button interation', () => {
    cy
      .get('button.home-page-button')
      .first()
      .click();

    cy.get('article.login-card').should('have.length', 1);
  });

  it('Check Home page About button interation', () => {
    cy
      .get('button.home-page-button')
      .last()
      .click();

    cy.get('.about-wrapper').should('have.length', 1);
  });

  it('Check Home page About Back button interation', () => {
    cy
      .get('button.home-page-button')
      .last()
      .click();

    cy
      .get('a.about-back-link')
      .should('have.length', 1)
      .click();

    cy
      .get('h1.home-page-header')
      .should('have.length', 1)
      .and('have.text', 'I Wanna Ride');
    cy.get('h3.home-page-caption').should('have.length', 1);
    cy.get('button.home-page-button').should('have.length', 2);
  });
});
