describe('Checkbox', () => {
    describe('new-design', () => {
        it('themes-with-sizes', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.NewDesign']);
        });

        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((theme) => {
            it(`${theme}-hovered`, function() {
                return this.browser
                    .url('Checkbox/hermione/hermione.html')
                    .moveToObject(`.NewDesign .Hermione-Item_theme_${theme} .Checkbox`)
                    .assertView(`theme-${theme}-unchecked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`])
                    .moveToObject(`.NewDesign .Hermione-Item_theme_${theme} .Checkbox.Checkbox_checked`)
                    .assertView(`theme-${theme}-checked-hovered`, [`.NewDesign .Hermione-Item_theme_${theme}`]);
            });

            it(`${theme}-focused`, function() {
                return this.browser
                    .url('Checkbox/hermione/hermione.html')
                    .element(`.NewDesign .Hermione-Item_theme_${theme} .Checkbox .Checkbox-Control`)
                    .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                    .assertView(`theme-${theme}-unchecked-focused`, [`.NewDesign .Hermione-Item_theme_${theme}`])
                    .element(`.NewDesign .Hermione-Item_theme_${theme} .Checkbox.Checkbox_checked .Checkbox-Control`)
                    .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                    .assertView(`theme-${theme}-checked-focused`, [`.NewDesign .Hermione-Item_theme_${theme}`]);
            });
        });
    });

    describe('static', () => {
        it('combinations', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#static']);
        });

        it('baseline', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#baseline .Hermione-Item']);
        });

        it('baseline-view-default', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#baseline-view-default .Hermione-Item']);
        });

        it('baseline-lines-one', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#baseline-lines-one .Hermione-Item']);
        });

        describe('lines', () => {
            ['s', 'm'].forEach((size) => {
                it(size, function() {
                    return this.browser
                        .url('Checkbox/hermione/hermione.html')
                        .assertView('plain', [`.Hermione#lines .Hermione-Item.Hermione-Item_size_${size}`]);
                });
            });
        });

        describe('lines-false', () => {
            ['s', 'm'].forEach((size) => {
                it(size, function() {
                    return this.browser
                        .url('Checkbox/hermione/hermione.html')
                        .assertView('plain', [`.Hermione#lines-false .Hermione-Item.Hermione-Item_size_${size}`]);
                });
            });
        });

        describe('lines-one', () => {
            ['s', 'm'].forEach((size) => {
                it(size, function() {
                    return this.browser
                        .url('Checkbox/hermione/hermione.html')
                        .assertView('plain', [`.Hermione#lines-one .Hermione-Item.Hermione-Item_size_${size}`]);
                });
            });
        });

        describe('indeterminate', () => {
            it('default', function() {
                return this.browser
                    .url('Checkbox/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#indeterminate .Hermione-Item.Hermione-Item_view_default']);
            });

            it('classic', function() {
                return this.browser
                    .url('Checkbox/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#indeterminate .Hermione-Item.Hermione-Item_view_classic']);
            });
        });
    });

    describe('dynamic', () => {
        it('normal', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox')
                .assertView('plain-hovered', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox')
                .buttonDown()
                .assertView('plain-pressed', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .buttonUp()
                .assertView('plain-clicked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .element('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .execute(function() {
                    try {
                        // i-bem
                        window.$(window.document.documentElement).addClass('utilityfocus');
                    } catch (e) {
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    }
                })
                .assertView('checked-focused', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .assertView('checked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox')
                .assertView('checked-hovered', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox')
                .buttonDown()
                .assertView('checked-pressed', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .buttonUp()
                .assertView('checked-clicked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .element('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal .Checkbox-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .execute(function() {
                    try {
                        // i-bem
                        window.$(window.document.documentElement).addClass('utilityfocus');
                    } catch (e) {
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    }
                })
                .assertView('plain-focused', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_normal']);
        });

        it('pseudo', function() {
            return this.browser
                .url('Checkbox/hermione/hermione.html')
                .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox')
                .assertView('plain-hovered', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox')
                .buttonDown()
                .assertView('plain-pressed', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .buttonUp()
                .assertView('plain-clicked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .element('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .execute(function() {
                    try {
                        // i-bem
                        window.$(window.document.documentElement).addClass('utilityfocus');
                    } catch (e) {
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    }
                })
                .assertView('checked-focused', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .assertView('checked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox')
                .assertView('checked-hovered', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .moveToObject('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox')
                .buttonDown()
                .assertView('checked-pressed', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .buttonUp()
                .assertView('checked-clicked', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo'])
                .execute(function() {
                    try {
                        window.document.activeElement.blur();
                    } catch (e) {}
                })
                .element('.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo .Checkbox-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .execute(function() {
                    try {
                        // i-bem
                        window.$(window.document.documentElement).addClass('utilityfocus');
                    } catch (e) {
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    }
                })
                .assertView('plain-focused', ['.Hermione#dynamic .Hermione-Item.Hermione-Item_theme_pseudo']);
        });
    });
});
