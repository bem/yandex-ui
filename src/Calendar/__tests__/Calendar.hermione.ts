// @ts-nocheck
describe('Calendar', () => {
    const elements = {
        container: '[data-testid=container]',
        weekendCell: '[role=row]:nth-child(1) [role=gridcell]:nth-child(7)',
        dayCell1: '[role=row]:nth-child(2) [role=gridcell]:nth-child(1)',
        dayCell2: '[role=row]:nth-child(3) [role=gridcell]:nth-child(3)',
        monthCell1: '[role=row]:nth-child(1) [role=gridcell]:nth-child(1)',
        monthCell2: '[role=row]:nth-child(3) [role=gridcell]:nth-child(3)',
        yearCell1: '[role=row]:nth-child(1) [role=gridcell]:nth-child(1)',
        yearCell2: '[role=row]:nth-child(3) [role=gridcell]:nth-child(3)',
    };

    it('should render calendar with extra days', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexDayHermioneCase', { showExtraDays: true })
            .assertView('plain', [elements.container]);
    });

    hermione.skip.in(['win-ie11']);
    it('should render day calendar with day labels and week indexes', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexDayHermioneCase', {
                size: 's',
                showWeekIndexes: true,
                showDayLabels: true,
            })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar', 'ComplexDayHermioneCase', {
                size: 'm',
                showWeekIndexes: true,
                showDayLabels: true,
            })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar', 'ComplexDayHermioneCase', {
                size: 'l',
                showWeekIndexes: true,
                showDayLabels: true,
            })
            .assertView('size-l', [elements.container]);
    });

    hermione.skip.in(['win-ie11']);
    it('should render month calendar with quarter indexes', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexMonthHermioneCase', { size: 's', showQuarterIndexes: true })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar', 'ComplexMonthHermioneCase', { size: 'm', showQuarterIndexes: true })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar', 'ComplexMonthHermioneCase', { size: 'l', showQuarterIndexes: true })
            .assertView('size-l', [elements.container]);
    });

    hermione.skip.in(['win-ie11']);
    it('should render year calendar', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexYearHermioneCase', { size: 's' })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar', 'ComplexYearHermioneCase', { size: 'm' })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar', 'ComplexYearHermioneCase', { size: 'l' })
            .assertView('size-l', [elements.container]);
    });

    it('should render calendar', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexDayHermioneCase')
            .moveToObject(elements.dayCell1)
            .assertView('hovered-day', [elements.container])
            .click(elements.dayCell1)
            .assertView('selected-day', [elements.container])
            .moveToObject(elements.weekendCell)
            .assertView('hovered-weekend', [elements.container])
            .click(elements.weekendCell)
            .assertView('selected-weekend', [elements.container]);
    });

    it('should render day calendar with disable all days', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexDayHermioneCase', { allDisabled: true })
            .assertView('plain', [elements.container]);
    });

    it('should render day range calendar', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexRangeHermioneCase', { type: 'day' })
            .moveToObject(elements.dayCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.dayCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.dayCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.dayCell2)
            .assertView('selected-end', [elements.container]);
    });

    hermione.skip.in(['win-ie11']);
    it('should render month range calendar', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexRangeHermioneCase', { type: 'month' })
            .moveToObject(elements.monthCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.monthCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.monthCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.monthCell2)
            .assertView('selected-end', [elements.container]);
    });

    hermione.skip.in(['win-ie11']);
    it('should render year range calendar', function() {
        return this.browser
            .openScenario('Calendar', 'ComplexRangeHermioneCase', { type: 'year' })
            .moveToObject(elements.yearCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.yearCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.yearCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.yearCell2)
            .assertView('selected-end', [elements.container]);
    });
});
