# Progress

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Progress' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Progress.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент для создания полосы прогресса.
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex-lego/components/Theme'
import { theme } from '@yandex-lego/components/Theme/presets/default'

configureRootTheme({ theme })
```

Использование компонента:

```ts
// src/App.ts
import React from 'react'
import { Progress } from '@yandex-lego/components/Progress/desktop'

const App = () => {
  return <Progress timing="linear" value={50} maxValue={100}/>
}
```

## Свойства

<!-- props:start -->
| Свойство   | Тип                         | По умолчанию | Описание                                                 |
| ---------- | --------------------------- | ------------ | -------------------------------------------------------- |
| maxValue?  | `number`                    | `1`          | Максимальное допустимое значение прогресс бара           |
| value?     | `number`                    | `0`          | Доля загрузки прогресс бара от 0 до maxValue             |
| timing?    | `"linear"`                  | —            | Способ CSS-анимации при изменении ширины полосы загрузки |
| innerRef?  | `RefObject<HTMLDivElement>` | —            | Ссылка на корневой DOM-элемент компонента                |
| style?     | `CSSProperties`             | —            | Пользовательские стили                                   |
| className? | `string`                    | —            | Дополнительный класс                                     |
<!-- props:end -->
