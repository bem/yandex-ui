# @yandex-lego/docs

Сайт с документацией для `@yandex-lego/components`.

## Разработка

**Локальная разработка:**

```sh
npm start
```

**Локальная разработка конкретного раздела:**

```sh
id=Button npm start
```

**Продакшен сборка:**

```sh
npm run build
```

## Работа с документацией

### Расположение

Все документы лежат в папке `content`, итоговый путь формируется на основе расположения на файловой системе, например документ `content/guidelines/start.mdx` будет доступен по ссылке `/content/guidelines/start`.

### Информация документа

В начале каждого документа необходимо описать секцию `frontmatter`, которая будет содержать все необходимы поля:

* `id` — уникальный номер документа
* `title` — заголовок
* `description?` — описание
* `links?` — ссылки на дополнительные ресурсы (например исходный код)
* `tabs?` — список поздразделов

**Пример frontmatter:**

```yaml
---
id: Attach

title: Attach
description: Компонент для создания кнопки выбора файла, предназначенного для отправки на сервер.

links:
 - label: source
   url: https://a.yandex-team.ru/arc_vcs/frontend/packages/lego-components/src/Attach

tabs:
 - Examples
 - Code
---
```

### Структура

Если раздел содержит несколько подразделов, то необходимо создать файл `__meta.mdx` в котором будет размещаться информация о документе и его подразделах.

**Один раздел:**

```sh
content/guidelines/
└── start.mdx
```

**Несколько подразделов:**

```sh
content/components/attach/
├── __meta.mdx
├── code.mdx
└── examples.mdx
```

[gatsby]: https://www.gatsbyjs.com/
