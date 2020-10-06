# Темизация

Настройте Lego Components с помощью вашей или дефолтной темы из Лего. Вы можете изменить цвета, типографику и многое другое.

## Использование

Чтобы подключить тему, выберите необходимый способ:

- На клиенте

  ```ts
  // src/App.js
  import { configureRootTheme } from '@yandex/ui/Theme'
  import { theme } from '@yandex/ui/Theme/presets/default'

  // Без указания root, по умолчанию body
  configureRootTheme({ theme })

  // С указанием root
  configureRootTheme({ theme, root: document.querySelector('#root-app') })
  ```

- На сервере

  ```ts
  // src/App.js
  import { cnTheme } from '@yandex/ui/Theme'
  import { theme } from '@yandex/ui/Theme/presets/default'

  export const App = () => (
    <div className={cnTheme(theme)}>
      ...
    </div>
  )
  ```

- В рамках фичи, конкретного DOM-узла

  ```ts
  // src/features/Feature/Feature.js
  import { cnTheme } from '@yandex/ui/Theme'
  import { theme } from '@yandex/ui/Theme/presets/inverse'

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


## Как создать свою тему

Для переопределения значений (токенов) в теме нужно использовать инструмент [themekit](https://github.com/yarastqt/themekit). Themekit — это инструмент, который позволяет описывать дизайн-токены в формате понятном для разработчиков и дизайнеров (yaml или json), с возможностью собирать их в любой таргет (css, json, js, ios, android), а так же с возможностью наследования и переопределения тем.

### Настройка

1. Ставим инструмент в проект:

```bash
 npm i -DE @yandex/themekit
```
2. Создаем структуру папок для тем и токенов:

```bash
theme
├── default
│   └── default.theme.json # Конфигурация темы
└── tokens
    └── lego.tokens.yml    # Переопределения лего-токенов
```

3. Создаем themekit.config.json:

```json5
{
  "entry": {
    "default": "./themes/default.theme.json" // название вашей темы
  },
  "output": {
    "css": {
      "transforms": ["name/cti/kebab"],
      "buildPath": "./themes", //папка где с конфигурацией
      "files": [
        {
          "destination": "[entry]/[platform]/root.css", // путь к собранному файлу с темой
          "format": "css/variables", // формат итоговой темы (1)
          "options": {
            "useAliasVariables": true
          }
        }
      ]
    }
  }
}
```

(1) Подробнее про формат смотрите [тут](https://amzn.github.io/style-dictionary/#/formats)

Подробнее, какие поля есть в конфиге инструмента, можно посмотреть тут — https://github.com/yarastqt/themekit#themekit-config-interface.

4. Конфигурируем тему:

В папку с конфигурацией вашей темы следует положить файлик `название_вашей_темы.theme.json`. Базовая конфигурация может выглядеть вот так:

```json5
{
  "extends": "@yandex/ui/Theme/themes/default.theme.json", // наследуемся от default лего темы
  "sources": ["./tokens/*.tokens.yml"]
}
```

Подробнее, какие поля есть в конфиге темы, можно посмотреть тут — https://github.com/yarastqt/themekit#theme-config-interface.

5. Пишем свои токены или токены переопределения:

Поддерживается json и yml формат.

```yml
button:
  size:
    s:
      fontSize:
        value: 15px
      lineHeight:
        value: 40px
      height:
        value: 40px
```

6. Собираем темы:

```bash
themekit build
```

7. Подключаем собранные css-файлы
Если вы используете whitepaper подход (у вас на странице несколько тем), тогда нужно собрать пресет:

```ts
import { Theme } from '@yandex/ui/Theme';
import './color.css';
import './root.css';

export const theme: Theme = {
    color: 'default',
    root: 'default',
};

```

Если на проекте одна тема, то достаточно в корне приложения подключить собранный css-файл

```ts
import './themes/default/root.css'
```

Документация для themekit — https://github.com/yarastqt/themekit

Примеры с ипользованием themekit — https://github.com/yarastqt/themekit/tree/master/examples

## Подддержка IE11

Для поддержки тем в IE11 необходимо использовать [postcss-theme-fold](https://github.com/yarastqt/postcss-theme-fold) плагин.

## Смотрите также

- [Дока themekit](https://github.com/yarastqt/themekit)
- [Миграция на themekit](https://nda.ya.ru/t/C2_-83Nw3YasmY)
- [Посмотреть видео](https://nda.ya.ru/t/vxP9SjNZ3Yasmc)
