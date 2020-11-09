# Radiobox



<!-- description:start -->
Компонент для создания радиопереключателя.
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

configureRootTheme({ theme })
```

Использование компонента с `options`:

```ts
// src/App.ts
import React, { useState } from 'react'
import { compose } from '@bem-react/core'
import {
  Radiobox as RadioboxDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/Radiobox/desktop'

const Radiobox = compose(
  withSizeM,
  withViewDefault,
)(RadioboxDesktop)

const App = () => {
  const [value, setValue] = useState('value1')

  return (
    <Radiobox
      size="m"
      view="default"
      value={value}
      options={[
        { label: 'Радио 1', value: 'value1' },
        { label: 'Радио 2', value: 'value2' },
        { label: 'Радио 3', value: 'value3' },
      ]}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}
```

Использование компонента с элементом `Radio` вместо `options`:

```ts
// src/App.ts
import React, { useState } from 'react'
import {
  Radiobox,
  Radio,
} from '@yandex/ui/Radiobox/desktop/bundle'

const App = () => {
  const [value, setValue] = useState('value1')

  return (
    <Radiobox
      size="m"
      view="default"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <Radio value="value1">Радио 1</Radio>
      <Radio value="value2">Радио 2</Radio>
      <Radio value="value3">Радио 3</Radio>
    </Radiobox>
  )
}
```

## Примеры

### Вид радиопереключателя

Для различного оформления радиопереключателей установите свойство `view` в значение `"default"`.

{{%story::desktop:controls-radiobox-desktop--view%}}

### Стилевое оформление

Чтобы изменить стилевое оформление радиопереключателей, установите свойство `theme` в одно из следующих значений: `"normal"`, `"pseudo"`.

{{%story::desktop:controls-radiobox-desktop--theme%}}

### Размер радиопереключателя

Чтобы изменить размер радиопереключателя, установите свойство `size` в одно из следующих значений: `"m"`, `"s"`.

{{%story::desktop:controls-radiobox-desktop--size%}}

## Свойства

### Radiobox

<!-- props:start -->
| Свойство   | Тип                                                                                                                                                                                                                                                               | По умолчанию | Описание                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------- |
| options?   | `RadioOptionProps[]`                                                                                                                                                                                                                                              | `[]`         | Набор переключателей; можно использовать вместо `children`                                  |
| innerRef?  | `(instance: HTMLSpanElement) => void \| RefObject<HTMLSpanElement>`                                                                                                                                                                                               | —            | Ссылка на корневой DOM-элемент компонента                                                   |
| disabled?  | `false \| true`                                                                                                                                                                                                                                                   | —            | Неактивное состояние всей группы переключателей                                             |
| children?  | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Набор переключателей c использованием элемента `Radio`; можно использовать вместо `options` |
| className? | `string`                                                                                                                                                                                                                                                          | —            | Дополнительный класс у корневого DOM-элемента                                               |
| value?     | `string`                                                                                                                                                                                                                                                          | —            | Текущее выбранное значение в группе                                                         |
| name?      | `string`                                                                                                                                                                                                                                                          | —            | Имя для всех элементов `Radio`                                                              |
| onChange?  | `(event: ChangeEvent<HTMLInputElement>) => void`                                                                                                                                                                                                                  | —            | Колбэк, который срабатывает при изменении значения                                         |
<!-- props:end -->

### Radio

| Свойство    | Тип                                                                   | По умолчанию | Описание                                            |
| ----------- | --------------------------------------------------------------------- | ------------ | --------------------------------------------------- |
| className?  | `string`                                                              | —            | Дополнительный класс у корневого DOM-элемента       |
| children    | `ReactNode`                                                           | —            | Текст подписи к переключателю                       |
| name?       | `string`                                                              | —            | Имя переключателя                                   |
| disabled?   | `false \| true`                                                       | —            | Неактивное состояние переключателя                  |
| value       | `string`                                                              | —            | Значение переключателя                              |
| innerRef?   | `(instance: HTMLLabelElement) => void \| RefObject<HTMLLabelElement>` | —            | Ссылка на корневой DOM-элемент компонента           |
| controlRef? | `(instance: HTMLInputElement) => void \| RefObject<HTMLInputElement>` | —            | Ссылка на нативный DOM-элемент нативного инпута     |
| checked?    | `false \| true`                                                       | —            | Состояние переключателя                             |
| onChange?   | `(event: ChangeEvent<HTMLInputElement>) => void`                      | —            | Колбэк, который срабатывает при изменении значения |
| onClick?    | `(event: MouseEventHandler<HTMLLabelElement>) => void`                | —            | Колбэк, который срабатывает при клике на контейнер |
| autoFocus?  | `false \| true`                                                       | —            | Устанавливает фокус в переключатель при монтировании |
