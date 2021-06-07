// @ts-nocheck

// eslint-disable-next-line mocha/no-skipped-tests
describe.skip('Button', () => {
    const elements = {
        button: '[data-testid=button]',
        container: '[data-testid=container]',
    };

    it('should render view default', function() {
        return this.browser
            .url('Button-next/hermione/hermione.html?scenario=view')
            .assertView('plain', [elements.container]);
    });
});
