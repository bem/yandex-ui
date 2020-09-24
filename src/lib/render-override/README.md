# render-override

Библиотека, предоставляющая набор хуков и компонентов для реализации переопределения элементов внутри составного компонента.

## Мотивация

Зачастую компоненты, даже примитивные, состоят из нескольких элементов и невозможно предусмотреть заранее все варианты использования и описать для этого интерфейс поэтому необходим механизм, который позволит дополнять или заменять необходимую часть компонента.

## Использование

В зависимости от типа компонента используйте подходящий вариант:

**functional component**

```tsx
import React from 'react'
import { useRenderOverride } from '@yandex/ui/lib/render-override'

const ElementOriginal = ({ children }) => <div>{children}</div>

const MyComponent = ({ renderElement }) => {
  const Element = useRenderOverride(ElementOriginal, renderElement)

  return (
    <>
      <Element />
    </>
  )
}
```

**classes component (single component)**

```tsx
import React from 'react'
import { RenderOverrideProvider } from '@yandex/ui/lib/render-override'

const ElementOriginal = ({ children }) => <div>{children}</div>

const MyComponent = ({ renderElement }) => (
  <>
    <RenderOverrideProvider component={ElementOriginal} render={renderElement}>
      {(Element) => <Element />}
    </RenderOverrideProvider>
  </>
)
```

**classes component (multi components)**

```tsx
import React from 'react'
import { MultiRenderOverrideProvider } from '@yandex/ui/lib/render-override'

const ElementOriginal1 = ({ children }) => <div>{children}</div>
const ElementOriginal2 = ({ children }) => <div>{children}</div>

const MyComponent = ({ renderElement1, renderElement2 }) => (
  <>
    <MultiRenderOverrideProvider
      components={[
        [ElementOriginal2, renderElement1],
        [ElementOriginal2, renderElement2],
      ]}
    >
      {(Element1, Element2) => (
        <>
          <Element1 />
          <Element2 />
        </>
      )}
    </MultiRenderOverrideProvider>
  </>
)
```

**Использование**

```tsx
import React, { useCallback } from 'react'

const App = () => {
  // Для лучшей производительности рекомендуется использовать мемоизацию.
  // prettier-ignore
  const onRenderElement = useCallback((props) => (
    <OverridenElement {...props} />
  ), [])

  return (
    <>
      {/* Полное переопределение элемента. */}
      <MyComponent renderElement={onRenderElement} />
      {/* Частичное переопределение элемента. */}
      <MyComponent
        renderElement={(props, Element) => (
          <Element {...props} children="overriden children" />
        )}
      />
    </>
  )
}
```

## Соглашение

Все свойства для переопределяемых элементов должны называться со слова `render` и реализовывать `RenderOverride` интерфейс:

```ts
import { RenderOverride } from '@yandex/ui/lib/render-override'

type MyComponentProps = {
  /**
   * Переопределяет компонент `Element`
   */
  renderElement?: RenderOverride
}
```
