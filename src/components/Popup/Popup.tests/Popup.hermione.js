describe('Popup', () => {
    describe('classic-design', () => {
        it('directions', function() {
            return this.browser
                .url('Popup/hermione/hermione.html')
                .assertView('invisible', ['.Classic .Hermione-Row_type_directions'])
                .click('.Classic .Hermione-Row_type_directions .Hermione-Anchor')
                // Ставим паузу, чтобы все компоненты успели раскрыться.
                .pause(200)
                .assertView('visible', ['.Classic .Hermione-Row_type_directions']);
        });

        it('directions-tail', function() {
            return this.browser
                .url('Popup/hermione/hermione.html')
                .assertView('invisible', ['.Classic .Hermione-Row_type_directions-tail'])
                .click('.Classic .Hermione-Row_type_directions-tail .Hermione-Anchor')
                // Ставим паузу, чтобы все компоненты успели раскрыться.
                .pause(200)
                .assertView('visible', ['.Classic .Hermione-Row_type_directions-tail']);
        });
    });

    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                it('directions-tail', function() {
                    return this.browser
                        .url('Popup/hermione/hermione.html')
                        .assertView('invisible', [`.New .Hermione-Row_color_${color}.Hermione-Row_type_directions-tail`])
                        .click(`.New .Hermione-Row_color_${color}.Hermione-Row_type_directions-tail .Hermione-Anchor`)
                        // Ставим паузу, чтобы все компоненты успели раскрыться.
                        .pause(200)
                        .assertView('visible', [`.New .Hermione-Row_color_${color}.Hermione-Row_type_directions-tail`]);
                });
            });
        });
    });
});
