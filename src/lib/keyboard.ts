export type Keys = Record<string, number> & Record<KeyboardKeys, number>;

// TODO: Поддержать только допустимые number значения
export type KeyboardKeys =
    | 'BACKSPACE'
    | 'TAB'
    | 'ENTER'
    | 'CAPS_LOCK'
    | 'ESC'
    | 'SPACE'
    | 'PAGE_UP'
    | 'PAGE_DOWN'
    | 'END'
    | 'HOME'
    | 'LEFT'
    | 'UP'
    | 'RIGHT'
    | 'DOWN'
    | 'INSERT'
    | 'DELETE'
    | number;

/**
 * Набор клавиатурных клавиш.
 */
export const Keys: Keys = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46,
};

/**
 * Проверяет совпадает ли название либо номер клавиши из `keys` с тем, что передано в `code`.
 *
 * @example
 * isKeyCode(event.keyCode, [Keys.ESC, Keys.ENTER])
 *
 * @param code Код клавиши.
 * @param keys Список клавиш в виде строкового или числового представления.
 */
export function isKeyCode(code: number, keys: Array<KeyboardKeys | number>): boolean {
    return keys.some((value: string | number) => Keys[value] === code || value === code);
}
