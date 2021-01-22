// @ts-nocheck
describe('Header', () => {
    it('default', async function() {
        const browser = this.browser;
        await browser
            .url('Header/hermione/hermione.html?scenario=default')
            .assertView('Default', '.YandexHeader');
        return browser;
    });
    it('logo', async function() {
        const browser = this.browser;
        await browser
            .url('Header/hermione/hermione.html?scenario=logo')
            .assertView('Logo', '.YandexHeader');
        return browser;
    });
    it('tabs', async function() {
        const browser = this.browser;
        await browser
            .url('Header/hermione/hermione.html?scenario=tabs')
            .assertView('Tabs', '.YandexHeader')
            .moveToObject('.YandexHeader-NavLink_active')
            .assertView('hovered', '.YandexHeader');
        return browser;
    });
    it('search', async function() {
        const browser = this.browser;
        await browser
            .url('Header/hermione/hermione.html?scenario=search')
            .assertView('Search-arrow', '.YandexHeader');
        return browser;
    });
});
