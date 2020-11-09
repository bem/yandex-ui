# Slider



<!-- description:start -->

Компонент, позволяющий выбрать одно или два значения в пределах заданного диапазона.

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
  Slider as SliderBase,
  withViewDefault,
  useSliderState,
} from '@yandex/ui/Slider/desktop'

const Slider = compose(withViewDefault)(SliderBase)

const App = () => {
  const state = useSliderState({ value: [10] })

  return <Slider view="default" {...state} />
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import {
  Slider,
  useSliderState,
} from '@yandex/ui/Slider/desktop/bundle'

const App = () => {
  const state = useSliderState({ value: [10] })

  return <Slider view="default" {...state} />
}
```

## Примеры

### Базовый

В самом простом случае достаточно указать `view` и `value`. Для того, чтобы задать диапазон, необходимо в свойство `value` передать два числа.

{{%story::desktop:controls-slider-desktop--basic%}}

### Заполненный

Чтобы показать индикатор выбранного диапазона, установите свойство `filled`.

{{%story::desktop:controls-slider-desktop--filled%}}

### Развернутый

Чтобы отобразить слайдер в обратном направлении, установите свойство `reverse`.

{{%story::desktop:controls-slider-desktop--reversed%}}

### Дискретный

Чтобы задать шаг смещения, установите свойство `step` с необходимым значением.

> ⚠️ При больших значениях min/max рекомендуется так же устанавливать большое значение для шага.

{{%story::desktop:controls-slider-desktop--stepped%}}

### Маркированный

Чтобы разметить слайдер или показать значения в определенном шаге, установите следующие свойства:

- `showTicks` — Показывает метки на треке
- `showTickValues` — отображает значения на метках трека (по умолчанию показывает только минимальное и максимальное значения)

> ⚠️ Не рекомендуется использовать данные свойства при очень больших значениях (min/max) и маленьком шаге (step), т.к. они создают лишние DOM-узлы.

{{%story::desktop:controls-slider-desktop--marked%}}

### Пользовательский Thumb

При необходимости можно заменить элемент `Thumb` на свою реализацию, для этого установите свойство `renderThumb` со своим компонентом.

{{%story::desktop:controls-slider-desktop--custom-thumb%}}

### Пользовательский LabelTick

При необходимости можно заменить элемент `LabelTick` на свою реализацию, для этого установите свойство `renderTickLabel` со своим компонентом.

{{%story::desktop:controls-slider-desktop--custom-label-tick%}}

## Свойства

<!-- props:start -->

| Свойство         | Тип                                                                                                                                                                                                                          | По умолчанию       | Описание                                                                                                         |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| value            | `number[]`                                                                                                                                                                                                                   | —                  | Выбранные значения на слайдере                                                                                   |
| className?       | `string`                                                                                                                                                                                                                     | —                  | Дополнительный класс у корневого DOM-элемента                                                                    |
| disabled?        | `false \| true`                                                                                                                                                                                                              | `false`            | Неактивное состояние слайдера                                                                                    |
| min?             | `number`                                                                                                                                                                                                                     | `0`                | Минимальное число, которое можно выбрать на слайдере<br>Может быть как положительным, так и отрицательным числом |
| max?             | `number`                                                                                                                                                                                                                     | `100`              | Максимальное число, которое можно выбрать на слайдере<br>Должен быть только положительным числом                 |
| step?            | `number`                                                                                                                                                                                                                     | `1`                | Шаг, который делает бегунок за одно обновление<br>Должен быть больше 0 и делиться на (max - min)                 |
| filled?          | `false \| true`                                                                                                                                                                                                              | `false`            | Отображает индикатор выбранного диапазона                                                                        |
| reverse?         | `false \| true`                                                                                                                                                                                                              | `false`            | Отображает слайдер в противоположном направлении                                                                 |
| vertical?        | `false \| true`                                                                                                                                                                                                              | `false`            | Устанавливает слайдер в вертикальную ориентацию                                                                  |
| onInput          | `(event: any, value: number[]) => void`                                                                                                                                                                                      | —                  | Обработчик, который вызывается при каждом обновлении бегунка                                                     |
| onChange?        | `(event: any, value: number[]) => void`                                                                                                                                                                                      | —                  | Обработчик, который вызывается при окончательном выборе значения                                                 |
| renderThumb?     | `(props: SliderThumbProps, component: any) => ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<...>)>`     | —                  | Переопределяет компонент `SliderThumb`                                                                           |
| renderTickLabel? | `(props: SliderTickLabelProps, component: any) => ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<...>)>` | `$renderTickLabel` | Переопределяет компонент `SliderTickLabel`                                                                       |
| showTicks?       | `false \| true`                                                                                                                                                                                                              | `false`            | Показывает метки на треке                                                                                        |
| showTickValues?  | `false \| true`                                                                                                                                                                                                              | `false`            | Отображает значения на метках трека<br>По умолчанию показывает только минимальное и максимальное значения        |
| testId?          | `string`                                                                                                                                                                                                                     | —                  | Идентификатор, используемый в тестах                                                                             |

<!-- props:end -->

## Доступность

Слайдер устанавливает следующие свойства для элемента `Thumb`:

- `role="slider"`
- `aria-valuemin`
- `aria-valuemax`
- `aria-valuenow`
- `aria-disabled`

Элементы `Thumb` могут принимать фокус и управляться через клавиатуру:

- Клавиши `tab` и `shift+tab` перемещают фокус между бегунками
- Клавиши `arrow up` или `arrow right` увеличивают значение бегунка на один шаг
- Клавиши `arrow down` или `arrow left` уменьшают значение бегунка на один шаг

## Улучшения

Что можно улучшить:

1. Форкнуть пакет `react-range` и удалить весь лишний код, который мы не используем (расчет позиции марок, валидация, перетаскивание элемента range).
1. После форка пакета можно реализовать хук `useSlider`, который будет реализовывать всю логику и возвращать свойства для конкретных элементов.
1. Доработать клавиатурное управление (`fn+arrow left/right` на данный момент не работает).
