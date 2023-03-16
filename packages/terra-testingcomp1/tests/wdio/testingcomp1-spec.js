Terra.describeViewports('Testingcomp1', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/components/terra-testingcomp-1/testingcomp-1/testingcomp-1'));
    it('validates the element', () => {
      Terra.validates.element('default');
    });
  });
});
