# withOutsideClick

<!-- description:start -->
Хелпер для отслеживания кликов вне компонента.
<!-- description:end -->

## Свойства

<!-- props:start -->
| Свойство          | Тип                              | По умолчанию  | Описание                                                                                      |
| ----------------- | -------------------------------- | ------------- | --------------------------------------------------------------------------------------------- |
| visible?          | `boolean`                        | -             | Видимость компонента                                                                          |
| targetRef?        | `Ref<HTMLElement>`               | -             | Ссылка на корневой DOM-элемент компонента                                                     |
| onEscapeKeyDown?  | `(event: KeyboardEvent) => void` | -             | Обработчик вызывающийся после того, как произошло нажатие на escape.                          |
| onOutsideClick?   | `(event: MouseEvent) => void`    | -             | Обработчик вызывающийся после того, как произошел клик вне компонента.                        |
| ignoreRefs?       | `RefObject<HTMLElement>[]`       | []            | Ссылки на DOM элементы, в рамках которых не нужно отслеживать клик. (Например, `[anchorRef]`) |
<!-- props:end -->

## Примеры

Пример использования с попапом можно посмотреть тут:
https://github.yandex-team.ru/search-interfaces/frontend/blob/master/packages/lego-components/src/components/Popup/Popup.examples/desktop/target.examples.tsx
