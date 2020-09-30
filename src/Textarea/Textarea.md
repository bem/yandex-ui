# Textarea



<!-- description:start -->
Многострочное текстовое поле.
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
  Textarea as TextareaDesktop,
  withViewDefault,
  withSizeM,
} from '@yandex/ui/Textarea/desktop'

// Композиция из различных модификаторов
const Textarea = compose(withViewDefault, withSizeM)(TextareaDesktop)

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
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
import { Textarea } from '@yandex/ui/Textarea/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('')

  return (
    <Textarea
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

Чтобы изменить вид текстового поля, установите свойство `view` в значение `"default"`.

{{%story::desktop:controls-textarea-desktop--view%}}

### Стилевое оформление

Чтобы изменить стилевое оформление текстового поля, установите свойство `theme` в значение `"normal"`.

{{%story::desktop:controls-textarea-desktop--theme%}}

### Размер поля

Чтобы изменить размер текстового поля, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:controls-textarea-desktop--size%}}

### Крестик для очистки

Чтобы добавить крестик для очистки текстового поля, установите свойство `hasClear`.
Для появления крестика установите не пустое `value` в компоненте (не работает с `defaultValue`).

{{%story::desktop:controls-textarea-desktop--has-clear%}}

| Свойство      | Тип                                                        | Описание                                     |
| ------------- | ---------------------------------------------------------- | -------------------------------------------- |
| hasClear?     | `false \| true`                                            | Наличие крестика для очистки текстового поля |
| onClearClick? | `(event: MouseEvent<HTMLSpanElement, MouseEvent>) => void` | Обработчик клика по крестику                 |

### Состояние ошибки

Чтобы задать состояние ошибки, нужно передать свойство `state` со значением `error`.
Чтобы установить текст ошибки, нужно передать значение в свойство `hint`.

{{%story::desktop:controls-textarea-desktop--state%}}

### debounce для onChange

Чтобы обработчик `onChange` текстового поля срабатывал реже, можно применить `withDebounceInput`, который добавляет свойства:
- `minLength` — минимальная длина строки для вызова `onChange` (по умолчанию `0`);
- `debounceTimeout` — минимальное время между вызовами `onChange` в миллисекундах (по умолчанию `0`);
- `forceNotifyByEnter` — форсировать вызов `onChange` по нажатию Enter (по умолчанию `true`);
- `forceNotifyOnBlur` — форсировать вызов `onChange` при потере фокуса (по умолчанию `true`).

{{%story::desktop:controls-textarea-desktop--debounce%}}

### Подстройка высоты текстового поля по мере набора текста

Чтобы высота текстового поля увеличивалась при наборе текста и не появлялся скролл, нужно обернуть компонент с помощью `withAutoResize`.

{{%story::desktop:controls-textarea-desktop--auto-resize%}}

## Свойства

