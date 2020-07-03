describe('TabsMenu', () => {
    describe('classic-design', () => {
        ['s', 'm'].forEach((size) => {
            it(`size-${size}`, function() {
                return this.browser
                    .url('TabsMenu/hermione/hermione.html')
                    // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                    // из-за этого возникает hovered эффект.
                    .moveToObject('body', 250, 250)
                    .assertView('plain', [`.Classic .Hermione-Item_size_${size}`]);
            });
        });
    });

    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                ['s', 'm'].forEach((size) => {
                    it(`size-${size}`, function() {
                        return this.browser
                            .url('TabsMenu/hermione/hermione.html')
                            .assertView('plain', [`.New .Hermione-Item_size_${size}.Hermione-Item_color_${color}`]);
                    });
                });
            });
        });
    });
});
