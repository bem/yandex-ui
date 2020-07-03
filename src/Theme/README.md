# Темизация

Настройте Lego Components с помощью вашей или дефолтной темы. Вы можете изменить цвета, типографику и многое другое. Для поддержки тем в IE11 необходимо использовать [postcss-theme-fold](https://github.com/yarastqt/postcss-theme-fold) плагин.

Каждая тема состоит из нескольких частей. Ниже проиллюстрировано воздействие каждой из частей на компонент:

![image](https://media.github.yandex-team.ru/user/5546/files/5f3ab900-57e6-11ea-8f61-1447c4c8cfa9)

<details markdown="1">

  <summary>Подробнее про каждую часть</summary>

- **color**

  Содержит переменные цветов, которые используются в модификациях компонентов и типографики, подчеркивая их смысл (например, экшен-компонент) или состояние (например, недоступный). Переменные именуются по смыслу, месту использования и не должны обозначать значение цвета.
- **size**

  Содержит переменные размера текста и межстрочных интервалов, которые настраиваются для каждого отдельного компонента.
- **space**

  Содержит переменные отступов, которые используются как для отступов внутри компонента, так и для обозначения уровней вложенности и/или разделения смысловых сущностей внутри паттернов.
- **capacity**

  Содержит переменные размеров поверхностей компонентов, которые имеют как минимальные/максимальные, так и фиксированные значения.

- **cosmetic**

  Содержит переменные, которые используются для декоративной стилизации компонентов (например, скругление углов, шрифт, размер границ).

</details>


## Использование

Чтобы подключить тему, выберите необходимый способ:

- На клиенте

  ```ts
  // src/App.js
  import { configureRootTheme } from '@yandex-lego/components/Theme'
  import { theme } from '@yandex-lego/components/Theme/presets/default'

  // Без указания root, по умолчанию body
  configureRootTheme({ theme })

  // С указанием root
  configureRootTheme({ theme, root: document.querySelector('#root-app') })
  ```

- На сервере

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

- В рамках фичи, конкретного DOM-узла

  ```ts
  // src/features/Feature/Feature.js
  import { cnTheme } from '@yandex-lego/components/Theme'
  import { theme } from '@yandex-lego/components/Theme/presets/inverse'

  // Переопределение всех параметров
  const Feature = () => (
    <div className={cnTheme(theme)}>
      <Button view="default" size="m">
        Handle
      </Button>
    </div>
  )

  // Переопределение конкретного значения,
  // остальные будут взяты через CSS-контекст из корневой темы (не работает в IE11)
  const Feature = () => (
    <div className={cnTheme({ color: theme.color })}>
      <Button view="default" size="m">
        Handle
      </Button>
    </div>
  )
  ```


## Как создать тему

Чтобы создать тему:

1. Добавьте в проект следующие PostCSS-плагины:
     - [postcss-color-function](https://github.com/postcss/postcss-color-function) — для работы с цветами.
     - [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars) — для написания Sass-like переменных.
2. Определите, [какими частями](#темизация) ваша тема будет отличаться от уже существующих в Лего.
3. Скопируйте нужные части и модифицируйте под ваш проект.

  Пример (тема отличается цветом):

  Создаем модификатор для цвета → копируем содержимое из Лего → модифицируем под проект.

4. Создайте [пресет](#пресет) → скопируйте туда ваши модификаторы темы или часть из Лего → используйте этот пресет в проекте.

## Пресет

Пресет — это файл с подключенными нужными для проекта CSS-файлами и экспортом объекта для установки модификаторов:

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

**Набор стандартных пресетов**

| Пресет             | color            | size             | capacity         | space            | cosmetic  |
| ------------------ | ---------------- | ---------------- | ---------------- | ---------------- | --------- |
| **default**        | `yandex-default` | `default`        | `default`        | `default`        | `default` |
| **inverse**        | `yandex-inverse` | `default`        | `default`        | `default`        | `default` |
| **brand**          | `yandex-brand`   | `default`        | `default`        | `default`        | `default` |
| **legacy-default** | `yandex-default` | `legacy-default` | `legacy-default` | `legacy-default` | `default` |
| **legacy-inverse** | `yandex-inverse` | `legacy-default` | `legacy-default` | `legacy-default` | `default` |
| **legacy-brand**   | `yandex-brand`   | `legacy-default` | `legacy-default` | `legacy-default` | `default` |

## Смотрите также

- [Как написать тему для компонентов Лего](https://www.notion.so/82b9ae967cb748a7977d87b34dc8b5c1)
