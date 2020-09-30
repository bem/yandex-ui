# Textinput



<!-- description:start -->
Однострочное текстовое поле.
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
  Textinput as TextinputDesktop,
  withViewDefault,
  withSizeM,
} from '@yandex/ui/Textinput/desktop'

// Композиция из различных модификаторов
const Textinput = compose(withViewDefault, withSizeM)(TextinputDesktop)

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Textinput
      size="m"
      view="default"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import { Textinput } from '@yandex/ui/Textinput/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Textinput
      size="m"
      view="default"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

## Примеры

### Вид поля

Чтобы изменить вид поля, установите свойство `view` в значение `"default"`.

{{%story::desktop:controls-textinput-desktop--view%}}

### Стилевое оформление

Чтобы изменить стилевое оформление поля, установите свойство `theme` в одно из следующих значений: `"normal"`, `"websearch"`.

{{%story::desktop:controls-textinput-desktop--theme%}}

### Размер поля

Чтобы изменить размер поля, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:controls-textinput-desktop--size%}}

### Выравнивание

Чтобы выровнять компоненты по базовой линии, установите свойство `baseline`.

{{%story::desktop:controls-textinput-desktop--baseline%}}

### Тип поля

Чтобы изменить тип поля, установите свойство `type`.

{{%story::desktop:controls-textinput-desktop--type%}}

### Границы поля

Чтобы изменить границы поля, установите свойство `pin`.

{{%story::desktop:controls-textinput-desktop--pin%}}

### Состояние ошибки

Чтобы задать состояние ошибки, нужно передать свойство `state` со значением `error`.
Чтобы установить текст ошибки, нужно передать значение в свойство `hint`.

{{%story::desktop:controls-textinput-desktop--state%}}

### debounce для onChange

Чтобы обработчик `onChange` текстового поля срабатывал реже, можно применить `withDebounceInput`, который добавляет свойства:
- `minLength` — минимальная длина строки для вызова `onChange` (по умолчанию `0`);
- `debounceTimeout` — минимальное время между вызовами `onChange` в миллисекундах (по умолчанию `0`);
- `forceNotifyByEnter` — форсировать вызов `onChange` по нажатию Enter (по умолчанию `true`);
- `forceNotifyOnBlur` — форсировать вызов `onChange` при потере фокуса (по умолчанию `true`).

{{%story::desktop:controls-textinput-desktop--debounce%}}

### Крестик для очистки

Чтобы добавить крестик для очистки текстового поля, установите свойство `hasClear`.
Для появления крестика установите не пустое `value` в компоненте (не работает с `defaultValue`).

{{%story::desktop:controls-textinput-desktop--has-clear%}}

| Свойство      | Тип                                                        | Описание                                     |
| ------------- | ---------------------------------------------------------- | -------------------------------------------- |
| hasClear?     | `false \| true`                                            | Наличие крестика для очистки текстового поля |
| onClearClick? | `(event: MouseEvent<HTMLSpanElement, MouseEvent>) => void` | Обработчик клика по крестику                 |

## Свойства

