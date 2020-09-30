# Attach



<!-- description:start -->
Компонент для создания кнопки выбора файла, предназначенного для отправки на сервер.
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
import { withRegistry, Registry } from '@bem-react/di'

import {
  Button as ButtonDesktop,
  withSizeM as withButtonSizeM,
  withViewDefault as withButtonViewDefault,
} from '@yandex/ui/Button/desktop'

import {
  cnAttach,
  Attach as AttachDesktop,
  withSizeM as withAttachSizeM,
} from '@yandex/ui/Attach/desktop'

const Button = compose(withButtonSizeM, withButtonViewDefault)(ButtonDesktop)

const attachRegistry = new Registry({ id: cnAttach() })
attachRegistry.set('Button', Button)

// Композиция из различных модификаторов
const Attach = compose(
  withAttachSizeM,
  withRegistry(attachRegistry),
)(AttachDesktop)

const App = () => (
  <Attach hasHolder holderText="no file chosen" view="default" size="m">
    Select file
  </Attach>
)
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { Attach } from '@yandex/ui/Attach/desktop/bundle'

const App = () => (
  <Attach hasHolder holderText="no file chosen" view="default" size="m">
    Select file
  </Attach>
)
```

## Примеры

### Вид компонента

Чтобы изменить вид компонента, используйте свойство `_view` со значением как у компонента `Button`.

{{%story::desktop:controls-attach-desktop--view%}}

### Размер компонента

Чтобы изменить размер компонента, установите свойство `size` в одно из допустимых значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:controls-attach-desktop--size%}}

### Текст сообщения

Чтобы отобразить текст сообщения, установите свойство `hasHolder` в значение `true`.

{{%story::desktop:controls-attach-desktop--has-holder%}}

## Свойства

<!-- props:start -->
| Свойство         | Тип                                                    | По умолчанию         | Описание                                                                                                                |
| ---------------- | ------------------------------------------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| className?       | `string`                                               | —                    | Дополнительный className                                                                                                |
| controlRef?      | `RefObject<HTMLInputElement>`                          | —                    | Ссылка на DOM-элемент нативного контрола                                                                                |
| disabled?        | `false \| true`                                        | —                    | Неактивное состояние компонента: состояние, при котором компонент отображается, но недоступен для действий пользователя |
| hasHolder?       | `false \| true`                                        | —                    | Наличие элемента `Holder`                                                                                               |
| holderText?      | `string`                                               | —                    | Текст внутри элемента `Holder`, когда файл не выбран                                                                    |
| holderTextWidth? | `number`                                               | —                    | Ширина текста внутри элемента `Holder`                                                                                  |
| id?              | `string`                                               | `useUniqId('xuniq')` | Уникальный id компонента                                                                                                |
| innerRef?        | `RefObject<HTMLElement>`                               | —                    | Ссылка на корневой DOM-элемент компонента                                                                               |
| name?            | `string`                                               | —                    | Имя компонента                                                                                                          |
| onChange?        | `(event: ChangeEvent<HTMLInputElement>) => void`       | —                    | Обработчик, вызываемый при смене файла                                                                                  |
| onClearClick?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | —                    | Обработчик, вызываемый при очистке файла                                                                                |
| size?            | `string`                                               | —                    | Размер компонента                                                                                                       |
| theme?           | `string`                                               | —                    | Стилевое оформление компонента                                                                                          |
| view?            | `string`                                               | —                    | Внешний вид компонента                                                                                                  |
| children         | `string`                                               | —                    | Содержимое кнопки                                                                                                       |
| tabIndex?        | `number`                                               | `0`                  | Последовательность перехода между кнопками при нажатии на клавишу Tab                                                   |
| accept?          | `string`                                               | —                    | Допустимые типы файлов                                                                                                  |
<!-- props:end -->
