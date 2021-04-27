export type BaseLogoaasProps = {
    circle?: boolean | string;
    /**
     * Размер в пунктах SketchApp
     */
    size?: number;

    /**
     * Цвет текста.
     */
    color?: string;
    /**
     * Цвет первой буквы
     * По умолчанию цвет текста - черный.
     * А цвет первой буквы слова "Яндекс" или "Yandex" - красный.
     * Можно указать другой цвет первой буквы.
     *
     * Замена цвета первой буквы работает ТОЛЬКО, если не указан основной цвет текста, либо цвет черный.
     */
    first?: string;

    /**
     * Домен для ссылки на Яндекс
     * Логотип будет вести на yandex.tld, если не передан href.
     */
    tld?: string;

    /**
     * Текст на Логотипе.
     * @default Яндекс
     */
    name?: string;

    /** Новый дизайн Яндекса
     * Рекомендуем внимательно ознакомиться с новой версией Logoaas
     * @see https://github.yandex-team.ru/soft/logoaas/blob/develop/README.md
     */
    rebranding?: boolean;

    /**
     * Параметр для нового логотипа в Logoaas
     *
     * @see https://github.yandex-team.ru/soft/logoaas/blob/develop/README.md#доступные-параметры
     *
     * Сделает первую букву красной, а размер всегда будет 48
     */
    single?: boolean;
}

export function getLogoaasUrl({
    name,
    size,
    color,
    first,
    circle = false,
    rebranding,
    single = false,
}: BaseLogoaasProps) {
    let base = '//yastatic.net/q/logoaas/';
    if (rebranding) base += 'v2/';
    const circleParam = typeof circle === 'boolean' ? Number(circle) : circle;
    const singleParam = typeof single === 'boolean' ? Number(single) : single;
    return `${base}${name}.svg?size=${size}&color=${color}&first=${first}&circle=${circleParam}&single=${singleParam}`;
}
