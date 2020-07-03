describe('Textarea', () => {
    describe('classic-design', () => {
        ['s', 'm'].forEach((size) => {
            it(`size-${size}`, function() {
                return this.browser
                    .url('Textarea/hermione/hermione.html')
                    // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                    // из-за этого возникает hovered эффект.
                    .moveToObject('body', 250, 250)
                    .assertView('plain', [`.Classic .Hermione-Wrapper_size_${size}`])
                    .moveToObject(`.Classic .Hermione-Wrapper_size_${size} .Textarea-Control`)
                    .assertView('hovered', [`.Classic .Hermione-Wrapper_size_${size} .Hermione-Item`])
                    .element(`.Classic .Hermione-Wrapper_size_${size} .Textarea-Control`)
                    .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                    .assertView('focused', [`.Classic .Hermione-Wrapper_size_${size} .Hermione-Item`]);
            });

            it(`size-${size}-clear`, function() {
                return this.browser
                    .url('Textarea/hermione/hermione.html')
                    .assertView('plain', [`.Classic .Hermione-Wrapper_size_${size} .Hermione-Item_filled`])
                    .moveToObject(`.Classic .Hermione-Wrapper_size_${size} .Hermione-Item_filled .Textarea-Clear`)
                    .assertView('hovered', [`.Classic .Hermione-Wrapper_size_${size} .Hermione-Item_filled`]);
            });
        });
    });

    describe('new-design', () => {
        ['yandex-default', 'yandex-inverse', 'yandex-brand'].forEach((color) => {
            describe(color, () => {
                ['s', 'm'].forEach((size) => {
                    it(`size-${size}`, function() {
                        return this.browser
                            .url('Textarea/hermione/hermione.html')
                            // Сдвигаем курсор, т.к. в ie11 курсор первоначально находится на компоненте,
                            // из-за этого возникает hovered эффект.
                            .moveToObject('body', 250, 250)
                            .assertView('plain', [`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color}`])
                            .moveToObject(`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Textarea-Control`)
                            .assertView('hovered', [`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Hermione-Item`])
                            .element(`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Textarea-Control`)
                            .then(({ value: { ELEMENT } }) => this.browser.elementIdValue(ELEMENT, ''))
                            .assertView('focused', [`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Hermione-Item`]);
                    });

                    it(`size-${size}-clear`, function() {
                        return this.browser
                            .url('Textarea/hermione/hermione.html')
                            .assertView('plain', [`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Hermione-Item_filled`])
                            .moveToObject(`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Hermione-Item_filled .Textarea-Clear`)
                            .assertView('hovered', [`.New .Hermione-Wrapper_size_${size}.Hermione-Wrapper_color_${color} .Hermione-Item_filled`]);
                    });
                });
            });
        });
    });
});
