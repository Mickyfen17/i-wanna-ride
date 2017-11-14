describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // change URL to match your dev URL
  });
});

describe('Home Page', () => {
  before(() => {
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

  it('Check home page button interations', () => {
    cy
      .get('button.home-page-button')
      .first()
      .click();

    cy.get('article.login-card').should('have.length', 1);
  });
});
