/* eslint-disable space-before-function-paren */
// @ts-nocheck
describe('Text@next', () => {
    const elements = {
        container: '[data-testid=container]',
    };

    it('static-typography', function () {
        return this.browser
            .openScenario('Text@next', 'TypographyTextHermioneCase', { as: 'div' })
            .assertView('plain', [elements.container]);
    });

    it('static-weight', function () {
        return this.browser
            .openScenario('Text@next', 'SimpleTextHermioneCase', { weight: 'light' })
            .assertView('weight-light', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { weight: 'regular' })
            .assertView('weight-regular', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { weight: 'medium' })
            .assertView('weight-medium', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { weight: 'bold' })
            .assertView('weight-bold', [elements.container]);
    });

    it('static-align', function () {
        return this.browser
            .openScenario('Text@next', 'SimpleTextHermioneCase', { align: 'start', paragraph: true })
            .assertView('align-start', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { align: 'end', paragraph: true })
            .assertView('align-end', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { align: 'center', paragraph: true })
            .assertView('align-center', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { align: 'justify', paragraph: true })
            .assertView('align-justify', [elements.container]);
    });

    it('static-colors', function () {
        return this.browser
            .openScenario('Text@next', 'ColorTextHermioneCase', { as: 'div' })
            .assertView('plain', [elements.container]);
    });

    it('static-overflow', function () {
        const props = { paragraph: true, as: 'div', width: 1080, align: 'justify' };

        return this.browser
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade', maxLines: 1 })
            .assertView('overflow-fade-1', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade', maxLines: 2 })
            .assertView('overflow-fade-2', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade', maxLines: 3 })
            .assertView('overflow-fade-3', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade-horizontal', maxLines: 1 })
            .assertView('overflow-fade-horizontal-1', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade-horizontal', maxLines: 2 })
            .assertView('overflow-fade-horizontal-2', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, overflow: 'fade-horizontal', maxLines: 3 })
            .assertView('overflow-fade-horizontal-3', [elements.container]);
    });

    hermione.skip.in(['win-ie11', 'linux-firefox'], "It shouldn't work in these browsers", { silent: true });
    it('static-ellipsis', function () {
        const props = { as: 'div', paragraph: true, width: 1080, align: 'justify', overflow: 'ellipsis' };

        return this.browser
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, maxLines: 1 })
            .assertView('overflow-ellipsis-1', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, maxLines: 2 })
            .assertView('overflow-ellipsis-2', [elements.container])
            .openScenario('Text@next', 'SimpleTextHermioneCase', { ...props, maxLines: 3 })
            .assertView('overflow-ellipsis-3', [elements.container]);
    });
});
