# LayerManager (Internal)




<!-- description:start -->
Компонент, реализующий закрытие всплывающих компонентов, таких как `Popup`, `Modal`, `Tooltip` и `MessageBox` в нужном порядке, по умолчанию используется внутри `Popup`.
<!-- description:end -->

## Использование

```tsx
import React, { useRef, useState } from 'react'
import { LayerManager } from '@yandex/ui/LayerManager'

const App = () => {
  const hostRef = useRef(null)
  const [visible, setVisible] = useState(false)

  return (
    <LayerManager
      visible={visible}
      onClose={() => setVisible(false)}
      essentialRefs={[hostRef]}
    >
      <div ref={hostRef}>Content</div>
    </LayerManager>
  )
}
```

## Принцип работы

Т.к. инстансов компонента может быть несколько и они могут быть не вложены друг в друга, то вся информация хранится в статическом поле `stack` компонента `LayerManager` и компонент реализует следующий алгоритм:

1. При установке `visible=true` в стек добавляется кортеж с обработчиком закрытия (`onClose`) и набором ссылок на DOM-узлы (`essentialRefs`).
2. После нажатия на клавишу `escape`, либо при нажатии мышкой вне `essentialRefs` узлов происходит вызов последнего обработчика (`onClose`) из стека с источником нажатия (`esc` или `click`).
3. После установки `visible=false` из стека удаляется последний кортеж с обработчиком и набором ссылок.

## Свойства

<!-- props:start -->
| Свойство      | Тип                                                                                                                                                                                                                                                               | Описание                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| visible?      | `false \| true`                                                                                                                                                                                                                                                   | Видимость слоя                                                                              |
| onClose?      | `(event: KeyboardEvent \| MouseEvent, source: "esc" \| "click") => void`                                                                                                                                                                                          | Обработчик, вызывающийся после нажатия на клавишу esc либо мышкой на область вне контейнера |
| children      | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Содержимое слоя                                                                             |
| essentialRefs | `RefObject<HTMLElement>[]`                                                                                                                                                                                                                                        | Список ссылок на DOM-узлы в рамках которых не нужно отслеживать нажатия                     |
<!-- props:end -->