# Popup



<!-- description:start -->
Компонент для создания всплывающего окна (попапа).
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
import {
  Popup as PopupDesktop,
  withViewDefault,
} from '@yandex/ui/Popup/desktop'

// Композиция из различных модификаторов
const Popup = compose(withViewDefault)(PopupDesktop)

const App = () => (
  <Popup visible position={{ top: 10, left: 10 }} view="default">
    Popup
  </Popup>
)
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { Popup } from '@yandex/ui/Popup/desktop/bundle'

const App = () => (
  <Popup visible position={{ top: 10, left: 10 }} view="default">
    Popup
  </Popup>
)
```

## Примеры

### Привязывание к блоку

Чтобы попап прикреплялся к нужному элементу, установите свойство `target` в значение `anchor`, а в свойстве `anchor` нужный элемент.

{{%story::desktop:surface-popup-desktop--target%}}


| Свойство                  | Тип                                        | По умолчанию                                                                                                                                                                     | Описание                                                  |
| ------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| anchor?                   | `RefObject<HTMLElement>`                   | —                                                                                                                                                                                | Элемент, относительно которого позиционируется попап      |
| directions?               | `Direction[]`                              | `['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right', 'right-top', 'right-center', 'right-bottom', 'left-top', 'left-center', 'left-bottom']` | Направления раскрытия блока                               |
| mainOffset?               | `number`                                   | `0`                                                                                                                                                                              | Отступ попапа относительно основного направления          |
| motionless?               | `false \| true`                            | —                                                                                                                                                                                | Закрепляет положение попапа после открытия                |
| secondaryOffset?          | `number`                                   | `0`                                                                                                                                                                              | Отступ попапа относительно второстепенного направления    |
| tailOffset?               | `number`                                   | `0`                                                                                                                                                                              | Отступ хвостика от края попапа                            |
| target?                   | `"anchor"`                                 | —                                                                                                                                                                                | Позиционирование попапа относительно переданного элемента |
| viewportOffset?           | `number`                                   | `0`                                                                                                                                                                              | Отступ от края окна браузера                              |
| getPossibleDrawingParams? | `(drawingParams: DrawingParams[]) => void` | —                                                                                                                                                                                | Расчет параметров для отрисовки                           |

### Вид попапа

Чтобы изменить вид попапа, установите свойство `view` в значение `default`.

{{%story::desktop:surface-popup-desktop--view%}}

### Стилевое оформление

Чтобы задать тему попапа, установите свойство `theme` в одно из следующих значений: `"clear"`, `"normal"`.

{{%story::desktop:surface-popup-desktop--theme%}}

Чтобы совсем убрать стилевое оформление, установите свойство `nonvisual` в значение `true`.

{{%story::desktop:surface-popup-desktop--nonvisual%}}

### Направление раскрытия попапа

Чтобы задать направление раскрытия попапа, используйте свойство `directions`.

{{%story::desktop:surface-popup-desktop--directions%}}

### Позиционирование

Чтобы указать абсолютную позицию попапа в области открытия `scope`, используйте свойство `position`.

> **Внимание!** Свойство `position` необходимо использовать без модификатора `target_anchor`.

{{%story::desktop:surface-popup-desktop--position%}}

## Свойства

<!-- props:start -->
| Свойство               | Тип                                                                                                                                                                                                                                                                                                                           | По умолчанию    | Описание                                                                                                                                                                                                                                                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addonAfter?            | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal`                                                             | —               | Дополнительный контент после содержимого попапа                                                                                                                                                                                                                                                                   |
| addonBefore?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal`                                                             | —               | Дополнительный контент перед содержимым попапа                                                                                                                                                                                                                                                                    |
| direction?             | `"bottom-left" \| "bottom-center" \| "bottom-right" \| "top-left" \| "top-center" \| "top-right" \| "right-top" \| "right-center" \| "right-bottom" \| "left-top" \| "left-center" \| "left-bottom"`                                                                                                                          | —               | Задает направление хвостика. Например, если указано значение `bottom-center` — хвостик выходит из центра снизу.<br>Свойство `direction` необходимо использовать без модификатора `target_anchor`. Чтобы задать направление раскрытия для попапа с модификатором `target_anchor`, установите свойство `directions` |
| forceRender?           | `false \| true`                                                                                                                                                                                                                                                                                                               | —               | Вызывает дополнительный рендер после создания                                                                                                                                                                                                                                                                     |
| hasTail?               | `false \| true`                                                                                                                                                                                                                                                                                                               | —               | Включает/отключает хвостик у попапа                                                                                                                                                                                                                                                                               |
| innerRef?              | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                                                                                                                             | —               | Ссылка на корневой DOM-элемент компонента                                                                                                                                                                                                                                                                         |
| keepMounted?           | `false \| true`                                                                                                                                                                                                                                                                                                               | `true`          | Сохраняет контейнер в DOM после создания                                                                                                                                                                                                                                                                          |
| position?              | `{ top?: number; left?: number; bottom?: number; right?: number; }`                                                                                                                                                                                                                                                           | —               | Задает позицию попапа. Свойство `position` необходимо использовать без модификатора `target_anchor`                                                                                                                                                                                                               |
| scope?                 | `RefObject<HTMLElement>`                                                                                                                                                                                                                                                                                                      | `document.body` | Ссылка на DOM-элемент, в котором размещается попап<br>Важно, чтобы контейнер имел `position: relative` для корректного позиционирования                                                                                                                                                                           |
| tailPosition?          | `{ top: number; left: number; }`                                                                                                                                                                                                                                                                                              | —               | Задает позицию хвостика. Свойство `tailPosition` необходимо использовать без модификатора `target_anchor`                                                                                                                                                                                                         |
| tailRef?               | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                                                                                                                             | —               | Ссылка на DOM-элемент хвостика                                                                                                                                                                                                                                                                                    |
| tailSize?              | `number`                                                                                                                                                                                                                                                                                                                      | —               | Задает размер хвостика                                                                                                                                                                                                                                                                                            |
| visible?               | `false \| true`                                                                                                                                                                                                                                                                                                               | —               | Делает попап видимым                                                                                                                                                                                                                                                                                              |
| zIndex?                | `number`                                                                                                                                                                                                                                                                                                                      | —               | Задает слой `z-index`                                                                                                                                                                                                                                                                                             |
| className?             | `string`                                                                                                                                                                                                                                                                                                                      | —               | Дополнительный класс                                                                                                                                                                                                                                                                                              |
| style?                 | `CSSProperties`                                                                                                                                                                                                                                                                                                               | —               | Html атрибут `style`                                                                                                                                                                                                                                                                                              |
| unstable_onRenderTail? | `(tail: ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>) => ReactElement<...>`                                                                                                            | —               | Функция, вызываемая при отрисовке хвостика. Вызывается вне зависимости от наличия флага `hasTail`                                                                                                                                                                                                                 |
| children?              | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal \| (props: { tailRef?: Ref<HTMLDivElement>; }) => ReactNode` | —               | Содержимое попапа                                                                                                                                                                                                                                                                                                 |
| onClose?               | `(event: KeyboardEvent \| MouseEvent, source: "esc" \| "click") => void`                                                                                                                                                                                                                                                      | —               | Обработчик, вызываемый после нажатия на клавишу Esc либо мышкой на область вне контейнера                                                                                                                                                                                                                         |
| onClick?               | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void`                                                                                                                                                                                                                                                                     | —               | Обработчик, вызываемый при срабатывании события click                                                                                                                                                                                                                                                             |
<!-- props:end -->