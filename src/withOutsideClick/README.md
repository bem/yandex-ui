# withOutsideClick

<!-- description:start -->
Хелпер для отслеживания кликов вне компонента.
<!-- description:end -->

## Свойства

<!-- props:start -->
| Свойство          | Тип                              | По умолчанию  | Описание                                                                                     |
| ----------------- | -------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| visible?          | `boolean`                        | -             | Видимость компонента                                                                         |
| targetRef?        | `Ref<HTMLElement>`               | -             | Ссылка на корневой DOM-элемент компонента                                                    |
| onEscapeKeyDown?  | `(event: KeyboardEvent) => void` | -             | Обработчик, вызывающийся после нажатия на escape                                             |
| onOutsideClick?   | `(event: MouseEvent) => void`    | -             | Обработчик, вызывающийся после клика вне компонента                                          |
| ignoreRefs?       | `RefObject<HTMLElement>[]`       | []            | Ссылки на DOM-элементы, в рамках которых не нужно отслеживать клик (например, `[anchorRef]`) |
<!-- props:end -->

## Примеры

Пример использования с попапом можно посмотреть тут:
https://github.com/bem/yandex-ui/blob/master/src/Popup/Popup.examples/desktop/target.examples.tsx
