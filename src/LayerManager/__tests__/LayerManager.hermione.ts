// @ts-nocheck

describe('LayerManager', () => {
    const elements = {
        toggler: '[data-test-id=toggler]',
        container: '[data-test-id=container]',
        trigger: '[data-test-id=trigger]',
    };

    it('unmount-trigger-on-click', function() {
        return this.browser
            .url('LayerManager/hermione/hermione.html?scenario=unmount')
            .click(elements.toggler)
            .assertView('before-click', [elements.container])
            .moveToObject(elements.trigger)
            .buttonDown()
            .buttonUp()
            .assertView('after-click', [elements.container]);
    });
});
