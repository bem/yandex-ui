# MessageBox



> **Важно!** Компонент может измениться после [дизайн-ревью](https://nda.ya.ru/t/avWGaTY33W4RHa), следите за обновлениями.

<!-- description:start -->
Визуальный компонент для уведомлений, плашек и других паттернов.
<!-- description:end -->

## Пример подключения

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
import React from 'react'
import { compose } from '@bem-react/core'
import {
  MessageBox as MessageBoxDesktop,
  withSizeM,
  withViewDefault,
} from '@yandex/ui/MessageBox/desktop'

const MessageBox = compose(
  withSizeM,
  withViewDefault,
)(MessageBoxDesktop)

const App = () => (
  <MessageBox view="default" size="m">
    MessageBox
  </MessageBox>
)
```

Использование с полным набором модификаторов:

```ts
// src/App.ts
import React from 'react'
import { MessageBox } from '@yandex/ui/MessageBox/desktop/bundle'

const App = () => (
  <MessageBox view="default" size="m">
    MessageBox
  </MessageBox>
)
```

## Примеры

### Вид компонента

Чтобы изменить вид компонента, установите свойство `view` в одно из следующих значений: `"default"`, `"inverse"`, `"promo"` (Компонент появится при нажатии на кнопку в примере).

{{%story::desktop:surface-messagebox-desktop--view%}}

### Размер компонента

Чтобы изменить размер компонента, установите свойство `size` в одно из следующих значений: `"s"`, `"m"`, `"l"`.

{{%story::desktop:surface-messagebox-desktop--size%}}

### Уголки

Чтобы добавить компоненту произвольный компонент в угол, передайте нужный элемент в свойство `corners`.

```tsx
import {
  MessageBox,
  Corner,
} from '@yandex/ui/MessageBox/desktop/bundle'

<MessageBox
  view="default"
  size="m"
  corner={
    <Corner width={42} side="bottom-right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49 49">
        <path
          fill="#ffd426"
          stroke="#f6cf2e"
          d="M17.644 34.455l9.906 13.912 4.949-16.171
          16.296-4.911-14.02-9.83.167-16.948-13.614
          10.096L5.135 5.039l5.606 16.07L.567
          34.62z"
        />
      </svg>
    </Corner>
  }
/>
```

{{%story::desktop:surface-messagebox-desktop--corners%}}

### Кнопки действий

Чтобы добавить кнопки, установите свойство `actions` с необходимым набором кнопок.

```ts
<MessageBox
  view="default"
  size="m"
  actions={
    <>
      <Button view="clear" size="m">
        Отклонить
      </Button>
      <Button view="action" size="m">
        Принять
      </Button>
    </>
  }
>
  Новая почта с классными темами теперь для вас!
</MessageBox>
```

{{%story::desktop:surface-messagebox-desktop--buttons%}}

### Составной компонент

Чтобы добавить произвольный фон, установите свойство `background` с необходимым изображением.

В составе так же есть вспомогательный компонент `Wrapper`, который позволяет размещать текст или разметку - слева, справа или по центру.

```tsx
import {
  MessageBox,
  Wrapper,
} from '@yandex/ui/MessageBox/desktop/bundle'

<MessageBox
  view="default"
  size="m"
  background={
    <img
      style={{ filter: 'opacity(.5)', width: '100%' }}
      src="//avatars.mds.yandex.net/get-dialogs/1676983/7bdc8b36f13ce872e360/catalogue-banner-x3"
    />
  }
>
  <Wrapper leading="текст слева" trailing="текст справа">
    текст по центру
  </Wrapper>
</MessageBox>
```

{{%story::desktop:surface-messagebox-desktop--complex%}}

### Раскладка компонента

Чтобы изменить раскладку компонента, установите свойство `layout` в одно из допустимых значений:

- `layout="plain"` — Используется для уведомлений и того, что не требует пользовательского взаимодействия (используется по умолчанию).
- `layout="tooltip"` — Используется для создании различного рода подсказок.
- `layout="functional"` — Используется для создания интерактивного компонента.

{{%story::desktop:surface-messagebox-desktop--layout%}}

### MessageBox + Popup

Компонент можно показать относительно любого элемента на странице, для этого необходимо воспользоваться импортом `MessageBoxPopup`, данный компонент использует внутри себя `Popup`, а снаружи частично реализует его интерфейс.

```tsx
import { MessageBoxPopup } from '@yandex/ui/MessageBox/desktop/bundle'

<MessageBoxPopup
  visible
  hasTail
  anchor={anchorRef}
  direction="top-center"
  view="default"
  size="s"
>
  top-center
</MessageBoxPopup>
```

{{%story::desktop:surface-messagebox-desktop--with-popup%}}

## Свойства

### MessageBox

<!-- props:start -->
| Свойство    | Тип                                                                                                                                                                                                                                                               | По умолчанию | Описание                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| className?  | `string`                                                                                                                                                                                                                                                          | —            | Дополнительный className                                                    |
| corner?     | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Элемент, который будет размещен в углу компонента                           |
| opaque?     | `false \| true`                                                                                                                                                                                                                                                   | —            | Делает фон непрозрачным                                                     |
| onClose?    | `(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void`                                                                                                                                                                                                      | —            | Обработчик клика на close элемент и индикатор того, что close надо показать |
| actions?    | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Кнопка или набор кнопок, которые будут размещены внизу компонента           |
| background? | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal` | —            | Элемент, который будет размещен на фоне компонента                          |
| layout?     | `"tooltip" \| "plain" \| "functional"`                                                                                                                                                                                                                            | `'plain'`    | Раскладка компонента                                                        |
| innerRef?   | `RefObject<HTMLDivElement>`                                                                                                                                                                                                                                       | —            | Ссылка на корневой DOM-элемент компонента                                   |
| tailRef?    | `(instance: HTMLDivElement) => void \| RefObject<HTMLDivElement>`                                                                                                                                                                                                 | —            | Ссылка на DOM-элемент хвостика                                              |
| hasTail?    | `false \| true`                                                                                                                                                                                                                                                   | —            | Включает/отключает хвостик у компонента                                     |
| tailType?   | `"default" \| "rounded"`                                                                                                                                                                                                                                          | `'default'`  | Тип хвостика                                                                |
<!-- props:end -->

### MessageBoxPopup

Компонент частично реализует интерфейс `MessageBox`, `Popup`, `WithOutsideClick` и `PopupTargetAnchor`.

| Свойство   | Тип                                                       | По умолчанию    | Описание                                                                                                                                  |
| ---------- | --------------------------------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| visible?   | `false \| true`                                           | —               | Делает попап видимым                                                                                                                      |
| anchor?    | `RefObject<HTMLElement>`                                  | —               | Элемент, относительно которого позиционируется попап                                                                                      |
| scope?     | `RefObject<HTMLElement>`                                  | `document.body` | Ссылка на DOM-элемент, в котором размещается попап<br>Важно, чтобы контейнер имел `position: relative` для корректного позиционирования   |
| direction? | `Direction | Direction[]`                                 | —               | Направление для раскрытия компонента                                                                                                      |
| onClick?   | `(event: MouseEvent<HTMLDivElement, MouseEvent>) => void` | —               | Обработчик, вызываемый при срабатывании события click                                                                                     |