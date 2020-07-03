# Attach

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Attach' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Attach.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент для создания кнопки выбора файла, предназначенного для отправки на сервер.
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
import { withRegistry, Registry } from '@bem-react/di'

import {
  Button as ButtonDesktop,
  withSizeM as withButtonSizeM,
  withViewDefault as withButtonViewDefault,
} from '@yandex-lego/components/Button/desktop'

import {
  cnAttach,
  Attach as AttachDesktop,
  withSizeM as withAttachSizeM,
} from '@yandex-lego/components/Attach/desktop'

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
import { Attach } from '@yandex-lego/components/Attach/desktop/bundle'

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
| disabled?        | `false \| true`                                        | —                    | Неактивное состояние компонента. Состояние, при котором компонент отображается, но недоступен для действий пользователя |
| hasHolder?       | `false \| true`                                        | —                    | Наличие элемента `Holder`                                                                                               |
| holderText?      | `string`                                               | —                    | Текст внутри элемента `Holder`, когда файл не выбран                                                                    |
| holderTextWidth? | `number`                                               | —                    | Ширина текста внутри элемента `Holder`                                                                                  |
| id?              | `string`                                               | `useUniqId('xuniq')` | Уникальный id компонента                                                                                                |
| innerRef?        | `RefObject<HTMLElement>`                               | —                    | Ссылка на корневой DOM-элемент компонента                                                                               |
| name?            | `string`                                               | —                    | Имя компонента.                                                                                                         |
| onChange?        | `(event: ChangeEvent<HTMLInputElement>) => void`       | —                    | Обработчик, вызываемый при смене файла                                                                                  |
| onClearClick?    | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` | —                    | Обработчик, вызываемый при очистке файла                                                                                |
| size?            | `string`                                               | —                    | Размер компонента                                                                                                       |
| theme?           | `string`                                               | —                    | Стилевое оформление компонента                                                                                          |
| view?            | `string`                                               | —                    | Внешний вид компонента                                                                                                  |
| children         | `string`                                               | —                    | Содержимое кнопки                                                                                                       |
| tabIndex?        | `number`                                               | `0`                  | Последовательность перехода между кнопками при нажатии на кнопку Tab                                                    |
| accept?          | `string`                                               | —                    | Допустимые типы файлов                                                                                                  |
<!-- props:end -->
