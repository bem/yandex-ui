# Spin

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Spin' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Spin.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Индикатор загрузки. Отображает выполнение какого-то процесса, например загрузки сайта или медиа-файла.
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex-lego/components/Theme'
import { theme } from '@yandex-lego/components/Theme/presets/default'

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
} from '@yandex-lego/components/Spin/desktop'

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
import { Spin } from '@yandex-lego/components/Spin/desktop/bundle'

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
