import AppHeader from '../../components/app-header/app-header'
import 'tailwindcss/tailwind.css'

describe('AppHeader.cy.js', () => {
  it('should show the header correctly', () => {
    cy.mount(<AppHeader />)
    cy.get('h1')
      .should('have.text', 'Star Wars finder')
      .should('have.class', 'text-3xl font-bold')
  })
})
