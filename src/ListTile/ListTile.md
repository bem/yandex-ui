# ListTile


<!-- description:start -->
Блок примитив для удобного позиционирования контента, обрамлённый иконками или другими блоками например checkbox
<!-- description:end -->

## Пример использования

Конфигурация темы на уровне проекта:

```ts
// src/lib/theme.ts
import { configureRootTheme } from '@yandex/ui/Theme'
import { theme } from '@yandex/ui/Theme/presets/default'

configureRootTheme({ theme })
```



## Примеры

{{%story::desktop:layout-listtile-desktop--text-only%}}

{{%story::desktop:layout-listtile-desktop--with-blocks-permutations%}}

## Свойства

<!-- props:start -->
| Свойство    | Тип                                                                                                                                                                                                                                                               | Описание                                  |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| children    | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Основной контент компонента               |
| leading?    | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Содержимое перед `children`               |
| trailing?   | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Содержимое после `children`               |
| className?  | `string`                                                                                                                                                                                                                                                          | Дополнительные css-классы                 |
| inline?     | `false \| true`                                                                                                                                                                                                                                                   | Определяет ширину по содержимому          |
| alignItems? | `"start" \| "end" \| "center" \| "baseline" \| "stretch"`                                                                                                                                                                                                         | Выравнивание элементов вдоль основной оси |
| leftSpace?  | `"3xs" \| "2xs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl"`                                                                                                                                                                | Отступ слева от основного контента        |
| rightSpace? | `"3xs" \| "2xs" \| "xs" \| "s" \| "m" \| "l" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "5xl" \| "6xl"`                                                                                                                                                                | Отступ справа от основного контента       |
| onClick?    | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void`                                                                                                                                                                                                         | Обработчик клика по ListTile              |
<!-- props:end -->
