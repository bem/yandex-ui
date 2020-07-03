describe('RadioButton', () => {
    beforeEach(function() {
        return this.browser
            .url('RadioButton/hermione/hermione.html');
    });

    ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((theme) => {
        it(`${theme}-plain`, function() {
            return this.browser
                .assertView(`${theme}-plain`, [`.Hermione .Theme_color_${theme}`]);
        });

        it(`${theme}-checked`, function() {
            return this.browser
                .click(`.Hermione-Item_theme_${theme}:nth-of-type(2) .RadioButton-Radio:nth-of-type(2)`)
                .assertView(`${theme}-checked`, [`.Hermione .Theme_color_${theme}`]);
        });

        it(`${theme}-hovered`, function() {
            return this.browser
                .moveToObject(`.Hermione-Item_theme_${theme}:nth-of-type(2) .RadioButton-Radio:nth-of-type(2)`)
                .assertView(`${theme}-unchecked-hovered`, [`.Hermione-Item_theme_${theme}:nth-of-type(2)`])
                .moveToObject(`.Hermione-Item_theme_${theme}:nth-of-type(2) .RadioButton-Radio:nth-of-type(1)`)
                .assertView(`${theme}-checked-hovered`, [`.Hermione-Item_theme_${theme}:nth-of-type(2)`]);
        });
    });
});
