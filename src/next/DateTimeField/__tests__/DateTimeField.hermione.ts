/* eslint-disable space-before-function-paren */
// @ts-nocheck

hermione.skip.in(['win-ie11']);
describe('DateTimeField@next', () => {
    const elements = {
        datetimefield: '[data-testid=datetimefield]',
        container: '[data-testid=container]',
    };

    it('should render view default', function () {
        return this.browser
            .openScenario('DateTimeField@next', 'SingleHermioneCase', { view: 'default', size: 's' })
            .assertView('size-s', [elements.container])
            .openScenario('DateTimeField@next', 'SingleHermioneCase', { view: 'default', size: 'm' })
            .assertView('size-m', [elements.container]);
    });

    it('should render states', function () {
        return this.browser
            .openScenario('DateTimeField@next', 'SingleHermioneCase')
            .assertView('default', [elements.container])
            .moveToObject(elements.datetimefield)
            .assertView('hovered', [elements.container])
            .leftClick('[role=spinbutton]')
            .assertView('focused', [elements.container])
            .openScenario('DateTimeField@next', 'SingleHermioneCase', { disabled: true })
            .assertView('disabled', [elements.container]);
    });
});
