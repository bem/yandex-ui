/* eslint-disable space-before-function-paren */
// @ts-nocheck
describe('Calendar@next', () => {
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

    it('should render day calendar with outside days', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 's', showOutsideDays: true })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'm', showOutsideDays: true })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'l', showOutsideDays: true })
            .assertView('size-l', [elements.container]);
    });

    it('should render day calendar with week numbers', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 's', showWeekNumbers: true })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'm', showWeekNumbers: true })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'l', showWeekNumbers: true })
            .assertView('size-l', [elements.container]);
    });

    it('should render month calendar with quarters', function () {
        const props = {
            defaultCalendarView: 'month',
            showQuarters: true,
        };

        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 's', ...props })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'm', ...props })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'l', ...props })
            .assertView('size-l', [elements.container]);
    });

    it('should render year calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 's', defaultCalendarView: 'year' })
            .assertView('size-s', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'm', defaultCalendarView: 'year' })
            .assertView('size-m', [elements.container])
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { size: 'l', defaultCalendarView: 'year' })
            .assertView('size-l', [elements.container]);
    });

    it('should render calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase')
            .moveToObject(elements.dayCell1)
            .assertView('hovered-day', [elements.container])
            .click(elements.dayCell1)
            .assertView('selected-day', [elements.container])
            .moveToObject(elements.weekendCell)
            .assertView('hovered-weekend', [elements.container])
            .click(elements.weekendCell)
            .assertView('selected-weekend', [elements.container]);
    });

    it('should render day calendar with disable all days', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { disabled: true })
            .assertView('plain', [elements.container]);
    });

    it('should render day calendar without days of week', function () {
        return this.browser
            .openScenario('Calendar@next', 'SingleCalendarHermioneCase', { showDaysOfWeek: false })
            .assertView('plain', [elements.container]);
    });

    it('should render day range calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'RangeCalendarHermioneCase')
            .moveToObject(elements.dayCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.dayCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.dayCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.dayCell2)
            .assertView('selected-end', [elements.container]);
    });

    it('should render month range calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'RangeCalendarHermioneCase', { minCalendarView: 'month' })
            .moveToObject(elements.monthCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.monthCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.monthCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.monthCell2)
            .assertView('selected-end', [elements.container]);
    });

    it('should render year range calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'RangeCalendarHermioneCase', { minCalendarView: 'year' })
            .moveToObject(elements.yearCell1)
            .assertView('hovered-start', [elements.container])
            .click(elements.yearCell1)
            .assertView('selected-start', [elements.container])
            .moveToObject(elements.yearCell2)
            .assertView('hovered-end', [elements.container])
            .click(elements.yearCell2)
            .assertView('selected-end', [elements.container]);
    });

    it('should render day multiple calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'MultipleCalendarHermioneCase')
            .moveToObject(elements.dayCell1)
            .click(elements.dayCell1)
            .assertView('selected-first', [elements.container])
            .moveToObject(elements.dayCell2)
            .click(elements.dayCell2)
            .assertView('selected-second', [elements.container])
            .moveToObject(elements.dayCell1)
            .click(elements.dayCell1)
            .assertView('unselected-first', [elements.container]);
    });

    it('should render month multiple calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'MultipleCalendarHermioneCase', { minCalendarView: 'month' })
            .moveToObject(elements.monthCell1)
            .click(elements.monthCell1)
            .assertView('selected-first', [elements.container])
            .moveToObject(elements.monthCell2)
            .click(elements.monthCell2)
            .assertView('selected-second', [elements.container])
            .moveToObject(elements.monthCell1)
            .click(elements.monthCell1)
            .assertView('unselected-first', [elements.container]);
    });

    it('should render year multiple calendar', function () {
        return this.browser
            .openScenario('Calendar@next', 'MultipleCalendarHermioneCase', { minCalendarView: 'year' })
            .moveToObject(elements.yearCell1)
            .click(elements.yearCell1)
            .assertView('selected-first', [elements.container])
            .moveToObject(elements.yearCell2)
            .click(elements.yearCell2)
            .assertView('selected-second', [elements.container])
            .moveToObject(elements.yearCell1)
            .click(elements.yearCell1)
            .assertView('unselected-first', [elements.container]);
    });
});
