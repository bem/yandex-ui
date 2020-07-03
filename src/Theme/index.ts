import { cn } from '@bem-react/classname';

import { canUseDOM } from '../lib/canUseDOM';
import { Nullable } from '../typings/utility-types';

export const cnTheme = cn('Theme');

export type Theme = {
    /**
     * Цвета компонентов.
     */
    color: string;

    /**
     * Общие параметры компонентов.
     */
    root: string;
};

type ConfigureRootThemeOptions = {
    /**
     * Корневая тема приложения.
     */
    theme?: Theme;

    /**
     * DOM-Элемент на который должна быть установлена корневая тема.
     *
     * @default HTMLBodyElement
     */
    root?: Nullable<Element>;
};

let prevClassName = '';

export const configureRootTheme = ({
    theme,
    root = canUseDOM() ? document.body : null,
}: ConfigureRootThemeOptions) => {
    if (!canUseDOM()) {
        return;
    }

    if (!root) {
        throw new Error('Значение в root не является DOM-элементом, невозможно установить глобальную тему.');
    }

    // Удаляем старый className, чтобы устранить дубликаты при повторном вызове.
    const rootClassName = root.className.replace(prevClassName, '');

    prevClassName = cnTheme(theme);

    root.className = `${rootClassName} ${prevClassName}`;
};