<!-- props:start -->
| Свойство      | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClick?      | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие, которое вызывается при нажатии на компонент                                                                                                                                               |
| onMouseDown?  | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию похоже на `onClick` и возникает в момент нажатия на кнопку мыши; `onClick` в каком-то смысле является комбинацией событий `onMouseDown` и `onMouseUp`                   |
| onMouseUp?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Событие по своему действию противоположно событию `onMouseDown` и происходит при отпускании кнопки мыши; курсор должен находится в пределах HTML-элемента, к которому добавлен атрибут `onmouseup` |
| onMouseLeave? | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Обработчик события `onMouseLeave`                                                                                                                                                                  |
| onMouseEnter? | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | Обработчик события `onMouseEnter`                                                                                                                                                                  |
| focused?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние фокуса на компоненте                                                                                                                                                                     |
| pressed?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние нажатия на компоненте                                                                                                                                                                    |
| disabled?     | `false \| true`                                                                                                                                                                                                                                                   | Неактивное состояние компонента: состояние, при котором компонент отображается, но недоступен для действий пользователя                                                                            |
| hovered?      | `false \| true`                                                                                                                                                                                                                                                   | Состояние, которое возникает при наведении на компонент курсором                                                                                                                                   |
| addonAfter?   | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент после контрола                                                                                                                                                              |
| addonBefore?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Дополнительный контент перед контролом                                                                                                                                                             |
| innerRef?     | `(instance: HTMLSpanElement) => void \| RefObject<HTMLSpanElement>`                                                                                                                                                                                               | Ссылка на корневой DOM-элемент компонента                                                                                                                                                          |
| wrapRef?      | `(instance: HTMLSpanElement) => void \| RefObject<HTMLSpanElement>`                                                                                                                                                                                               | Ссылка на враппер DOM-элемента нативного инпута                                                                                                                                                    |
| hint?         | `string`                                                                                                                                                                                                                                                          | Текст-подсказка, появляющийся после компонента; может иметь различное визуальное оформление в зависимости от свойства `state`                                                                      |
| state?        | `"error"`                                                                                                                                                                                                                                                         | Визуальное состояние компонента; может использоваться при проверке формы на корректность                                                                                                           |
| title?        | `string`                                                                                                                                                                                                                                                          | Всплывающая подсказка                                                                                                                                                                              |
| onBlur?       | `(event: FocusEvent<T>) => void`                                                                                                                                                                                                                                  | Описание отсутствует                                                                                                                                                                               |
| onFocus?      | `(event: FocusEvent<T>) => void`                                                                                                                                                                                                                                  | Описание отсутствует                                                                                                                                                                               |
| controlRef?   | `(instance: T) => void \| RefObject<T>`                                                                                                                                                                                                                           | Ссылка на DOM-ноду нативного контрола                                                                                                                                                              |
| onChange?     | `(event: ChangeEvent<HTMLTextAreaElement>) => void`                                                                                                                                                                                                               | Обработчик изменения значения                                                                                                                                                                      |
| autoFocus?    | `false \| true`                                                                                                                                                                                                                                                   | HTML-атрибут `autofocus`                                                                                                                                                                           |
| id?           | `string`                                                                                                                                                                                                                                                          | Уникальный id компонента                                                                                                                                                                           |
| name?         | `string`                                                                                                                                                                                                                                                          | HTML-атрибут `name`                                                                                                                                                                                |
| placeholder?  | `string`                                                                                                                                                                                                                                                          | Плейсхолдер                                                                                                                                                                                        |
| className?    | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                               |
| cols?         | `number`                                                                                                                                                                                                                                                          | HTML-атрибут `cols`                                                                                                                                                                                |
| rows?         | `number`                                                                                                                                                                                                                                                          | HTML-атрибут `rows`                                                                                                                                                                                |
| value?        | `string`                                                                                                                                                                                                                                                          | Значение контрола                                                                                                                                                                                  |
| defaultValue? | `string`                                                                                                                                                                                                                                                          | Значение контрола по умолчанию                                                                                                                                                                     |
| required?     | `false \| true`                                                                                                                                                                                                                                                   | Устанавливает в компоненте обязательное состояние                                                                                                                                                  |
| tabIndex?     | `number`                                                                                                                                                                                                                                                          | Целое число, определяющее, должен ли переключатель участвовать в последовательной навигации по всей странице с помощью клавиатуры                                                                  |
| maxLength?    | `number`                                                                                                                                                                                                                                                          | Максимальное количество символов, которое можно ввести в текстовое поле                                                                                                                            |
| readOnly?     | `false \| true`                                                                                                                                                                                                                                                   | Запрещает изменять значение в текстовом поле                                                                                                                                                       |
| onKeyUp?      | `(event: KeyboardEvent<HTMLTextAreaElement>) => void`                                                                                                                                                                                                             | Обработчик, вызываемый при срабатывании события keyup                                                                                                                                              |
| onKeyPress?   | `(event: KeyboardEvent<HTMLTextAreaElement>) => void`                                                                                                                                                                                                             | Обработчик, вызываемый при срабатывании события keypress                                                                                                                                           |
| onKeyDown?    | `(event: KeyboardEvent<HTMLTextAreaElement>) => void`                                                                                                                                                                                                             | Обработчик, вызываемый при срабатывании события keydown                                                                                                                                            |
<!-- props:end -->
