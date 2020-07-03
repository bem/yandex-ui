describe('Text', () => {
    it('static-weight-light', function() {
        return this.browser
            .url('TextLight/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
    it('static-weight-regular', function() {
        return this.browser
            .url('TextRegular/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
    it('static-weight-medium', function() {
        return this.browser
            .url('TextMedium/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
    it('static-weight-bold', function() {
        return this.browser
            .url('TextBold/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });

    it('static-colors', function() {
        return this.browser
            .url('TextColors/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });

    it('static-align', function() {
        return this.browser
            .url('TextAlign/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });

    it('static-fade', function() {
        return this.browser
            .url('TextFade/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });

    hermione.skip.in(['ie11', 'firefox'], 'It shouldn\'t work in these browsers', { silent: true });
    it('static-ellipsis', function() {
        return this.browser
            .url('TextEllipsis/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
});
