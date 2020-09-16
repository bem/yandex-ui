# RadioButton



<!-- description:start -->
Компонент для создания радиогруппы.
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
  RadioButton as RadioButtonDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/RadioButton/desktop'

const RadioButton = compose(withSizeM, withViewDefault)(RadioButtonDesktop)

const App = () => {
  const [value, setValue] = useState('value1')

  return (
    <RadioButton
      size="m"
      view="default"
      value={value}
      options={[
        { value: 'value1', children: 'Радио 1' },
        { value: 'value2', children: <>Радио 2</> },
        { value: 'value3', children: <><span>Радио</span> 3</> },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { RadioButton } from '@yandex/ui/RadioButton/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('value1')

  return (
    <RadioButton
      size="m"
      view="default"
      value={value}
      options={[
        { value: 'value1', children: 'Радио 1' },
        { value: 'value2', children: <>Радио 2</> },
        { value: 'value3', children: <><span>Радио</span> 3</> },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Оформление радиогруппы

Для различного оформления радиогруппы, установите свойство `view` в значение `"default"`.

{{%story::desktop:controls-radiobutton-desktop--view%}}

### Размер радиогруппы

Чтобы изменить размер радиогруппы, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:controls-radiobutton-desktop--size%}}

## Свойства

<!-- props:start -->
| Свойство    | Тип                                                         | Описание                                         |
| ----------- | ----------------------------------------------------------- | ------------------------------------------------ |
| options     | `IRadioButtonOption[]`                                      | Набор опций.                                     |
| innerRef?   | `RefObject<HTMLSpanElement>`                                | Ссылка на корневой DOM-элемент компонента.       |
| style?      | `CSSProperties`                                             | Пользовательские стили на корневом DOM-элементе. |
| aria-label? | `string`                                                    | Метка для радиогруппы.                           |
| value       | `string`                                                    | HTML атрибут `value`, значение контрола.         |
| name?       | `string`                                                    | HTML атрибут `name`, имя компонента.             |
| disabled?   | `false \| true`                                             | HTML атрибут `disabled`.                         |
| className?  | `string`                                                    | Дополнительный класс.                            |
| onClick?    | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void` | Обработчик клика.                                |
| onChange?   | `(event: ChangeEvent<HTMLInputElement>) => void`            | Обработчик изменения значения.                   |
<!-- props:end -->
