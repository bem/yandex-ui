// @ts-nocheck
describe('Menu', () => {
    const elements = {
        menu: '[data-testid=menu]',
        item1: '[role=option]:nth-child(1)',
        item2: '[role=option]:nth-child(2)',
    };

    it('should render menu with default theme', async function() {
        const browser = this.browser;
        await browser
            .url('Menu/hermione/hermione.html?scenario=default&size=m')
            .assertView('size-m', [elements.menu])
            .moveToObject(elements.item1)
            .assertView('hovered', [elements.menu]);
        await browser
            .url('Menu/hermione/hermione.html?scenario=default&size=s')
            .assertView('size-s', [elements.menu]);
        return browser;
    });

    it('should render menu with disabled state', function() {
        return this.browser
            .url('Menu/hermione/hermione.html?scenario=default&disabled=true')
            .assertView('plain', [elements.menu]);
    });

    it('should render menu with max width', function() {
        return this.browser
            .url('Menu/hermione/hermione.html?scenario=default&width=max')
            .setViewportSize({ width: 800, height: 600 })
            .assertView('plain', [elements.menu]);
    });

    it('should render menu with classic design', async function() {
        const browser = this.browser;
        await browser
            .url('Menu/hermione/hermione.html?scenario=default&theme=normal&view=&size=m')
            .assertView('size-m', [elements.menu])
            .moveToObject(elements.item1)
            .assertView('hovered', [elements.menu]);
        await browser
            .url('Menu/hermione/hermione.html?scenario=default&theme=normal&view=&size=s')
            .assertView('size-s', [elements.menu]);
        return browser;
    });

    it('should render menu with inverse theme', function() {
        return this.browser
            .url('Menu/hermione/hermione.html?scenario=default&tokens=inverse')
            .assertView('plain', [elements.menu])
            .moveToObject(elements.item1)
            .assertView('hovered', [elements.menu]);
    });

    it('should render menu with brand theme', function() {
        return this.browser
            .url('Menu/hermione/hermione.html?scenario=default&tokens=brand')
            .assertView('plain', [elements.menu])
            .moveToObject(elements.item1)
            .assertView('hovered', [elements.menu]);
    });

    it('should correctly highlights items with multiple options', function() {
        return this.browser
            .url('Menu/hermione/hermione.html?scenario=default')
            .moveToObject(elements.item1)
            .click(elements.item1)
            .assertView('check-first', [elements.menu])
            .moveToObject(elements.item2)
            .click(elements.item2)
            .assertView('check-second', [elements.menu])
            .click(elements.item2)
            .assertView('uncheck-second', [elements.menu]);
    });
});
