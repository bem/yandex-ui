# Progress



<!-- description:start -->
Компонент для создания полосы прогресса.
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

configureRootTheme({ theme })
```

Использование компонента:

```ts
// src/App.ts
import React from 'react'
import { Progress } from '@yandex/ui/Progress/desktop'

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
