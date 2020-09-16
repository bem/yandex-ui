# pointerfocus

Полифил, помогающий применить стили к компонентам, получившим фокус с помощью мыши или клавиатуры.

Поддерживает два класса-хелпера которые устанавливаются на body:

1. `utilityfocus` — Класс, когда фокус был получен с помощью клавиатуры.
2. `pointerfocus` — Класс, когда фокус был получен с помощью мыши.

> ⚠️ В основном используется для описания стилей на desktop платформе.

## Пример использования

1. Подключить полифил в компоненте:

```tsx
// src/Component/Component@desktop.tsx
import '../../polyfills/pointerfocus'
```

2. Описать набор необходимых стилей для фокуса:

```css
/* src/Component/_view/Component_view@desktop.tsx */
.utilityfocus button:focus {
  outline: 2px solid #000;
}
```
