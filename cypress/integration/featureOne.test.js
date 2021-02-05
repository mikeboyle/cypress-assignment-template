describe('feature one', () => {
  it('visits the page', () => {
    cy.visit('./index.html');
  });

  it('fails this test', () => {
    expect(2).to.eq('foo');
  });
});