<!-- props:start -->
| Свойство      | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClick?      | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие, которое вызывается при нажатии на компонент                                                                                                                                               |
| onMouseDown?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию похоже на `onClick` и возникает в момент нажатия кнопки мыши; `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`                      |
| onMouseUp?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши; курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup` |
| focused?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние фокуса на компоненте                                                                                                                                                                     |
| pressed?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние нажатия на компоненте                                                                                                                                                                    |
| addonAfter?   | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент после контрола                                                                                                                                                              |
| addonBefore?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент перед контролом                                                                                                                                                             |
| iconLeft?     | `ReactElement<IIconProps, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>`                                                                      | Иконка слева от содержимого текстового поля                                                                                                                                                        |
| iconRight?    | `ReactElement<IIconProps, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>`                                                                      | Иконка справа от содержимого текстового поля                                                                                                                                                       |
| innerRef?     | `(instance: HTMLSpanElement) => void \| RefObject<HTMLSpanElement>`                                                                                                                                                                                               | Ссылка на корневой DOM-элемент компонента                                                                                                                                                          |
| style?        | `CSSProperties`                                                                                                                                                                                                                                                   | Пользовательские стили на корневом DOM-элементе                                                                                                                                                    |
| hint?         | `string`                                                                                                                                                                                                                                                          | Текст-подсказка, появляющаяся после компонента; может иметь различное визуальное оформление в зависимости от свойства `state`                                                                      |
| state?        | `"error"`                                                                                                                                                                                                                                                         | Визуальное состояние компонента; может использоваться при проверке формы на корректность                                                                                                           |
| title?        | `string`                                                                                                                                                                                                                                                          | Всплывающая подсказка                                                                                                                                                                              |
| inputMode?    | `"decimal" \| "numeric" \| "text" \| "url" \| "email" \| "search" \| "tel"`                                                                                                                                                                                       | HTML-атрибут `inputmode`                                                                                                                                                                           |
| controlRef?   | `(instance: HTMLInputElement) => void \| RefObject<HTMLInputElement>`                                                                                                                                                                                             | Ссылка на DOM-элемент нативного инпута                                                                                                                                                             |
| autoFocus?    | `false \| true`                                                                                                                                                                                                                                                   | HTML-атрибут `autofocus`                                                                                                                                                                           |
| autoComplete? | `string`                                                                                                                                                                                                                                                          | HTML-атрибут `autocomplete`                                                                                                                                                                        |
| name?         | `string`                                                                                                                                                                                                                                                          | Имя компонента                                                                                                                                                                                     |
| placeholder?  | `string`                                                                                                                                                                                                                                                          | Плейсхолдер                                                                                                                                                                                        |
| value?        | `string \| number`                                                                                                                                                                                                                                                | Значение контрола                                                                                                                                                                                  |
| defaultValue? | `string \| number`                                                                                                                                                                                                                                                | Значение контрола по умолчанию                                                                                                                                                                     |
| type?         | `string`                                                                                                                                                                                                                                                          | HTML-атрибут `type`                                                                                                                                                                                |
| disabled?     | `false \| true`                                                                                                                                                                                                                                                   | HTML-атрибут `disabled`                                                                                                                                                                            |
| id?           | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                                                                                           |
| className?    | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                               |
| onChange?     | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | Обработчик изменения значения                                                                                                                                                                      |
| onMouseLeave? | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void`                                                                                                                                                                                                       | Обработчик события `onMouseLeave`                                                                                                                                                                  |
| onMouseEnter? | `(event: MouseEvent<HTMLInputElement, MouseEvent>) => void`                                                                                                                                                                                                       | Обработчик события `onMouseEnter`                                                                                                                                                                  |
| onBlur?       | `(event: FocusEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                   | Обработчик, вызываемый при срабатывании события blur                                                                                                                                               |
| onFocus?      | `(event: FocusEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                   | Обработчик, вызываемый при срабатывании события focus                                                                                                                                              |
| required?     | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает в компоненте обязательное состояние                                                                                                                                                  |
| min?          | `number`                                                                                                                                                                                                                                                          | Минимальное значение при использовании `type=number`                                                                                                                                               |
| max?          | `number`                                                                                                                                                                                                                                                          | Максимальное значение при использовании `type=number`                                                                                                                                              |
| pattern?      | `string`                                                                                                                                                                                                                                                          | Шаблон, используемый для проверки значения при отправке формы                                                                                                                                      |
| tabIndex?     | `number`                                                                                                                                                                                                                                                          | Целое число, определяющее, должен ли переключатель участвовать в последовательной навигации по всей странице с помощью клавиатуры                                                                  |
| maxLength?    | `number`                                                                                                                                                                                                                                                          | Максимальное количество символов, которое можно ввести в текстовое поле                                                                                                                            |
| readOnly?     | `false \| true`                                                                                                                                                                                                                                                   | Запрещает изменять значение в текстовом поле                                                                                                                                                       |
| onKeyUp?      | `(event: KeyboardEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                | Обработчик, вызываемый при срабатывании события keyup                                                                                                                                              |
| onKeyPress?   | `(event: KeyboardEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                | Обработчик, вызываемый при срабатывании события keypress                                                                                                                                           |
| onKeyDown?    | `(event: KeyboardEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                | Обработчик, вызываемый при срабатывании события keydown                                                                                                                                            |
<!-- props:end -->
