# Select



<!-- description:start -->
Компонент для создания раскрывающегося списка с меню.
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
import { withRegistry, Registry } from '@bem-react/di'

import {
  Select as SelectDesktop,
  cnSelect,
} from '@yandex/ui/Select/desktop'

import { withTogglable } from '@yandex/ui/withTogglable'

import {
  Button as ButtonDesktop,
  withSizeM as withButtonSizeM,
  withViewDefault as withButtonViewDefault,
} from '@yandex/ui/Button/desktop'

import {
  Menu as MenuDesktop,
  withSizeM as withMenuSizeM,
  withViewDefault as withMenuViewDefault,
} from '@yandex/ui/Menu/desktop'

import {
  Popup as PopupDesktop,
  withViewDefault as withPopupViewDefault,
  withTargetAnchor,
} from '@yandex/ui/Popup/desktop'

import {
  Icon as IconDesktop,
  withGlyphCaretsV,
} from '@yandex/ui/Icon/desktop'

const selectRegistry = new Registry({ id: cnSelect() })

const Button = compose(withButtonSizeM, withButtonViewDefault)(ButtonDesktop)

const Menu = compose(withMenuSizeM, withMenuViewDefault)(MenuDesktop)

const Popup = compose(withPopupViewDefault, withTargetAnchor)(PopupDesktop)

const Icon = compose(withGlyphCaretsV)(IconDesktop)

selectRegistry
  .set('Trigger', Button)
  .set('Popup', Popup)
  .set('Menu', Menu)
  .set('Icon', Icon)

const Select = compose(
  withTogglable,
  withRegistry(selectRegistry),
)(SelectDesktop)

const App = () => {
  const [value, setValue] = useState('a')

  return (
    <Select
      size="m"
      view="default"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      options={[
        { value: 'a', content: 'Каждый' },
        { value: 'b', content: 'Охотник' },
        { value: 'c', content: 'Желает', disabled: true },
      ]}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Select } from '@yandex/ui/Select/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('a')

  return (
    <Select
      size="m"
      view="default"
      onChange={(event) => setValue(event.target.value)}
      value={value}
      options={[
        { value: 'a', content: 'Каждый' },
        { value: 'b', content: 'Охотник' },
        { value: 'c', content: 'Желает', disabled: true },
      ]}
    />
  )
}
```

## Примеры

### Вид компонента

Чтобы изменить вид компонента, установите свойство `view` в значение `"default"`.

{{%story::desktop:controls-select-desktop--view%}}

### Размер компонента

Чтобы изменить размер компонента, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`.

{{%story::desktop:controls-select-desktop--size%}}

### Ширина компонента

Чтобы изменить ширину компонента, установите свойство `width` в одно из следующих значений:
- `max` — ширина определяется шириной контейнера. Если ширина текста больше ширины контейнера, текст обрезается многоточием.

{{%story::desktop:controls-select-desktop--width%}}

### Выравнивание по базовой линии

Чтобы выровнять компоненты по базовой линии, установите свойство `baseline` в значение `true`.

### Изменение иконки

Чтобы передать параметры для иконки в триггере, воспользуйтесь свойством `iconProps`.

{{%story::desktop:controls-select-desktop--icon%}}


## Свойства

<!-- props:start -->
| Свойство               | Тип                                                                                                                                                                                                                                                               | По умолчанию | Описание                                                                                                                                                                                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| onBlur?                | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | —            | Событие, которое вызывается при потере фокуса компонентом, например при клике на другом месте экрана                                                                                                                                                                                 |
| onClick?               | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | —            | Событие, которое вызывается при нажатии на компонент                                                                                                                                                                                                                                 |
| onKeyDown?             | `(event: KeyboardEvent<HTMLElement>) => void`                                                                                                                                                                                                                     | —            | Событие, которое вызывается при нажатии клавиш клавиатуры                                                                                                                                                                                                                            |
| addonAfter?            | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Дополнительный контент после компонента `Trigger`                                                                                                                                                                                                                                    |
| addonBefore?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Дополнительный контент перед компонентом `Trigger`                                                                                                                                                                                                                                   |
| innerRef?              | `(instance: HTMLElement) => void \| RefObject<HTMLElement>`                                                                                                                                                                                                       | —            | Ссылка на корневой DOM-элемент компонента                                                                                                                                                                                                                                            |
| options                | `Option[]`                                                                                                                                                                                                                                                        | —            | Набор опций                                                                                                                                                                                                                                                                          |
| placeholder?           | `string`                                                                                                                                                                                                                                                          | `—`          | Вспомогательный текст внутри компонента; отображается, когда значение не выбрано                                                                                                                                                                                                     |
| size?                  | `string`                                                                                                                                                                                                                                                          | —            | Размер компонента                                                                                                                                                                                                                                                                    |
| theme?                 | `string`                                                                                                                                                                                                                                                          | —            | Стилевое оформление компонента                                                                                                                                                                                                                                                       |
| triggerRef?            | `RefObject<HTMLElement>`                                                                                                                                                                                                                                          | —            | Ссылка на корневой DOM-элемент компонента `Trigger`                                                                                                                                                                                                                                  |
| value?                 | `any`                                                                                                                                                                                                                                                             | `''`         | Значение, выбранное в компоненте по умолчанию.<br>Если передана строка или число, то компонент будет работать в режиме `radio` — выбрать можно только один пункт. Если передан массив, то компонент будет работать в режиме `check` — выбрать можно произвольное количество пунктов. |
| view?                  | `string`                                                                                                                                                                                                                                                          | —            | Внешний вид компонента                                                                                                                                                                                                                                                               |
| showAlwaysPlaceholder? | `false \| true`                                                                                                                                                                                                                                                   | —            | Показывать всегда значение из свойства `placeholder` вне зависимости от выбранного значения                                                                                                                                                                                          |
| checkable?             | `false \| true`                                                                                                                                                                                                                                                   | —            | Включает/отключает модификатор `checked` на кнопке селекта                                                                                                                                                                                                                           |
| iconProps?             | `IIconEnhancedProps`                                                                                                                                                                                                                                              | —            | Дополнительные свойства для иконки                                                                                                                                                                                                                                                   |
| onChange?              | `(event: any) => void`                                                                                                                                                                                                                                            | —            | Обработчик изменения значения                                                                                                                                                                                                                                                        |
| opened?                | `false \| true`                                                                                                                                                                                                                                                   | —            | Состояние открытия                                                                                                                                                                                                                                                                   |
| setOpened?             | `(nextOpened: boolean) => void`                                                                                                                                                                                                                                   | —            | Обработчик, устанавливающий состояние открытия                                                                                                                                                                                                                                       |
<!-- props:end -->
