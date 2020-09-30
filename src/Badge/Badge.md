# Badge



<!-- description:start -->
Индикатор-счетчик новой информации.
<!-- description:end -->

## Использование

Передайте компонент, которому нужно включить индикатор, внутрь блока `Badge`.

```ts
// src/App.ts
import React from 'react'
import { Badge } from '@yandex/ui/Badge'

const App = () => (
  <Badge content={5}>
    <Icon />
  </Badge>
)
```

## Примеры

Использование с иконкой

{{%story::desktop:content-badge-desktop--playground%}}

Использование с кнопкой

{{%story::desktop:content-badge-desktop--badge-in-button%}}

## Свойства

<!-- props:start -->
| Свойство      | Тип                         | Описание                                  |
| ------------- | --------------------------- | ----------------------------------------- |
| innerRef?     | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента |
| style?        | `CSSProperties`             | Пользовательские стили                    |
| className?    | `string`                    | Дополнительный класс                      |
| content?      | `string \| number`          | Содержимое, отображаемое внутри значка    |
| color?        | `string`                    | Цвет заливки блока                        |
| textColor?    | `string`                    | Цвет текста блока                         |
| outlineColor? | `string`                    | Цвет обводки блока                        |
<!-- props:end -->
