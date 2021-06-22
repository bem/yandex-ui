// @ts-nocheck
describe('Popup', () => {
    const elements = {
        anchor: '[data-testid=anchor]',
        popup: '[data-testid=popup]',
        container: '[data-testid=container]',
    };

    it('should change position after overflow', function() {
        return this.browser
            .openScenario('Popup', 'FlippingHermioneCase')
            .execute(function(s) {
                document.querySelector(s).scrollTop = 180;
            }, elements.container)
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('bottom-position', [elements.container])
            .execute(function(s) {
                document.querySelector(s).scrollTop = 160;
            }, elements.container)
            .assertView('top-position', [elements.container])
            .execute(function(s) {
                document.querySelector(s).scrollTop = 10;
            }, elements.container)
            .assertView('hidden-position', [elements.container]);
    });

    it('should not change position after overflow with motionless', function() {
        return this.browser
            .openScenario('Popup', 'FlippingHermioneCase', { motionless: true })
            .execute(function(s) {
                document.querySelector(s).scrollTop = 180;
            }, elements.container)
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('before-scroll', [elements.container])
            .execute(function(s) {
                document.querySelector(s).scrollTop = 160;
            }, elements.container)
            .assertView('after-scroll', [elements.container])
            .execute(function(s) {
                document.querySelector(s).scrollTop = 10;
            }, elements.container)
            .assertView('hidden-anchor', [elements.container]);
    });

    it('should render correctly with scale anchor', function() {
        return this.browser
            .openScenario('Popup', 'ScaleHermioneCase')
            .moveToObject(elements.anchor)
            .buttonDown()
            .buttonUp()
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should prevent overflow with center position', function() {
        return this.browser
            .openScenario('Popup', 'OverflowHermioneCase')
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render correctly with initial visible', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { visible: true })
            .assertView('plain', [elements.container]);
    });

    it('should render all directions', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase')
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render all directions with offset', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { mainOffset: 10, secondaryOffset: 10 })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render all directions with tail', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { hasTail: true })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render all directions with tail and offset', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { hasTail: true, mainOffset: 10, secondaryOffset: 10 })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    // legacy design
    it('should render all directions with tail and classic design', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { hasTail: true, theme: 'normal', view: undefined })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    // other themes
    it('should render all directions with tail and inverse theme', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { hasTail: true, tokens: 'inverse' })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render all directions with tail and brand theme', function() {
        return this.browser
            .openScenario('Popup', 'DirectionsHermioneCase', { hasTail: true, tokens: 'brand' })
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });

    it('should render correctly with boundary and inside clipping container', function() {
        return this.browser
            .openScenario('Popup', 'BoundaryHermioneCase')
            .execute(function(s) {
                document.querySelector(s).scrollTop = 80;
            }, elements.container)
            .click(elements.anchor)
            .waitForVisible(elements.popup)
            .assertView('plain', [elements.container]);
    });
});
