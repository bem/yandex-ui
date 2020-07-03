describe('Attach', () => {
    it('extensions', function() {
        return this.browser
            .url('Attach/hermione/hermione.html')
            .assertView('icons', ['.Hermione.Extensions']);
    });

    it('disabled', function() {
        return this.browser
            .url('Attach/hermione/hermione.html')
            .assertView('plain', ['.Hermione.Disabled .Attach']);
    });

    [
        ['classic-design', '.ClassicDesign'],
        ['new-design', '.NewDesign'],
    ].forEach(([suiteName, selector]) => {
        describe(suiteName, () => {
            it('static', function() {
                return this.browser
                    .url('Attach/hermione/hermione.html')
                    .assertView('plain', [`.Hermione${selector}`]);
            });

            it('attach-file', function() {
                return this.browser
                    .url('Attach/hermione/hermione.html')
                    .chooseFile(`.Hermione${selector} .Attach.Attach_size_m .Attach-Control`, __filename)
                    .execute(function() {
                        // Убираем utilityfocus потому, что в ie11 и firefox выставляется фокус.
                        window.document.body.classList.remove('utilityfocus');
                    })
                    .assertView('file', [`.Hermione${selector} .Attach.Attach_size_m`])
                    .click(`.Hermione${selector} .Attach.Attach_size_m .Attach-Reset`)
                    .assertView('reset', [`.Hermione${selector} .Attach.Attach_size_m`]);
            });
        });
    });

    it('holder-text-width', function() {
        return this.browser
            .url('Attach/hermione/hermione.html')
            .chooseFile('.Hermione.Fixed .Attach.Attach_size_m .Attach-Control', __filename)
            .execute(function() {
                // Убираем utilityfocus потому, что в ie11 и firefox выставляется фокус.
                window.document.body.classList.remove('utilityfocus');
            })
            .assertView('file', ['.Hermione.Fixed .Attach.Attach_size_m']);
    });
});
