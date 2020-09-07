# Drawer

<a href='https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/components/Drawer' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Исходники]/[Github
][green]/badge.svg' /></a> <a href='https://search.yandex-team.ru/stsearch?text=Drawer.ts&facet.queue=ISL&facet.type=bug&facet.status=128' target='_blank'><img src='https://badger.yandex-team.ru/custom/[Известные проблемы]/[Startrek][blue]/badge.svg' /></a>


<!-- description:start -->
Используется для создания шторки.
<!-- description:end -->

Использование с полным набором модификаторов:

```js
import { Drawer } from '@yandex-lego/components/Drawer/touch-phone/bundle';
```

## Базовый вариант
```js
const App = () => {
  const scopeRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  const openDrawer = React.useCallback(() => setVisible(true), [setVisible])
  const closeDrawer = React.useCallback(() => setVisible(false), [setVisible])

  return (
    <div ref={scopeRef}>
      <button onClick={openDrawer}>Открыть шторку</button>
      <Drawer visible={visible} onClose={closeDrawer} scope={scopeRef} view="default">
        <p>Содержимое шторки</p>
        <button onClick={closeDrawer}>Закрыть шторку</button>
      </Drawer>
    </div>
  )
}
```

## Примеры

{{%story::desktop:surface-drawer-touch-phone--small%}}

## Вложенные шторки
При открытии шторки поверх другой меняется внешний вид, это достигается установкой пропа `nested` в значение `true`.
**Disclaimer:** шторка самостоятельно не умеет отслеживать другие шторки на странице, поэтому взаимодействие нескольких шторок необходимо реализовывать дополнительно.

<!-- props:start -->
| Свойство        | Тип                                                                                                                                                                                                                                                               | По умолчанию    | Описание                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| onClose?        | `() => void`                                                                                                                                                                                                                                                      | —               | Функция, которая будет вызвана при попытке закрытия шторки.                                                                               |
| titleComponent? | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —               | Компонент шапки шторки.                                                                                                                   |
| dragDisabled?   | `false \| true`                                                                                                                                                                                                                                                   | —               | Делает шторку "статичной"                                                                                                                 |
| nested?         | `false \| true`                                                                                                                                                                                                                                                   | —               | Меняет внешний вид для режима "шторка внутри шторки".                                                                                     |
| direction?      | `"bottom" \| "left" \| "right"`                                                                                                                                                                                                                                   | —               | Направление, откуда появляется шторка.                                                                                                    |
| maxSize?        | `string`                                                                                                                                                                                                                                                          | —               | Максимальный размер шторки (ширина или высота в зависимости от direction). Принимает любое валидное CSS значение.                         |
| animation       | `IDrawerAnimationParams`                                                                                                                                                                                                                                          | —               | Параметры анимации шторки.                                                                                                                |
| keepMounted?    | `false \| true`                                                                                                                                                                                                                                                   | `true`          | Сохраняет контейнер в DOM после создания                                                                                                  |
| className?      | `string`                                                                                                                                                                                                                                                          | —               | Дополнительный класс                                                                                                                      |
| innerRef?       | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                                                                 | —               | Ссылка на корневой DOM-элемент компонента                                                                                                 |
| zIndex?         | `number`                                                                                                                                                                                                                                                          | —               | Задает слой `z-index`                                                                                                                     |
| visible?        | `false \| true`                                                                                                                                                                                                                                                   | —               | Делает попап видимым                                                                                                                      |
| scope?          | `RefObject<HTMLElement>`                                                                                                                                                                                                                                          | `document.body` | Ссылка на DOM-элемент, в котором размещается попап<br>Важно, чтобы контейнер имел `position: relative` для корректного позициоинирования. |
<!-- props:end -->
