describe('On LinkedIn', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('mail.exaple@gmail.com');
        cy.get('#password').type('example');
        cy.get('.btn__primary--large').click();
        cy.get('#ember15').should('exist');
    })
})
