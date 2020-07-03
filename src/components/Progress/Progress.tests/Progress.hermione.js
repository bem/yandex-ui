describe('Progress', () => {
    it('static', function() {
        return this.browser
            .url('Progress/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
});
