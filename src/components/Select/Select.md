# Select

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Select' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Select.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент для создания раскрывающегося списка с меню.
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
import { withRegistry, Registry } from '@bem-react/di'

import {
  Select as SelectDesktop,
  cnSelect,
} from '@yandex-lego/components/Select/desktop'

import { withTogglable } from '@yandex-lego/components/withTogglable'

import {
  Button as ButtonDesktop,
  withSizeM as withButtonSizeM,
  withViewDefault as withButtonViewDefault,
} from '@yandex-lego/components/Button/desktop'

import {
  Menu as MenuDesktop,
  withSizeM as withMenuSizeM,
  withViewDefault as withMenuViewDefault,
} from '@yandex-lego/components/Menu/desktop'

import {
  Popup as PopupDesktop,
  withViewDefault as withPopupViewDefault,
  withTargetAnchor,
} from '@yandex-lego/components/Popup/desktop'

import {
  Icon as IconDesktop,
  withGlyphCaretsV,
} from '@yandex-lego/components/Icon/desktop'

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
import { Select } from '@yandex-lego/components/Select/desktop/bundle'

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

## Свойства

<!-- props:start -->
| Свойство               | Тип                                                                                                                                                                                                                                                               | По умолчанию | Описание                                                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBlur?                | `(event: FocusEvent<HTMLElement>) => void`                                                                                                                                                                                                                        | —            | Событие, которое вызывается при потере фокуса компонентом. Например, при клике на другом месте экрана.                                                                                                                                                                     |
| onClick?               | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | —            | Событие, которое вызывается при нажатии на компонент.                                                                                                                                                                                                                      |
| onKeyDown?             | `(event: KeyboardEvent<HTMLElement>) => void`                                                                                                                                                                                                                     | —            | Событие, которое вызывается при нажатии клавиш клавиатуры.                                                                                                                                                                                                                 |
| addonAfter?            | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Дополнительный контент после компонента `Trigger`.                                                                                                                                                                                                                         |
| addonBefore?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Дополнительный контент перед компонентом `Trigger`.                                                                                                                                                                                                                        |
| innerRef?              | `(instance: HTMLElement) => void \| RefObject<HTMLElement>`                                                                                                                                                                                                       | —            | Ссылка на корневой DOM элемент компонента.                                                                                                                                                                                                                                 |
| options                | `Option[]`                                                                                                                                                                                                                                                        | —            | Набор опций.                                                                                                                                                                                                                                                               |
| placeholder?           | `string`                                                                                                                                                                                                                                                          | `—`          | Вспомогательный текст внутри компонента. Отображается, когда значение не выбрано.                                                                                                                                                                                          |
| size?                  | `string`                                                                                                                                                                                                                                                          | —            | Размер компонента.                                                                                                                                                                                                                                                         |
| theme?                 | `string`                                                                                                                                                                                                                                                          | —            | Стилевое оформление компонента.                                                                                                                                                                                                                                            |
| triggerRef?            | `RefObject<HTMLElement>`                                                                                                                                                                                                                                          | —            | Ссылка на корневой DOM элемент компонента `Trigger`.                                                                                                                                                                                                                       |
| value?                 | `string \| string[]`                                                                                                                                                                                                                                              | `''`         | Значение, выбранное в компоненте по умолчанию.<br>Если передана строка, то компонент будет работать в режиме `radio` — выбрать можно только один пункт. Если передан массив, то компонент будет работать в режиме `check` — выбрать можно произвольное количество пунктов. |
| view?                  | `string`                                                                                                                                                                                                                                                          | —            | Внешний вид компонента.                                                                                                                                                                                                                                                    |
| showAlwaysPlaceholder? | `false \| true`                                                                                                                                                                                                                                                   | —            | Показывать всегда значение из свойства `placeholder` вне зависимости от выбранного значения.                                                                                                                                                                               |
| checkable?             | `false \| true`                                                                                                                                                                                                                                                   | —            | Включает/отключает модификатор `checked` на кнопке селекта.                                                                                                                                                                                                                |
| opened?                | `false \| true`                                                                                                                                                                                                                                                   | —            | Состояние открытия.                                                                                                                                                                                                                                                        |
| setOpened?             | `(nextOpened: boolean) => void`                                                                                                                                                                                                                                   | —            | Обработчик устанавливающий состояние открытия.                                                                                                                                                                                                                             |
<!-- props:end -->
