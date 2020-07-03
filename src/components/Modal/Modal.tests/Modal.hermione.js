describe('Modal', () => {
    it('static', function() {
        return this.browser
            .url('Modal/hermione/hermione.html')
            .assertView('invisible', ['body'])
            .click('.Hermione-Trigger')
            .assertView('visible', ['body']);
    });

    it('outsideclick', function() {
        return this.browser
            .url('Modal/hermione/hermione.html')
            .click('.Hermione-Trigger')
            // Нажимаем курсор в модалке и отпускаем за пределами модалки.
            .moveToObject('.Modal-Content')
            .buttonDown()
            .moveToObject('body', 250, 250)
            .buttonUp()
            .assertView('visible', ['body'])
            // Уводим курсор за пределы модалки и нажимаем.
            .moveToObject('body', 250, 250)
            .buttonDown()
            .buttonUp()
            .assertView('invisible', ['body']);
    });
});
