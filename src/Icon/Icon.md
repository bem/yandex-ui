# Icon



<!-- description:start -->
Компонент для вставки иконки.
<!-- description:end -->

## Пример использования

Использование с нужным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { compose } from '@bem-react/core'
import {
  Icon as IconDesktop,
  withGlyphTypeArrow,
} from '@yandex/ui/Icon/desktop'

const Icon = compose(withGlyphTypeArrow)(IconDesktop)

const App = () => {
  return <Icon glyph="type-arrow" />
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { Icon } from '@yandex/ui/Icon/desktop/bundle'

const App = () => {
  return <Icon glyph="type-arrow" />
}
```

## Примеры

### Тип

С помощью свойства `type`:

{{%story::desktop:content-icon-desktop--type%}}

С помощью свойства `glyph`:

{{%story::desktop:content-icon-desktop--glyph%}}

### Направление иконки-стрелки

Чтобы задать направление иконки-стрелки, установите свойство `direction` в одно из следующих значений: `"left"`, `"top"`, `"right"`, `"bottom"`.

{{%story::desktop:content-icon-desktop--direction%}}

### Размер иконки

Чтобы задать размер иконки, используйте свойство `size`.

{{%story::desktop:content-icon-desktop--size%}}

### Цвет иконки

Чтобы задать цвет `glyph`-иконки, используйте свойство `style`.

{{%story::desktop:content-icon-desktop--style%}}

### Собственная иконка

Чтобы вставить собственную иконку, используйте свойство `url`. В нем можно указать URL-путь до иконки или содержимое картинки в кодировке base64.

Иконка вставляется как `span` с `background-image`, поэтому, чтобы иконка отображалась правильно, укажите ее ширину и высоту с помощью свойства `style`.

{{%story::desktop:content-icon-desktop--url%}}

## Свойства

<!-- props:start -->
| Свойство   | Тип                                                                                                                                                                                   | По умолчанию | Описание                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------- |
| direction? | `"left" \| "top" \| "right" \| "bottom"`                                                                                                                                              | —            | Направление для иконки-стрелки                                   |
| size?      | `"ns" \| "xs" \| "s" \| "m" \| "n" \| "l" \| "head"`                                                                                                                                  | —            | Размер иконки                                                    |
| style?     | `CSSProperties`                                                                                                                                                                       | `{}`         | CSS-стили иконки                                                 |
| url?       | `string`                                                                                                                                                                              | —            | Ссылка на изображение или содержимое картинки в кодировке base64 |
| className? | `string`                                                                                                                                                                              | —            | Дополнительный класс                                             |
| children?  | `ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>` | —            | Контент иконки                                                   |
| title?     | `string`                                                                                                                                                                              | —            | Всплывающая подсказка                                            |
| onClick?   | `(event: MouseEvent<HTMLSpanElement, MouseEvent>) => void`                                                                                                                            | —            | Обработчик, который вызывается при клике на иконку               |
<!-- props:end -->
