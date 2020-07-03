
# Theme

## Использование

Для поддержки тем в **ie11** необходимо использовать <a href='https://github.com/yarastqt/postcss-theme-fold' target='_blank'>postcss-theme-fold</a> плагин.

### Подключение

Необходимо выбрать один из способов подключения темы.

#### На клиенте

```ts
// src/App.js
import { configureRootTheme } from '@yandex-lego/components/Theme'
import { theme } from '@yandex-lego/components/Theme/presets/default'

// Без указания root, по умолчанию body
configureRootTheme({ theme })

// С указанием root
configureRootTheme({ theme, root: document.querySelector('#root-app') })
```

#### На сервере

```ts
// src/App.js
import { cnTheme } from '@yandex-lego/components/Theme'
import { theme } from '@yandex-lego/components/Theme/presets/default'

export const App = () => (
  <div className={cnTheme(theme)}>
    ...
  </div>
)
```

#### В рамках фичи

Переопределение темы в рамках конкретного DOM-узла:

```ts
// src/features/Feature/Feature.js
import { cnTheme } from '@yandex-lego/components/Theme'
import { theme } from '@yandex-lego/components/Theme/presets/inverse'

// Переопределение всех параметров:
const Feature = () => (
  <div className={cnTheme(theme)}>
    <Button view="default" size="m">
      Handle
    </Button>
  </div>
)

// Переопределение конкретного значения,
// остальные будут взяты через css-контекст из корневой темы (не работает в ie11):
const Feature = () => (
  <div className={cnTheme({ color: theme.color })}>
    <Button view="default" size="m">
      Handle
    </Button>
  </div>
)
```

## Тема

Каждая тема состоит из нескольких частей, ниже проиллюстрировано воздействие каждой из частей на компонент:

![image](https://media.github.yandex-team.ru/user/5546/files/5f3ab900-57e6-11ea-8f61-1447c4c8cfa9)

### color

Содержит переменные цветов, которые используются в модификациях компонентов и типографики, подчёркивая их смысл (пр. — экшен-компонент) или состояние (пр. — недоступный). Все переменные для цветов называются по смыслу, месту их использования, они не должны обозначать значение цвета.

### size

Содержит переменные размера текста и межстрочных интервалов, которые настраиваются для каждого отдельного компонента.

### capacity

Содержит в себе переменные размеров поверхностей компонентов, которые имеют как минимальные или максимальные, так и фиксированные значения.

### space

Содержит переменные отступов, которые используются как для ритма внутри компонента, так и для обозначения уровней вложенности и разделения смысловых сущностей внутри паттернов.

### cosmetic

Содержит переменные, которые используются для декоративной стилизации контролов (пр. — скругление углов, шрифт, размер границ).

## Как написать свою тему

1. Для начала нужно добавить в проект следующие postcss-плагины, они нужны, чтобы работать с цветами и пременными:
   <a target='_blank' href='https://github.com/postcss/postcss-color-function'>postcss-color-function</a> — Позволяет работать с цветами.
   <a target='_blank' href='https://github.com/postcss/postcss-simple-vars'>postcss-simple-vars</a> — Позволяет писать sass-like переменные.

2. Понять, чем конкретно тема должна отличаться от уже существующих в Лего:
    * Если тема отличается всем (например цвета, отступы, размеры), то создаем на каждую [сущность](#тема) модификатор и копируем содержимое из Лего и модифицируем под свой проект.
    * Если тема отличается, допустим, только [цветом](#color), то создаем модификатор для цвета, копируем содержимое из Лего и модифицируем под свой проект.

3. Создаем [пресет](#пресет), куда копируем свои модификаторы темы, либо часть из Лего и используем этот пресет в проекте.

## Пресет

Пресет представляет собой файл с подключением нужных CSS и экспортом объекта для установки нужных модификаторов:

```ts
import { Theme } from '@yandex-lego/components/Theme'

import './_color/theme_color_yandex-default.css'
import './_size/theme_size_default.css'
import './_capacity/theme_capacity_default.css'
import './_space/theme_space_default.css'
import './_cosmetic/theme_cosmetic_default.css'

export const theme: Theme = {
  color: 'yandex-default',
  size: 'default',
  capacity: 'default',
  space: 'default',
  cosmetic: 'default',
}
```

Для удобного использования <a href='https://github.com/yarastqt/postcss-theme-fold' target='_blank'>postcss-theme-fold</a> плагина, пресеты можно собрать в виде CSS-файлов с необходимыми импортами:

```css
@import '../_color/Theme_color_yandex-default.css';
@import '../_size/Theme_size_default.css';
@import '../_capacity/Theme_capacity_default.css';
@import '../_space/Theme_space_default.css';
@import '../_cosmetic/Theme_cosmetic_default.css';
```

### Набор стандартных пресетов

| Пресет             | color            | size             | capacity         | space            | cosmetic  |
| ------------------ | ---------------- | ---------------- | ---------------- | ---------------- | --------- |
| **default**        | `yandex-default` | `default`        | `default`        | `default`        | `default` |
| **inverse**        | `yandex-inverse` | `default`        | `default`        | `default`        | `default` |
| **brand**          | `yandex-brand`   | `default`        | `default`        | `default`        | `default` |
| **legacy-default** | `yandex-default` | `legacy-default` | `legacy-default` | `legacy-default` | `default` |
| **legacy-inverse** | `yandex-inverse` | `legacy-default` | `legacy-default` | `legacy-default` | `default` |
| **legacy-brand**   | `yandex-brand`   | `legacy-default` | `legacy-default` | `legacy-default` | `default` |

## Смотрите также

- <a target='_blank' href='https://wiki.yandex-team.ru/lego/2020/Yamoney-Guidelines/Kak-napisat-Temu-dlja-Lego-kontrolov/'>Как написать Тему для Лего контролов</a>
