// @ts-nocheck

const NULL_KEY = '\uE000';
const isFocused = (value) => assert.isTrue(value);

describe('useFocusTrap', () => {
    it('default', function() {
        const { browserId } = this.browser.executionContext;
        const elements = {
            trigger: '[data-test-id=trigger]',
            link1: '[data-test-id=link-1]',
            link2: '[data-test-id=link-2]',
            link3: '[data-test-id=link-3]',
        };
        const tabbable = [elements.link1, elements.link2, elements.link3];

        let browser = this.browser
            .url('useFocusTrap/hermione/hermione.html?scenario=default')
            .leftClick(elements.trigger);

        // forward
        for (let i = 0; i < tabbable.length; i++) {
            browser = browser
                .hasFocus(tabbable[i])
                .then(isFocused)
                .keys('Tab');
        }

        browser = browser.hasFocus(tabbable[0]).then(isFocused);

        // NOTE: В webdriver под IE не работают адекватно комбинации клавиш
        if (browserId !== 'win-ie11') {
            // backward
            for (let i = tabbable.length - 1; i >= 0; i--) {
                browser = browser
                    .keys(['Shift', 'Tab', NULL_KEY])
                    .hasFocus(tabbable[i])
                    .then(isFocused);
            }
        }

        return browser;
    });

    it('autofocus', function() {
        const elements = {
            trigger: '[data-test-id=trigger]',
            autoFocusElement: '[data-test-id=autofocus-element]',
        };

        return this.browser
            .url('useFocusTrap/hermione/hermione.html?scenario=autofocus')
            .leftClick(elements.trigger)

            .hasFocus(elements.autoFocusElement)
            .then(isFocused);
    });

    it('order', function() {
        const { browserId } = this.browser.executionContext;
        const elements = {
            trigger: '[data-test-id=trigger]',
            tabbable1: '[data-test-id=tabbable-1]',
            tabbable2: '[data-test-id=tabbable-2]',
            tabbable3: '[data-test-id=tabbable-3]',
            tabbable4: '[data-test-id=tabbable-4]',
            tabbable5: '[data-test-id=tabbable-5]',
            tabbable6: '[data-test-id=tabbable-6]',
        };
        const tabbable = [
            elements.tabbable1,
            elements.tabbable2,
            elements.tabbable3,
            elements.tabbable4,
            elements.tabbable5,
            elements.tabbable6,
        ];

        let browser = this.browser
            .url('useFocusTrap/hermione/hermione.html?scenario=order')
            .leftClick(elements.trigger);

        // forward
        for (let i = 0; i < tabbable.length; i++) {
            browser = browser
                .hasFocus(tabbable[i])
                .then(isFocused)
                .keys('Tab');
        }

        browser = browser.hasFocus(tabbable[0]).then(isFocused);

        // NOTE: В webdriver под IE не работают адекватно комбинации клавиш
        if (browserId !== 'win-ie11') {
            // backward
            for (let i = tabbable.length - 1; i >= 0; i--) {
                browser = browser
                    .keys(['Shift', 'Tab', NULL_KEY])
                    .hasFocus(tabbable[i])
                    .then(isFocused);
            }
        }

        return browser;
    });
});
