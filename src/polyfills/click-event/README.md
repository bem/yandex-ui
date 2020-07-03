# click-event

Safari Mobile 7.0+ (и, вероятно, более ранние версии тоже) страдает от ошибки, когда события `click`
не запускаются на элементах, которые обычно не являются интерактивными (например, `<div>`) и которые
также не имеют обработчиков событий, непосредственно прикрепленных к самим элементам
(т. е. используется делегирование событий). [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

Для обхода ошибки, устанавливется `pointer: cursor` на `body`.

> ⚠️ Используется на touch mobile устройствах.

## Пример использования

Подключить полифил в компоненте:

```tsx
// src/components/Component/Component@touch-phone.tsx
import '../../polyfills/click-event'
```
