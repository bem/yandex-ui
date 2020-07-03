describe('Button', () => {
    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                it('static', function() {
                    return this.browser
                        .url('Button/hermione/hermione.html')
                        .assertView('plain', [`.New .Theme_color_${color}`]);
                });
            });
        });
    });

    it('icon-glyph', function() {
        return this.browser
            .url('Button/hermione/hermione.html')
            .assertView('plain', ['.Hermione#icon-glyph']);
    });

    describe('static', () => {
        hermione.skip.in([/./], 'https://st.yandex-team.ru/INFRADUTY-3898');
        it('combinations', function() {
            return this.browser
                .url('Button/hermione/hermione.html')
                .assertView('plain', ['.Hermione#static']);
        });

        it('baseline', function() {
            return this.browser
                .url('Button/hermione/hermione.html')
                .assertView('plain', ['.Hermione#baseline .Hermione-Item']);
        });

        it('pin', function() {
            return this.browser
                .url('Button/hermione/hermione.html')
                .assertView('plain', ['.Hermione#pin .Hermione-Item']);
        });

        describe('sizes', () => {
            it('s', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#sizes .Hermione-Item.Size_s']);
            });

            it('m', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#sizes .Hermione-Item.Size_m']);
            });

            it('l', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#sizes .Hermione-Item.Size_l']);
            });
        });

        describe('width', () => {
            it('200', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#width .Hermione-Item.Width_200']);
            });

            it('100', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#width .Hermione-Item.Width_100']);
            });
        });

        describe('pin-circle', () => {
            it('circle', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#circle .Hermione-Item']);
            });

            it('icon-circle', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#icon-circle .Hermione-Item']);
            });
        });
    });

    describe('dynamic', () => {
        describe('default', () => {
            it('normal', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.type_.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_normal .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.type_.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_normal .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.type_.Theme_normal'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.type_.Theme_normal'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.type_.Theme_normal .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.type_.Theme_normal']);
            });

            it('pseudo', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.type_.Theme_pseudo']);
            });

            it('action', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.type_.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_action .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.type_.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_action .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.type_.Theme_action'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.type_.Theme_action'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.type_.Theme_action .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.type_.Theme_action']);
            });

            it('clear', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.type_.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_clear .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.type_.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.type_.Theme_clear .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.type_.Theme_clear'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.type_.Theme_clear'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.type_.Theme_clear .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.type_.Theme_clear']);
            });
        });

        describe('check', () => {
            it('normal', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_normal']);
            });

            it('pseudo', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_pseudo']);
            });

            it('action', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_action .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_action .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_action'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_action'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_check.Theme_action .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_action']);
            });

            it('clear', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_check.Theme_clear']);
            });
        });

        describe('radio', () => {
            it('normal', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_normal']);
            });

            it('pseudo', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_pseudo']);
            });

            it('action', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_action']);
            });

            it('clear', function() {
                return this.browser
                    .url('Button/hermione/hermione.html')
                    .assertView('plain', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear .Button2')
                    .assertView('hovered', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear'])
                    .moveToObject('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear .Button2')
                    .buttonDown()
                    .assertView('pressed', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear'])
                    .buttonUp()
                    .assertView('clicked', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear'])
                    .execute(function() {
                        try {
                            window.document.activeElement.blur();
                        } catch (e) {}
                    })
                    .element('.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear .Button2')
                    .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                    .execute(function() {
                        try {
                            // i-bem
                            window.$(window.document.documentElement).addClass('utilityfocus');
                        } catch (e) {}
                        try {
                            // react
                            window.document.body.classList.add('utilityfocus');
                        } catch (e) {}
                    })
                    .assertView('focused', ['.Hermione#dynamic .Hermione-Item.Type_radio.Theme_clear']);
            });
        });
    });
});
