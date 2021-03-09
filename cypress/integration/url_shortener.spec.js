describe('Url Shortener', () => {
  beforeEach(() => {
    cy.fixture('testUrls.json')
      .then((testUrls) => {
        cy.intercept({
          method: 'GET',
          url: 'http://localhost:3001/api/v1/urls'
        },
      {
        statusCode: 200,
        body: testUrls
      })
    })
    cy.visit('http://localhost:3000')
  })

  it('Should view the page title when visiting the page', () => {
    cy.get('.page-title').should('have.text', 'URL Shortener')
  })

  it('Should view the existing shortened urls when visiting the page', () => {
    cy.get('.url').eq(0).should('be.visible')
      .get('.url-title').eq(0).should('have.text', 'Awesome photo')
      .get('a').eq(0).should('contain', '/useshorturl/1')
      .get('.long-url').eq(0).should('contain', 'https://images.unsplash.com/')
      .get('.url').eq(1).should('be.visible')
      .get('.url-title').eq(1).should('have.text', 'new url')
      .get('a').eq(1).should('contain', '/useshorturl/2')
      .get('.long-url').eq(1).should('contain', 'https://github.com/')
  })

  it('Should view a form when visiting the page', () => {
    cy.get('.url-form').should('be.visible')
      .get('.title-input').should('be.visible')
      .get('.url-input').should('be.visible')
      .get('.form-submit').should('be.visible')
  })

  it('Should see information reflected in the form after entering text', () => {

  })

  it('Should see a new shortened url on the page after submitting the form', () => {

  })
})
