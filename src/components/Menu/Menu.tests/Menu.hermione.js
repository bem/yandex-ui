describe('Menu', () => {
    describe('classic-design', () => {
        ['s', 'm'].forEach((size) => {
            it(`size-${size}`, function() {
                return this.browser
                    .url('Menu/hermione/hermione.html')
                    .assertView('plain', [`.Classic .Hermione-Row_type_sizes .Menu_size_${size}`])
                    .moveToObject(`.Classic .Hermione-Row_type_sizes .Menu_size_${size} .Menu-Item_checked`)
                    .assertView('hovered', [`.Classic .Hermione-Row_type_sizes .Menu_size_${size}`]);
            });
        });

        it('disabled', function() {
            return this.browser
                .url('Menu/hermione/hermione.html')
                .assertView('plain', ['.Classic .Hermione-Row_type_disabled .Menu']);
        });

        it('with-auto', function() {
            return this.browser
                .url('Menu/hermione/hermione.html')
                .assertView('plain', ['.Classic .Hermione-Row_type_width-auto .Menu']);
        });

        it('with-max', function() {
            return this.browser
                .url('Menu/hermione/hermione.html')
                .assertView('plain', ['.Classic .Hermione-Row_type_width-max .Menu']);
        });
    });

    hermione.skip.in(/./, 'https://st.yandex-team.ru/ISL-7790');
    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                ['s', 'm'].forEach((size) => {
                    it(`size-${size}`, function() {
                        return this.browser
                            .url('Menu/hermione/hermione.html')
                            .assertView('plain', [`.New .Hermione-Row_color_${color} .Menu_size_${size}`])
                            .moveToObject(`.New .Hermione-Row_color_${color} .Menu_size_${size} .Menu-Item_checked`)
                            .assertView('hovered', [`.New .Hermione-Row_color_${color} .Menu_size_${size}`]);
                    });
                });
            });
        });
    });
});
