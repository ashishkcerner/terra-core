Terra.describeViewports('Testingcomp1', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-testingcomp1/testingcomp1/default-testingcomp1'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
