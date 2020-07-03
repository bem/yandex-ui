describe('Tumbler', () => {
    it('dynamic-both-label', function() {
        return this.browser
            .url('Tumbler/hermione/hermione.html')
            .click('.Tumbler.both-label .Tumbler-Label:first-child')
            .assertView('unchedked', ['.Tumbler.both-label'])
            .click('.Tumbler.both-label .Tumbler-Label:last-child')
            .assertView('checked', ['.Tumbler.both-label']);
    });

    it('dynamic-single-label', function() {
        return this.browser
            .url('Tumbler/hermione/hermione.html')
            .click('.Tumbler.single-label .Tumbler-Label')
            .assertView('checked', ['.Tumbler.single-label'])
            .click('.Tumbler.single-label .Tumbler-Label')
            .assertView('unchecked', ['.Tumbler.single-label']);
    });

    ['yandex-default', 'yandex-brand', 'yandex-inverse'].forEach((color) => {
        describe(color, () => {
            it('static', function() {
                return this.browser
                    .url('Tumbler/hermione/hermione.html')
                    .assertView('plain', [`.Hermione_color_${color}`]);
            });

            ['unchecked-enabled', 'checked-enabled', 'unchecked-disabled', 'checked-disabled'].forEach((state) => {
                it(`static-${state}`, function() {
                    return (
                        this.browser
                            .url('Tumbler/hermione/hermione.html')
                            // hovered
                            .moveToObject(`.Hermione_color_${color} .Tumbler.${state} .Tumbler-Button`)
                            .assertView('uncheck-hovered', [`.Hermione_color_${color} .Tumbler.${state}`])
                            // pressed
                            .moveToObject(`.Hermione_color_${color} .Tumbler.${state} .Tumbler-Button`)
                            .buttonDown()
                            .assertView('uncheck-pressed', [`.Hermione_color_${color} .Tumbler.${state}`])
                            // focused
                            .element(`.Hermione_color_${color} .Tumbler.${state} .Tumbler-Button`)
                            .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                            .execute(function() {
                                window.document.body.classList.add('utilityfocus');
                            })
                            .assertView('uncheck-focused', [`.Hermione_color_${color} .Tumbler.${state}`])
                    );
                });
            });
        });
    });
});
