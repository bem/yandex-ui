describe('Tooltip', () => {
    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color, index) => {
            describe(color, () => {
                it('static', function() {
                    return this.browser
                        .url('Tooltip/hermione/hermione.html')
                        .click(`.Hermione-Click${index}`)
                        .assertView('plain', [`.Theme_color_${color} .New`]);
                });
            });
        });
    });
});
