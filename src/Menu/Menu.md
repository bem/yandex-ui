# Menu

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Menu' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Menu.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент для создания меню.
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
import React, { useState } from 'react'
import { compose } from '@bem-react/core'
import {
  Menu as MenuDesktop,,
  withSizeM,
  withViewDefault,
} from '@yandex-lego/components/Menu/desktop'

const Menu = compose(withSizeM, withViewDefault)(MenuDesktop)

const App = () => {
  const [value, setValue] = useState('a')

  return (
    <Menu
      size="m"
      view="default"
      value={value}
      items={[
        { value: 'a', content: 'Каждый' },
        { value: 'b', content: 'Охотник' },
        { value: 'c', content: 'Желает', disabled: true },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Menu } from '@yandex-lego/components/Menu/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('a')

  return (
     <Menu
      size="m"
      view="default"
      value={value}
      items={[
        { value: 'a', content: 'Каждый' },
        { value: 'b', content: 'Охотник' },
        { value: 'c', content: 'Желает', disabled: true },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Вид меню

Чтобы изменить вид меню, установите свойство `view` в значение `dafault`.

{{%story::desktop:controls-menu-desktop--view%}}

### Стилевое оформление

Чтобы изменить стилевое оформление меню, установите свойство `theme` в значение `"normal"`.

{{%story::desktop:controls-menu-desktop--theme%}}

### Размер меню

Чтобы изменить размер меню, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:controls-menu-desktop--size%}}

### Ширина меню

Чтобы изменить ширину меню, установите свойство `width` в одно из следующих значений:

- `auto` — ширина определяется шириной текста. Ширина меню не может быть больше ширины контейнера. Если ширина текста больше ширины контейнера, текст обрезается многоточием.
- `max` — ширина определяется шириной контейнера. Если ширина текста больше ширины контейнера, текст обрезается многоточием.

{{%story::desktop:controls-menu-desktop--width%}}

## Свойства

<!-- props:start -->
| Свойство   | Тип                    | Описание                                                                                                                                |
| ---------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| focused?   | `false \| true`        | Состояние фокуса на меню. Необходимо для активации клавиатурной навигации                                                               |
| items      | `MixedItem[]`          | Список пунктов меню                                                                                                                     |
| onChange?  | `ChangeEventHandler<HTMLElement>` | Обработчик изменения значения                                                                                                           |
| value?     | `any`                  | Пункт меню или список пунктов, которые выбраны по умолчанию. Значения должны совпадать со значениями `value`, которые указаны в `items` |
| disabled?  | `false \| true`        | Неактивное состояние компонента. Состояние, при котором меню отображается, но недоступно для действий пользователя                      |
| innerRef?  | `any`                  | Ссылка на корневой DOM-элемент компонента                                                                                               |
| className? | `string`               | Дополнительный класс                                                                                                                    |
| style?     | `CSSProperties`        | Html атрибут `style`                                                                                                                    |
<!-- props:end -->
