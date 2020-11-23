# Dropdown



<!-- description:start -->
Компонент для создания выпадающего списка
<!-- description:end -->

{{%story::desktop:controls-dropdown-desktop--common%}}

{{%story::desktop:controls-dropdown-desktop--directions%}}

{{%story::desktop:controls-dropdown-desktop--split%}}

{{%story::desktop:controls-dropdown-desktop--tail%}}

{{%story::desktop:controls-dropdown-desktop--arrow%}}

<!-- props:start -->
| Свойство        | Тип                                                                                                                                                                                                                                                                                                                           | По умолчанию | Описание                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------- |
| visible         | `false \| true`                                                                                                                                                                                                                                                                                                               | —            | Делает попап видимым                                |
| children        | `ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)>`                                                                                                                                         | —            | Элемент триггер, например, Link или Button          |
| content         | `string \| number \| false \| true \| {} \| ReactElement<any, string \| ((props: any) => ReactElement<any, string \| ... \| (new (props: any) => Component<any, any, any>)>) \| (new (props: any) => Component<any, any, any>)> \| ReactNodeArray \| ReactPortal \| (props: { tailRef?: Ref<HTMLDivElement>; }) => ReactNode` | —            | Содержимое попапа                                   |
| style?          | `CSSProperties`                                                                                                                                                                                                                                                                                                               | —            | Html атрибут `style`                                |
| direction?      | `"bottom-left" \| "bottom-center" \| "bottom-right" \| "top-left" \| "top-center" \| "top-right" \| "right-top" \| "right-center" \| "right-bottom" \| "left-top" \| "left-center" \| "left-bottom" \| Direction[]`                                                                                                           | —            | Направление раскрытия попапа                        |
| trigger         | `"click" \| "hover" \| "focus" \| TriggerType[]`                                                                                                                                                                                                                                                                              | —            | Действие вызывающее показ попапа                    |
| onVisibleChange | `(visible: boolean) => void`                                                                                                                                                                                                                                                                                                  | —            | Обработчик на изменение видимости попапа            |
| mouseEnterDelay | `number`                                                                                                                                                                                                                                                                                                                      | `0`          | Временная задержка (секунды) на появление попапа    |
| mouseLeaveDelay | `number`                                                                                                                                                                                                                                                                                                                      | `0.1`        | Временная задержка (секунды) на исчезновение попапа |
| focusDelay      | `number`                                                                                                                                                                                                                                                                                                                      | `0`          | Временная задержка (секунды) на появление попапа    |
| blurDelay       | `number`                                                                                                                                                                                                                                                                                                                      | `0.15`       | Временная задержка (секунды) на исчезновение попапа |
<!-- props:end -->

Остальные пропсы напрямую проксируются в попап.
