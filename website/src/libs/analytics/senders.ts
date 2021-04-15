// название целей
// новые можно завести тут https://metrika.yandex.ru/69055450?tab=goals
// инструкция https://yandex.ru/support/metrica/general/goal-js-event.html#create-goal
export type MetrikaButtonCopy = 'button-copy';
export type MetrikaButtonCodesandbox = 'button-codesandbox';
export type MetrikaButtonExampleCode = 'button-example-code';

export type MetrikaGoals = MetrikaButtonCopy | MetrikaButtonCodesandbox | MetrikaButtonExampleCode;

export const COUNTER_ID = process.env.GATSBY_METRICA_ID;

// метод отправляет информацию об изменении страницы
export function sendMetrikaHit(href: string) {
    // @ts-ignore
    if (window.ym) {
        // @ts-ignore
        window.ym(COUNTER_ID, 'hit', href);
    }
}

export function sendMetrikaGoal(goal: MetrikaGoals) {
    // @ts-ignore
    if (window.ym) {
        // @ts-ignore
        window.ym(COUNTER_ID, 'reachGoal', goal);
    }
}
