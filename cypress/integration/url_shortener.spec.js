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
  })

  it.only('Should view the page title when visiting the page', () => {
    cy.visit('http://localhost:3000')
      .get('.page-title').should('have.text', 'URL Shortener')
  })

  it('Should view the existing shortened urls when visiting the page', () => {

  })

  it('Should view a form when visiting the page', () => {

  })

  it('Should see information reflected in the form after entering text', () => {

  })

  it('Should see a new shortened url on the page after submitting the form', () => {

  })
})
