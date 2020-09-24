# Tumbler



<!-- description:start -->
Компонент, предназначенный для создания переключателя.
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
  Tumbler as TumblerDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/Tumbler/desktop'

const Tumbler = compose(withSizeM, withViewDefault)(TumblerDesktop)

const App = () => {
  const [checked, setChecked] = useState('')

  return (
    <Tumbler
      view="default"
      size="m"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Tumbler } from '@yandex/ui/Tumbler/desktop/bundle'

const App = () => {
  const [checked, setChecked] = useState('')

  return (
    <Tumbler
      view="default"
      size="m"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  )
}
```

## Примеры

### Размер переключателя

Чтобы изменить размер переключателя, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:controls-tumbler-desktop--size%}}

### Подпись переключателя

Чтобы добавить подпись для переключателя, установите свойство `labelAfter` либо `labelBefore` с нужным текстом или `jsx` разметкой (например иконка).

> ⚠️ Если установлены обе подписи, то изменение состояния будет происходить только при нажатии на противоположную:
> `unchecked -> labelAfter`, `checked <- labelBefore`.
>
> ⚠️ Для обеспечения доступности с использованием svg-иконки в качестве подписи, необходимо добавить семантическое описание этой иконки в `aria-label`.

{{%story::desktop:controls-tumbler-desktop--label%}}

## Свойства

<!-- props:start -->
| Свойство     | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| checked      | `false \| true`                                                                                                                                                                                                                                                   | Состояние переключателя                                                                                                          |
| className?   | `string`                                                                                                                                                                                                                                                          | Дополнительный класс у корневого DOM-элемента                                                                                    |
| controlRef?  | `RefObject<HTMLInputElement>`                                                                                                                                                                                                                                     | Ссылка на нативный DOM-элемент нативного инпута                                                                                  |
| disabled?    | `false \| true`                                                                                                                                                                                                                                                   | Неактивное состояние переключателя                                                                                               |
| id?          | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                         |
| innerRef?    | `RefObject<HTMLSpanElement>`                                                                                                                                                                                                                                      | Ссылка на корневой DOM-элемент компонента                                                                                        |
| labelAfter?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Подпись после переключателя                                                                                                      |
| labelBefore? | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Подпись перед переключателем                                                                                                     |
| name?        | `string`                                                                                                                                                                                                                                                          | Имя переключателя в форме                                                                                                        |
| onBlur?      | `(event: FocusEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при потере фокуса переключателем                                                                  |
| onChange     | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при изменении состояния                                                                           |
| onClick?     | `(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void`                                                                                                                                                                                                      | Обработчик, который вызывается при нажатии на переключатель                                                                      |
| onFocus?     | `(event: FocusEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                                  | Обработчик, который вызывается при получении фокуса переключателем                                                               |
| onKeyDown?   | `(event: KeyboardEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                               | Обработчик, который вызывается при нажатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)                   |
| onKeyUp?     | `(event: KeyboardEvent<HTMLButtonElement>) => void`                                                                                                                                                                                                               | Обработчик, который вызывается при отжатии клавиши на клавиатуре (при этом переключатель должен быть в фокусе)                   |
| tabIndex?    | `number`                                                                                                                                                                                                                                                          | Целое число, определяющее должен ли переключатель участвовать в последовательной навигации по всей странице с помощью клавиатуры |
| title?       | `string`                                                                                                                                                                                                                                                          | Всплывающая подсказка                                                                                                            |
| autoFocus?   | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает фокус в компонент при монтировании                                                                                 |
| required?    | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает в компоненте обязательное состояние                                                                                |
<!-- props:end -->

## Модификаторы

<!-- modifiers:start -->
### size

Модификатор, отвечающий за размер переключателя.

**Допустимые значения:** `"l"`, `"m"`, `"s"`.

### view

Модификатор, отвечающий за внешний вид переключателя.

**Допустимые значения:** `"default"`.
<!-- modifiers:end -->

# a11y
1) Каждый переключатель должен иметь четкую и лаконичную метку
2) В SreenReader значения зачитываются из props labelBefore и labelAfter
3) Поместите значение выключенного состояния в labelBefore, а включенного в labelAfter
