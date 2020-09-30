# withAutoFocus

Хелпер для установки фокуса на элемент в оборачиваемом компоненте.

Важно, чтобы оборачиваемый компонент поддерживал свойство `controlRef`, которое будет устанавливать ссылку на элемент:

```tsx
const Component = ({ controlRef }) => <input ref={controlRef} />
const EnhancedComponent = withAutoFocus(Component)

const render = () => <EnhancedComponent focused />
```
