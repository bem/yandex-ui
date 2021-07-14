/* eslint-disable space-before-function-paren */
// @ts-nocheck
describe('Button@next', () => {
    const elements = {
        button: '[data-testid=button]',
        container: '[data-testid=container]',
    };

    it('should render view default', function () {
        return this.browser
            .openScenario('Button@next', 'ViewHermioneCase', { view: 'default' })
            .assertView('plain', [elements.container]);
    });
});
