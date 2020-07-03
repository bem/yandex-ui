describe('Badge', () => {
    it('static', function() {
        return this.browser
            .url('Badge/hermione/hermione.html')
            .assertView('plain', ['.Hermione'])
            .moveToObject('.Hermione');
    });
});
