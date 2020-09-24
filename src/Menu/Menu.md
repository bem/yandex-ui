# Menu



<!-- description:start -->
Компонент для создания меню.
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
import React, { useState } from 'react'
import { compose } from '@bem-react/core'
import {
  Menu as MenuDesktop,,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/Menu/desktop'

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
import { Menu } from '@yandex/ui/Menu/desktop/bundle'

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

## a11y

1. Навигация по меню осуществляется с помощью Arrow Button [UP, LEFT] [DOWN, RIGHT]
2. Для ScreenReader устанавливается id без этого аттрибута нельзя будет установить `aria-activedescendant={id}` у Select, ссылка <a href='https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions.html' target='_blank'>тут</a>

Больше про доступность меню читайте <a href='https://www.w3.org/TR/wai-aria-practices-1.1/#menu' target='_blank'>тут</a>
