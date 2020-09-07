# Tooltip

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Tooltip' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Tooltip.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент используется для создания всплывающих подсказок.
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
import {
  Tooltip as TooltipDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex-lego/components/Tooltip/desktop'

const Tooltip = compose(
  withSizeM,
  withViewDefault,
)(TooltipDesktop)

const App = () => {
  const [visible, setVisible] = React.useState(false)
  const buttonRef = React.useRef(null)

  return (
    <>
      <button
        ref={buttonRef}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Target
      </button>
      <Tooltip view="default" size="m" anchor={buttonRef} visible={visible}>
        Description
      </Tooltip>
    </>
  )
}
```

Использование с полным набором модификаторов:

При использовании `stateless` компонента необходимо связать `target` и `tooltip` через свойство `anchor`, а так же задать свойство `visible`:

```ts
// src/App.ts
import React from 'react'
import { Tooltip } from '@yandex-lego/components/Tooltip/desktop/bundle'

const App = () => {
  const [visible, setVisible] = React.useState(false)
  const buttonRef = React.useRef(null)

  return (
    <>
      <button
        ref={buttonRef}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Target
      </button>
      <Tooltip view="default" size="m" anchor={buttonRef} visible={visible}>
        Description
      </Tooltip>
    </>
  )
}
```

При использовании `stateful` компонента достаточно обернуть любой react-элемент в `TooltipStateful` и задать описание в `content`:

```ts
import React from 'react'
import { TooltipStateful } from '@yandex-lego/components/Tooltip/desktop/bundle'

const App = () => (
  <TooltipStateful view="default" size="m" content="Description">
    <button>
      Target
    </button>
  </TooltipStateful>
)
```

## Примеры

### Размер подсказки

Чтобы изменить размер подсказки, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:surface-tooltip-desktop--size%}}

### Состояние подсказки

Чтобы изменить состояние подсказки, установите свойство `state` в одно из следующих значений: `"warning"`, `"alert"`, `"success"`.

{{%story::desktop:surface-tooltip-desktop--state%}}

### Направление раскрытия подсказки

Чтобы изменить направление раскрытия подсказки, установите свойство `direction` с одним или несколькими допустимыми значениями — `"top-left"`, `"top-center"`, `"top-right"`, `"right-top"`, `"right-center"`, `"right-bottom"`, `"bottom-right"`, `"bottom-center"`, `"bottom-left"`, `"left-bottom"`, `"left-center"`, `"left-top`".

Если свойство `direction` не было установлено, то будут использованы <a href="https://github.yandex-team.ru/search-interfaces/frontend/blob/master/packages/lego-components/src/components/Popup/_target/Popup_target_anchor.tsx#L19-L32" target="_blank">значения по умолчанию</a> в порядке приоритета раскрытия.

{{%story::desktop:surface-tooltip-desktop--direction%}}

## Свойства

### Stateless

Компонент частично реализует интерфейс `Popup` и `PopupTargetAnchor`.

<!-- props:start -->
| Свойство         | Тип                                                                                                                                                                                                                 | По умолчанию    | Описание                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| keepMounted?     | `false \| true`                                                                                                                                                                                                     | `true`          | Сохраняет контейнер в DOM после создания                                                                                                  |
| className?       | `string`                                                                                                                                                                                                            | —               | Дополнительный класс                                                                                                                      |
| hasTail?         | `false \| true`                                                                                                                                                                                                     | —               | Включает/отключает хвостик у попапа                                                                                                       |
| innerRef?        | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                   | —               | Ссылка на корневой DOM-элемент компонента                                                                                                 |
| zIndex?          | `number`                                                                                                                                                                                                            | —               | Задает слой `z-index`                                                                                                                     |
| visible?         | `false \| true`                                                                                                                                                                                                     | —               | Делает попап видимым                                                                                                                      |
| scope?           | `RefObject<HTMLElement>`                                                                                                                                                                                            | `document.body` | Ссылка на DOM-элемент, в котором размещается попап<br>Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования. |
| onClose?         | `(event: KeyboardEvent \| MouseEvent, source: "esc" \| "click") => void`                                                                                                                                            | —               | Обработчик, вызывающийся после нажатия на клавишу esc либо мышкой на область вне контейнера                                               |
| onClick?         | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void`                                                                                                                                                           | —               | Обработчик, вызываемый при срабатывании события click                                                                                     |
| mainOffset?      | `number`                                                                                                                                                                                                            | `0`             | Отступ попапа относительно основного направления                                                                                          |
| secondaryOffset? | `number`                                                                                                                                                                                                            | `0`             | Отступ попапа относительно второстепенного направления                                                                                    |
| tailOffset?      | `number`                                                                                                                                                                                                            | `0`             | Отступ хвостика от края попапа                                                                                                            |
| anchor?          | `RefObject<HTMLElement>`                                                                                                                                                                                            | —               | Элемент, относительно которого позиционируется попап                                                                                      |
| state?           | `"warning" \| "alert" \| "success"`                                                                                                                                                                                 | —               | Визуальное состояние подсказки                                                                                                            |
| direction?       | `"bottom-left" \| "bottom-center" \| "bottom-right" \| "top-left" \| "top-center" \| "top-right" \| "right-top" \| "right-center" \| "right-bottom" \| "left-top" \| "left-center" \| "left-bottom" \| Direction[]` | —               | Направление для раскрытия подсказки                                                                                                       |
| id?              | `string`                                                                                                                                                                                                            | —               | Уникальный id подсказки                                                                                                                   |
<!-- props:end -->

### Stateful

Компонент частично реализует интерфейс `Tooltip`.

| Свойство        | Тип                                          | По умолчанию | Описание                                                       |
| --------------- | -------------------------------------------- | ------------ | -------------------------------------------------------------- |
| children        | `ReactNode`                                  | —            | Компонент или элемент для которого нужно показать подсказку    |
| content         | `ReactNode`                                  | —            | Содержимое, которое будет показано в подсказке                 |
| trigger?        | `"click" \| "hover" \| "focus" \| Trigger[]` | `hover`      | Режим для показа подсказки. Может содержать несколько значений |
| defaultVisible? | `false \| true`                              | `false`      | Показывает подсказку сразу видимой                             |


## Доступность

Для обеспечения доступности с использованием `stateless` компонента, необходимо связать `anchor` с подсказкой указав `aria-describedby` и `id`:

> ⚠️ При использовании `stateful` компонента, эта логика реализована внутри.

```ts
<button aria-describedby="tooltip-1">
  Target
</button>
<Tooltip id="tooltip-1">
  Description
</Tooltip>
```
