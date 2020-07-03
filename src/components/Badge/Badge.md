# Badge

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Badge' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Badge.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Индикатор-счётчик новой информации
<!-- description:end -->

## Использование

Передайте компонент которому нужно включить индикатор внутрь блока `Badge`

```ts
// src/App.ts
import React from 'react'
import { Badge } from '@yandex-lego/components/Badge'

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
| content?      | `string \| number`          | Контент блока                             |
| color?        | `string`                    | Цвет заливки блока                        |
| textColor?    | `string`                    | Цвет текста блока                         |
| outlineColor? | `string`                    | Цвет обводки блока                        |
<!-- props:end -->
