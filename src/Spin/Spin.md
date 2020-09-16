# Spin



<!-- description:start -->
Индикатор загрузки. Отображает выполнение какого-то процесса, например загрузки сайта или медиа-файла.
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

configureRootTheme({ theme })
```

Использование с нужным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { compose } from '@bem-react/core'
import {
  Spin as SpinDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/Spin/desktop'

// Композиция из различных модификаторов
const Spin = compose(withSizeM, withViewDefault)(SpinDesktop)

const App = () => {
  return <Spin progress view="default" size="m" />
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { Spin } from '@yandex/ui/Spin/desktop/bundle'

const App = () => {
  return <Spin progress view="default" size="m" />
}
```

## Примеры

### Размер индикатора

Чтобы изменить размер индикатора, установите свойство `size` в одно из следующих значений: `"l"`, `"m"`, `"s"`, `"xs"`, `"xxs"`.

{{%story::desktop:progress-spin-desktop--size%}}

### Расположение индикатора

Чтобы отобразить индикатор по центру, установите свойство `position` в значение `center`.

{{%story::desktop:progress-spin-desktop--position%}}

## Свойства

<!-- props:start -->
| Свойство   | Тип                         | Описание                                   |
| ---------- | --------------------------- | ------------------------------------------ |
| innerRef?  | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента. |
| progress?  | `false \| true`             | Видимость индикатора загрузки.             |
| className? | `string`                    | Дополнительный класс.                      |
<!-- props:end -->
