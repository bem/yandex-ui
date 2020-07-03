describe('Icon', () => {
    it('static', function() {
        return this.browser
            .url('Icon/hermione/hermione.html')
            .assertView('plain', ['.Static']);
    });

    it('baseline', function() {
        return this.browser
            .url('Icon/hermione/hermione.html')
            .assertView('plain', ['.Baseline']);
    });

    it('glyphs', function() {
        return this.browser
            .url('Icon/hermione/hermione.html')
            .assertView('plain', ['.Glyphs']);
    });

    it('glyphs-baseline', function() {
        return this.browser
            .url('Icon/hermione/hermione.html')
            .assertView('plain', ['.GlyphsBaseline']);
    });

    it('glyphs-other', function() {
        return this.browser
            .url('Icon/hermione/hermione.html')
            .assertView('plain', ['.GlyphsOther']);
    });
});
