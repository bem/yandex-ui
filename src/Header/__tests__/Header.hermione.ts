// @ts-nocheck
describe('Header', () => {
    it('default', async function() {
        const browser = this.browser;
        await browser.openScenario('Header', 'DefaultHermioneCase').assertView('Default', '.YandexHeader');
        return browser;
    });
    it('logo', async function() {
        const browser = this.browser;
        await browser.openScenario('Header', 'LogoHermioneCase').assertView('Logo', '.YandexHeader');
        return browser;
    });
    it('tabs', async function() {
        const browser = this.browser;
        await browser
            .openScenario('Header', 'TabsHermioneCase')
            .assertView('Tabs', '.YandexHeader')
            .moveToObject('.YandexHeader-NavLink_active')
            .assertView('hovered', '.YandexHeader');
        return browser;
    });
    it('search', async function() {
        const browser = this.browser;
        await browser.openScenario('Header', 'SearchHermioneCase').assertView('Search-arrow', '.YandexHeader');
        return browser;
    });
});
