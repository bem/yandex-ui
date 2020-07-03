# TabsPanes

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/TabsPanes' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=TabsPanes.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>

<!-- description:start -->
Компонент для создания вкладок с разным содержимым.
Переключение между вкладками можно реализовать, например, с помощью `TabsMenu`, `Radiobox`, `Select`.
<!-- description:end -->

## Пример использования

```js
// src/App.ts
import React, { useState } from 'react'
import { TabsPanes } from '@yandex-lego/components/TabsPanes/desktop/bundle'

const App = () => (
  <TabsPanes
    activePane="1"
    panes={[
      { id: '1', content: 'Pane 1 content' },
      { id: '2', content: 'Pane 2 content' },
    ]}
  />
)
```

## Примеры

### Переключение с помощью TabsMenu

{{%story::desktop:surface-tabspanes-desktop--with-tabs-menu%}}

### Переключение с помощью Radiobox

{{%story::desktop:surface-tabspanes-desktop--with-radiobox%}}

## Свойства

<!-- props:start -->
| Свойство    | Тип                         | Описание                                   |
| ----------- | --------------------------- | ------------------------------------------ |
| activePane? | `string`                    | Идентификатор отображаемой вкладки.        |
| panes       | `ITabsPanesPaneProps[]`     | Набор вкладок.                             |
| innerRef?   | `RefObject<HTMLDivElement>` | Ссылка на корневой DOM-элемент компонента. |
| className?  | `string`                    | Дополнительный класс.                      |
<!-- props:end -->
