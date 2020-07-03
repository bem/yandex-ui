describe('Radiobox', () => {
    it('checked', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('plain', ['.Hermione#simple .Radiobox'])
            .moveToObject('.Hermione#simple .Radiobox-Radio:first-child')
            .click('.Hermione#simple .Radiobox-Radio:first-child')
            .assertView('first-control', ['.Hermione#simple .Radiobox'])
            .moveToObject('.Hermione#simple  .Radiobox-Radio:first-child + *')
            .click('.Hermione#simple  .Radiobox-Radio:first-child + *')
            .assertView('second-control', ['.Hermione#simple .Radiobox'])
            .moveToObject('.Hermione#simple .Radiobox-Radio:first-child + * + *')
            .click('.Hermione#simple .Radiobox-Radio:first-child + * + *')
            .assertView('third-control', ['.Hermione#simple .Radiobox']);
    });

    it('checked-m', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('plain', ['.Hermione#simple-m .Radiobox'])
            .moveToObject('.Hermione#simple-m .Radiobox-Radio:first-child')
            .click('.Hermione#simple-m .Radiobox-Radio:first-child')
            .assertView('first-control', ['.Hermione#simple-m .Radiobox'])
            .moveToObject('.Hermione#simple-m  .Radiobox-Radio:first-child + *')
            .click('.Hermione#simple-m  .Radiobox-Radio:first-child + *')
            .assertView('second-control', ['.Hermione#simple-m .Radiobox'])
            .moveToObject('.Hermione#simple-m .Radiobox-Radio:first-child + * + *')
            .click('.Hermione#simple-m .Radiobox-Radio:first-child + * + *')
            .assertView('third-control', ['.Hermione#simple-m .Radiobox']);
    });

    it('checked-pseudo', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('plain', ['.Hermione#simple-pseudo .Radiobox'])
            .moveToObject('.Hermione#simple-pseudo .Radiobox-Radio:first-child')
            .click('.Hermione#simple-pseudo .Radiobox-Radio:first-child');
    });

    it('bg-color', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('plain', ['.Hermione#bg-color'])
            .moveToObject('.Hermione#bg-color .Radiobox-Control')
            .assertView('hover', ['.Hermione#bg-color'])
            .element('.Hermione#bg-color .Radiobox-Control')
            .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
            .assertView('focused', ['.Hermione#bg-color'])
            .moveToObject('.Hermione#bg-color .Radiobox-Control')
            .click('.Hermione#bg-color .Radiobox-Control')
            .assertView('checked', ['.Hermione#bg-color']);
    });

    it('bg-color-pseudo', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('plain', ['.Hermione#bg-color-pseudo'])
            .moveToObject('.Hermione#bg-color-pseudo .Radiobox-Control')
            .element('.Hermione#bg-color-pseudo .Radiobox-Control')
            .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
            .assertView('focused', ['.Hermione#bg-color-pseudo'])
            .moveToObject('.Hermione#bg-color-pseudo .Radiobox-Control')
            .click('.Hermione#bg-color-pseudo .Radiobox-Control')
            .assertView('checked', ['.Hermione#bg-color-pseudo']);
    });

    it('disabled', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('disabled', ['.Hermione#disabled .Radiobox']);
    });

    it('disabled-pesudo', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('disabled', ['.Hermione#disabled-pseudo .Radiobox']);
    });

    it('states', function() {
        return this.browser
            .url('Radiobox/hermione/hermione.html')
            .assertView('all', ['.Hermione#different .Radiobox']);
    });

    describe('new-design', () => {
        it('themes-with-sizes', function() {
            return this.browser
                .url('Radiobox/hermione/hermione.html')
                .assertView('plain', ['.NewDesign']);
        });

        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((theme) => {
            it(`${theme}-hovered`, function() {
                return this.browser
                    .url('Radiobox/hermione/hermione.html')
                    .moveToObject(`.NewDesign .Hermione-Item_theme_${theme} .Radiobox .Radiobox-Radio`)
                    .assertView(`theme-${theme}-unchecked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`])
                    .moveToObject(`.NewDesign .Hermione-Item_theme_${theme} .Radiobox .Radiobox-Radio_checked`)
                    .assertView(`theme-${theme}-checked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`]);
            });

            it(`${theme}-focused`, function() {
                return this.browser
                    .url('Radiobox/hermione/hermione.html')
                    .element(`.NewDesign .Hermione-Item_theme_${theme} .Radiobox .Radiobox-Radio .Radiobox-Control`)
                    .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                    .assertView(`theme-${theme}-unchecked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`])
                    .element(`.NewDesign .Hermione-Item_theme_${theme} .Radiobox .Radiobox-Radio_checked .Radiobox-Control`)
                    .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                    .assertView(`theme-${theme}-checked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`]);
            });
        });
    });
});
