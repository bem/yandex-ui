# TabsMenu



<!-- description:start -->
Компонент для создания горизонтального меню.
<!-- description:end -->

## Когда использовать

С помощью компонента можно создать:

- Статическое меню с ссылками на другие страницы.
- Меню с использованием собственного JS-кода. Например, чтобы сделать пункт меню активным.
- Переключатель для вкладок `TabsPanes`.

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
  TabsMenu as TabsMenuDesktop,
  withSizeM,
  withLayoutHoriz,
  withViewDefault,
} from '@yandex/ui/TabsMenu/desktop'

const TabsMenu = compose(
  withSizeM,
  withViewDefault,
  withLayoutHoriz,
)(TabsMenuDesktop)

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <TabsMenu
      size="m"
      view="default"
      layout="horiz"
      activeTab={activeTab}
      tabs={[
        { id: 'tab1', onClick: () => setActiveTab('tab1'), content: 'Tab 1' },
        { id: 'tab2', onClick: () => setActiveTab('tab2'), content: 'Tab 2' },
      ]}
    />
  )
}
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React, { useState } from 'react'
import { TabsMenu } from '@yandex/ui/TabsMenu/desktop/bundle'

const App = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <TabsMenu
      size="m"
      view="default"
      layout="horiz"
      activeTab={activeTab}
      tabs={[
        { id: 'tab1', onClick: () => setActiveTab('tab1'), content: 'Tab 1' },
        { id: 'tab2', onClick: () => setActiveTab('tab2'), content: 'Tab 2' },
      ]}
    />
  )
}
```

## Примеры

### Вид меню

Чтобы изменить вид меню, установите свойство `view` в значение `"default"`.

{{%story::desktop:navigation-tabsmenu-desktop--view%}}

### Стилевое оформление

Чтобы изменить стилевое оформление меню, установите свойство `theme` в значение `"normal"`.

{{%story::desktop:navigation-tabsmenu-desktop--theme%}}

### Размер меню

Чтобы задать размер горизонтального меню, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:navigation-tabsmenu-desktop--size%}}

### Адаптивность

Чтобы включить адаптивность, установите свойство `adaptive` и обработчик `onChange`.

> ⚠️ Данная функциональность находится в стадии доработок и может быть изменена в будущем.

{{%story::desktop:navigation-tabsmenu-desktop--adaptive%}}

## Свойства

<!-- props:start -->
| Свойство   | Тип                           | Описание                                   |
| ---------- | ----------------------------- | ------------------------------------------ |
| activeTab? | `string`                      | Идентификатор активного пункта меню.       |
| tabs       | `ITabsMenuTabProps[]`         | Массив пунктов меню.                       |
| innerRef?  | `RefObject<HTMLUListElement>` | Ссылка на корневой DOM элемент компонента. |
| className? | `string`                      | Дополнительный класс.                      |
<!-- props:end -->
