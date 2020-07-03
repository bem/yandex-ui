describe('Divider', () => {
    it('static', function() {
        return this.browser
            .url('Divider/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
});
