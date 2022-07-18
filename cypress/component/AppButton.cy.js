import AppButton from '../../components/app-button/app-button'
import 'tailwindcss/tailwind.css'

describe('AppButton.cy.js', () => {
  it('should have text passed as props, be primary and trigger onClick', () => {
    // Arrange.
    const onClickSpy = cy.spy().as('onClickSpy')
    cy.mount(<AppButton text="foo" onClick={onClickSpy} />)

    // Act.
    cy.get('button').click()

    // Assert.
    cy.get('@onClickSpy').should('have.been.calledOnce')
    cy.get('button')
      .should('have.text', 'foo')
      .should('have.class', 'bg-gray-400 color-white')
  })

  it('should have class passed by props', () => {
    // Arrange.
    // Act.
    cy.mount(<AppButton text="foo" className="foo" />)

    // Assert.
    cy.get('button').should('have.class', 'bg-gray-400 color-white foo')
  })

  it('should have class for type cancel', () => {
    // Arrange.

    // Act.
    cy.mount(<AppButton text="foo" type="cancel" />)

    // Assert.
    cy.get('button').should('have.class', 'bg-red-400 color-white')
  })
})
