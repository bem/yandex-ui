describe('Link', () => {
    describe('classic-design', () => {
        ['normal', 'black', 'ghost', 'outer', 'strong', 'pseudo'].forEach((theme) => {
            it(`static-${theme}`, function() {
                return this.browser
                    .url('Link/hermione/hermione.html')
                    // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                    // из-за этого возникает hovered эффект.
                    .moveToObject('body', 250, 250)
                    .assertView('plain', [`.Classic .Hermione-Row_theme_${theme}`])
                    .moveToObject(`.Classic .Hermione-Row_theme_${theme} .Link`)
                    .assertView('hovered', [`.Classic .Hermione-Row_theme_${theme} .Link`])
                    .moveToObject(`.Classic .Hermione-Row_theme_${theme} .Link[aria-disabled="true"]`)
                    .assertView('disabled-hovered', [`.Classic .Hermione-Row_theme_${theme} .Link[aria-disabled="true"]`]);
            });
        });
    });

    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            it(`static-${color}`, function() {
                return this.browser
                    .url('Link/hermione/hermione.html')
                    // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                    // из-за этого возникает hovered эффект.
                    .moveToObject('body', 250, 250)
                    .assertView('plain', [`.New .Hermione-Row_color_${color}`])
                    .moveToObject(`.New .Hermione-Row_color_${color} .Link`)
                    .assertView('hovered', [`.New .Hermione-Row_color_${color} .Link`])
                    .moveToObject(`.New .Hermione-Row_color_${color} .Link[aria-disabled="true"]`)
                    .assertView('disabled-hovered', [`.New .Hermione-Row_color_${color} .Link[aria-disabled="true"]`]);
            });
        });
    });
});
