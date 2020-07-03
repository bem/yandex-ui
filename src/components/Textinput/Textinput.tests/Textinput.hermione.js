describe('Textinput', () => {
    it('has-clear', function() {
        return this.browser
            .url('Textinput/hermione/hermione.html')
            .assertView('plain', ['.Hermione#base .Hermione-Variation_hasClear .Hermione-Item_hasValue'])
            .moveToObject('.Hermione#base .Hermione-Variation_hasClear .Hermione-Item_hasValue .Textinput-Clear')
            .assertView('hovered', ['.Hermione#base .Hermione-Variation_hasClear .Hermione-Item_hasValue']);
    });

    ['number-clear', 'number-clear-icon'].forEach((id) => {
        hermione.skip.in(['chrome-phone']);
        it(id, function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', [`.Hermione#${id}`])
                .click(`.Hermione#${id} .Hermione-Capture .Textinput-Control`)
                .scroll(`.Hermione#${id}`)
                .assertView('focused-empty', [`.Hermione#${id}`])
                .click(`.Hermione#${id} .Hermione-Capture .Textinput_withValue .Textinput-Control`)
                .scroll(`.Hermione#${id}`)
                .assertView('focused-full', [`.Hermione#${id}`]);
        });
    });

    it('websearch', function() {
        return this.browser
            .url('Textinput/hermione/hermione.html')
            .assertView('plain', ['.Hermione#websearch .Hermione-Capture'])
            .moveToObject('.Hermione#websearch .Hermione-Capture .Textinput-Control')
            .assertView('hovered', ['.Hermione#websearch .Hermione-Capture'])
            .element('.Hermione#websearch .Hermione-Capture .Textinput-Control')
            .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
            .pause(300)
            .assertView('focused', ['.Hermione#websearch .Hermione-Capture']);
    });

    describe('sizes', () => {
        it('s', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#base .Hermione-Capture_size_s'])
                .moveToObject('.Hermione#base .Hermione-Capture_size_s .Textinput-Control')
                .assertView('hovered', ['.Hermione#base .Hermione-Capture_size_s'])
                .element('.Hermione#base .Hermione-Capture_size_s .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(300)
                .assertView('focused', ['.Hermione#base .Hermione-Capture_size_s']);
        });

        it('m', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#base .Hermione-Capture_size_m'])
                .moveToObject('.Hermione#base .Hermione-Capture_size_m .Textinput-Control')
                .assertView('hovered', ['.Hermione#base .Hermione-Capture_size_m'])
                .element('.Hermione#base .Hermione-Capture_size_m .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(300)
                .assertView('focused', ['.Hermione#base .Hermione-Capture_size_m']);
        });
    });

    describe('icons', () => {
        it('s', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#icons .Hermione-Capture_size_s']);
        });

        it('m', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#icons .Hermione-Capture_size_m']);
        });
    });

    describe('pin', () => {
        it('round-round', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_0 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_round-round .Textinput-Control')
                .assertView('hovered', ['#row_0 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_round-round .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_0 .Hermione-Item']);
        });

        it('round-clear', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_1 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_round-clear .Textinput-Control')
                .assertView('hovered', ['#row_1 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_round-clear .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_1 .Hermione-Item']);
        });

        it('brick-brick', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_1 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_brick-brick .Textinput-Control')
                .assertView('hovered', ['#row_1 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_brick-brick .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_1 .Hermione-Item']);
        });

        it('clear-brick', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_1 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_clear-brick .Textinput-Control')
                .assertView('hovered', ['#row_1 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_clear-brick .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_1 .Hermione-Item']);
        });

        it('clear-round', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_1 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_clear-round .Textinput-Control')
                .assertView('hovered', ['#row_1 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_clear-round .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_1 .Hermione-Item']);
        });

        it('round-brick', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_2 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_round-brick .Textinput-Control')
                .assertView('hovered', ['#row_2 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_round-brick .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_2 .Hermione-Item']);
        });

        it('clear-clear', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_2 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_clear-clear .Textinput-Control')
                .assertView('hovered', ['#row_2 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_clear-clear .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_2 .Hermione-Item']);
        });

        it('brick-clear', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_2 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_brick-clear .Textinput-Control')
                .assertView('hovered', ['#row_2 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_brick-clear .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_2 .Hermione-Item']);
        });

        it('brick-round', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['#row_2 .Hermione-Item'])
                .moveToObject('.Hermione#pin .Textinput_pin_brick-round .Textinput-Control')
                .assertView('hovered', ['#row_2 .Hermione-Item'])
                .element('.Hermione#pin .Textinput_pin_brick-round .Textinput-Control')
                .then(({ value: { ELEMENT: id } }) => this.browser.elementIdValue(id, ''))
                .pause(200)
                .assertView('focused', ['#row_2 .Hermione-Item']);
        });
    });

    describe('number', () => {
        it('s', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#number .Hermione-Capture_type_number.Hermione-Capture_size_s']);
        });

        it('m', function() {
            return this.browser
                .url('Textinput/hermione/hermione.html')
                .assertView('plain', ['.Hermione#number .Hermione-Capture_type_number.Hermione-Capture_size_m']);
        });
    });

    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                hermione.skip.in(/./, 'https://st.yandex-team.ru/ISL-8251');
                it('static', function() {
                    return this.browser
                        .url('Textinput/hermione/hermione.html')
                        // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                        // из-за этого возникает hovered эффект.
                        .moveToObject('body', 0, 0)
                        .assertView('plain', [`.New .Theme_color_${color}`]);
                });
            });
        });
    });
});
