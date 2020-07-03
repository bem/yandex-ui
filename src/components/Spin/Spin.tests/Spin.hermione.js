describe('Spin', () => {
    ['xxs', 'xs', 's', 'm', 'l'].forEach((size) => {
        it(`size-${size}`, function() {
            return this.browser
                .url('Spin/hermione/hermione.html')
                .assertView('plain', [`.Hermione_size_${size} .Button2`, `.Hermione_size_${size} .Spin2`])
                .click(`.Hermione_size_${size} .Button2`)
                .assertView('progress', [`.Hermione_size_${size} .Button2`, `.Hermione_size_${size} .Spin2`]);
        });
    });

    it('position-center', function() {
        return this.browser
            .url('Spin/hermione/hermione.html')
            .assertView('plane', ['.Hermione_position_center']);
    });

    it('themes', function() {
        return this.browser
            .url('Spin/hermione/hermione.html')
            .assertView('plain', ['.Hermione_view_default']);
    });
});
