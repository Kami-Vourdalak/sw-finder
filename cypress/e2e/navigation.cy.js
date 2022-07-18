describe('Navigation specs', () => {
  it('should show loading while getting results', () => {
    // Arrange.
    cy.intercept(
      { url: /https:\/\/swapi\.dev\/api\/.*/ },
      { fixture: 'empty-response.json' }
    )
    cy.visit('http://localhost:3000')

    // Act.
    cy.getByCy('search-input-input').type('luke')
    cy.getByCy('go-button').click()

    // Assert.
    cy.getByCy('list').should('have.text', 'Loading...')
  })

  it('should show loading while getting results', () => {
    // Arrange.
    cy.intercept(
      { url: /https:\/\/swapi\.dev\/api\/.*/ },
      { fixture: 'empty-response.json' }
    )
    cy.visit('http://localhost:3000')

    // Act.
    cy.getByCy('search-input-input').type('luke')
    cy.getByCy('go-button').click()

    // Assert.
    cy.getByCy('list').should('have.text', 'Nothing found :(')
  })

  it('should show the films when matches the result criteria', () => {
    // Arrange.
    // Act.
    cy.visit('http://localhost:3000')
    cy.getByCy('search-input-input').type('luke')
    cy.getByCy('go-button').click()

    // Assert.
    cy.getByCy('film-card-').should('have.length', 4)
  })

  it('should display the film info if click on a film card', () => {
    // Arrange.
    cy.visit('http://localhost:3000')
    cy.getByCy('search-input-input').type('luke')
    cy.getByCy('go-button').click()

    // Act.
    cy.getByCy('film-card-').first().click()

    // Assert.
    cy.url().should('eq', 'http://localhost:3000/film/1')
    cy.get('a').should('have.text', 'Go Back')
    cy.contains('Episode').should('have.text', 'Episode IV')
  })

  it('should navigate back when click on Go Back link', () => {
    // Arrange.
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/film/1')

    // Act.
    cy.get('a').click()

    // Assert.
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
