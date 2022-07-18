import SearchForm from '../../components/search-form/search-form'
import api from '../../utils/api'
import 'tailwindcss/tailwind.css'

describe('SearchForm.cy.js', () => {
  beforeEach(() => {})
  it('should call fetchSwFilmsByQuery once', () => {
    // Arrange.
    cy.stub(api, 'fetchSwFilmsByQuery').as('mockFetch')
    cy.mount(<SearchForm />, { withQuery: true })

    // Act.
    cy.getByCy('search-input-input').type('luke')
    cy.getByCy('go-button').click()

    // Assert.
    cy.get('@mockFetch').should('have.been.calledOnce')
  })
})
