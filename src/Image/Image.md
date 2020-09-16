# Image



<!-- description:start -->
Компонент для красивой загрузки картинок

- Пока загружается картинка, пользователь будет видеть `<stub/>`
- После загрузки картинки она будет плавно отображена поверх `<stub/>`
- После плавного показана картинки `<stub/>` будет удалён из `DOM`
- Если картинка загружается из кэша, то пользователь увидит сразу картинку без показа `<stub/>`
- Если картинку не удалось загрузить, то покажется стандартная картинка из свойства `fallbackSrc`
<!-- description:end -->

## Пример использования

```ts
// src/App.ts
import React from 'react'
import { Image } from '@yandex/ui/Image/desktop'

// Использование компонента в вашем приложении
const App = () => (
  <Image
    src="https://yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png"
    src2x="https://yastatic.net/lego/_/Kx6F6RQnQFitm0qRxX7vpvfP0K0.png"
    alt="Alternative text"
  />
)
```

## Примеры

### Ширина, высота и скругления изображения

Чтобы задать ширину, высоту и скругления изображения, используйте свойства `width`, `height` и `borderRadius`.

{{%story::desktop:content-image-desktop--width-and-height%}}

### Адаптивное изображение
Изображение для ретины `src2x`,
или более гибкие свойства для адаптивных изображение, используйте свойства `sizes` и `srcSet`.

{{%story::desktop:content-image-desktop--sizes-and-srcset%}}

### Заглушки для избражений

Компонент состоит из трех частей:
```html
<container>
    <img/>
    <stub/>
</container>
```

```typescript jsx
import React from 'react';
import { Image } from '@yandex/ui/Image/desktop';

const App: React.FC = () => {
    return (
        <Image className="my-image" stub={<MyImageStub/>} />
    );
};
```
{{%story::desktop:content-image-desktop--load-error-stub%}}

### Использование с полным набором свойств

```typescript jsx
import React from 'react';
import { Image } from '@yandex/ui/Image/desktop';

const App: React.FC = () => {
    return (
        <Image
            src="https://example.com/image-1x.png"
            src2x="https://example.com/image-2x.png"
            fallbackSrc="https://example.com/image-fallback.png"
            alt="Image description"
            ariaLabel="Image description"
            className="mix-root-element (container if use 'stub' or image)"
            imageClassName="mix-for-img-tag-only"
            onClick={() => console.log(`I'm picture!`)}
            stub={<MyImageStub />}
        />
    );
};
```
{{%story::desktop:content-image-desktop--with-full-props%}}

## Свойства

<!-- props:start -->
| Свойство        | Тип                                                                                                                                                                                                                                                               | Описание                                                                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| innerRef?       | `RefObject<HTMLImageElement>`                                                                                                                                                                                                                                     | Ссылка на корневой DOM-элемент компонента                                                                                                                                                                                                                                                    |
| src?            | `string`                                                                                                                                                                                                                                                          | Ссылка на изображение                                                                                                                                                                                                                                                                        |
| srcSet?         | `string`                                                                                                                                                                                                                                                          | Набор источников для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `srcSet` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-srcset) |
| sizes?          | `string`                                                                                                                                                                                                                                                          | Набор размеров для создания [адаптивных изображений](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Подробнее об атрибуте `sizes` в документации [MDN web docs](https://developer.mozilla.org/ru/docs/Web/HTML/Element/img#attr-sizes)     |
| src2x?          | `string`                                                                                                                                                                                                                                                          | URL картинки для экранов с высокой плотностью пикселей = srcSet: "url 2x". srcSet имеет приоритет.                                                                                                                                                                                           |
| fallbackSrc?    | `string`                                                                                                                                                                                                                                                          | Ссылка на изображение при неудачной загрузке                                                                                                                                                                                                                                                 |
| className?      | `string`                                                                                                                                                                                                                                                          | Дополнительный класс                                                                                                                                                                                                                                                                         |
| imageClassName? | `string`                                                                                                                                                                                                                                                          | Дополнительный класс для изображения                                                                                                                                                                                                                                                         |
| stub?           | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | Компонент для отображения во время загрузки картинки                                                                                                                                                                                                                                         |
| alt?            | `string`                                                                                                                                                                                                                                                          | Альтернативный текст                                                                                                                                                                                                                                                                         |
| ariaLabel?      | `string`                                                                                                                                                                                                                                                          | атрибут aria-label                                                                                                                                                                                                                                                                           |
| onClick?        | `(event: MouseEvent<HTMLElement, MouseEvent>) => void`                                                                                                                                                                                                            | обработчик клика                                                                                                                                                                                                                                                                             |
| loading?        | `"lazy" \| "eager" \| "auto"`                                                                                                                                                                                                                                     | атрибут [loading у изображения](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)                                                                                                                                                                                  |
| width?          | `string \| number`                                                                                                                                                                                                                                                | Ширина изображения                                                                                                                                                                                                                                                                           |
| height?         | `string \| number`                                                                                                                                                                                                                                                | Высота изображения                                                                                                                                                                                                                                                                           |
| borderRadius?   | `string \| number`                                                                                                                                                                                                                                                | Скругления изображения                                                                                                                                                                                                                                                                       |
<!-- props:end -->

## Смотрите также

- <a href='https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images' target="_blank">Adaptive Images</a>
