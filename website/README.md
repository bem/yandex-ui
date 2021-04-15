# @yandex-lego/docs

Сайт сделан на gatsby, за тем как работает эта технология [сюда](https://www.gatsbyjs.com/)

## Как писать документацию:

Файлы с документацией мы собираем из папки lego-componets, обрабатываем все `mdx` файлы из папко docs в компонентах, структура должна быть вот такая

```bash
docs/
  __meta.mdx - тут файл конфигурация
  ... остальные файлы которые превратятся потом в табики (eg examples usage что душе угодно)
```

Файл index.mdx содержит примерно такую структуру:

```mdx
---
id: button
path: /components/button

title: Button
description: Компонент для создания кнопок.

links:
 - label: source
   url: https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/Button
 - label: startrek
   url: https://search.yandex-team.ru/stsearch?text=Button.ts&facet.queue=ISL&facet.type=bug&facet.status=128

tabs:
 - Examples
 - Usage
 - Guidelines
---
```

id также следует указывать в других файлах с докой, чтобы мы могли построить принадлежность к какому то разделу

Чтобы ссылка появилась в боковом меню нужно добавить раздел с этим блоком в файл `docs-site/sidebar.js`  в нем мы описываем всю структуру чтобы строить боковое меню

## Как разрабатыватся:

`npm ci`
`npm start`

## Про техническую реализацию:
Договорились использовать css модули и не использвать Лего компоненты для разработки блоков сайта для того чтобы исключить баги влияния на компоненты примеров. Делаем все максимально инкапсулировано.

## Собрать прод сборку:

`npm run build -- --prefix-paths`

## Deploy:

перейти в папку lego-components и выполнить команду `static-uploader` еще нужны переменные окружения `LEGO_S3_ACCESS_KEY_ID` и `LEGO_S3_SECRET_ACCESS_KEY`

пока так, пока не сделаем нормальный деплой в ci

сайт обновится тут (настроены редиректы для ngnix) https://lego.yandex-team.ru/lego-components

в s3 файлы лежат тут https://lego-docs.s3.mds.yandex.net/lego-components в бакете lego-docs под таргетом lego-components
