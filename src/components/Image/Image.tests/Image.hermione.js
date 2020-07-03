describe('Image', () => {
    it('static', function() {
        return this.browser
            .url('Image/hermione/hermione.html')
            .assertView('plain', ['body']);
    });
});
