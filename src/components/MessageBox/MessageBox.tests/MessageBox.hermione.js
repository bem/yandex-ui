describe('MessageBox', () => {
    it('layout_tooltip', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('tooltips', ['.Tooltips-examples']);
    });
    it('layout_plain', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('plain', ['.Plain-examples']);
    });
    it('layout_functional', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('functional', ['.Functional-examples']);
    });
    it('view_promo', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('promo', ['.Promo-examples']);
    });
    it('view_inverse', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('inverse', ['.Inverse-examples']);
    });
    it('corners', function() {
        return this.browser
            .url('MessageBox/hermione/hermione.html')
            .assertView('corners', ['.Corners-examples']);
    });
});
