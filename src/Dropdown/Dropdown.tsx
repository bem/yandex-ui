import React, {
    Children,
    cloneElement,
    ComponentType,
    createRef,
    CSSProperties,
    PureComponent,
    ReactElement,
} from 'react';
import { cn } from '@bem-react/classname';
import { getDisplayName } from '../lib/getDisplayName';
import { Direction, IPopupProps } from '../Popup';
import './Dropdown.css';
import { forkFn } from '../lib/forkFn';

const noop = () => {};

export const cnDropdown = cn('Dropdown');

export type TriggerType = 'click' | 'hover' | 'focus';

export interface DropdownProps {
    /**
     * Делает попап видимым
     */
    visible: boolean;
    /**
     * Элемент триггер, например, Link или Button
     */
    children: ReactElement;
    /**
     * Содержимое попапа
     */
    content: IPopupProps['children'];
    /**
     * Html атрибут `style`
     */
    style?: CSSProperties;
    /**
     * Направление раскрытия попапа
     */
    direction?: Direction | Direction[];
    /**
     * Действие вызывающее показ попапа
     */
    trigger: TriggerType | TriggerType[];
    /**
     * Обработчик на изменение видимости попапа
     */
    onVisibleChange: (visible: boolean) => void;
    /**
     * Временная задержка (секунды) на появление попапа
     * @default 0
     */
    mouseEnterDelay: number;
    /**
     * Временная задержка (секунды) на исчезновение попапа
     * @default 0.1
     */
    mouseLeaveDelay: number;
    /**
     * Временная задержка (секунды) на появление попапа
     * @default 0
     */
    focusDelay: number;
    /**
     * Временная задержка (секунды) на исчезновение попапа
     * @default 0.15
     */
    blurDelay: number;
}

export interface DropdownState {
    visible: boolean;
    prevVisible: boolean;
}

const getDirections = (direction?: Direction | Direction[]): Direction[] => {
    if (direction === undefined) {
        return ['bottom-left'];
    } else if (Array.isArray(direction)) {
        return direction;
    }
    return [direction];
};

/**
 * Компонент для создания выпадающего списка
 * @param {DropdownProps} props
 */
export const withDropdown = <T extends IPopupProps>(Popup: ComponentType<T>) =>
    class extends PureComponent<T & DropdownProps, DropdownState> {
        static displayName = `withDropdown(${getDisplayName(Popup)})`;

        static defaultProps = {
            onVisibleChange: noop,
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            visible: false,
            trigger: ['hover'],
        };

        componentWillUnmount() {
            this.clearDelayTimer();
        }

        innerRef = createRef<HTMLElement>();

        delayTimer: null | ReturnType<typeof setTimeout> = null;

        readonly state = {
            visible: this.props.visible,
            prevVisible: this.props.visible,
        };

        delaySetPopupVisible(visible: boolean, delay: number) {
            this.clearDelayTimer();
            const delayMS = delay * 1000;
            this.delayTimer = setTimeout(() => {
                this.setPopupVisible(visible);
                this.clearDelayTimer();
            }, delayMS);
        }

        setPopupVisible(visible: boolean) {
            const { visible: prevVisible } = this.state;
            const { onVisibleChange } = this.props;

            this.clearDelayTimer();

            if (prevVisible !== visible) {
                this.setState({ visible, prevVisible });
                onVisibleChange(visible);
            }
        }

        onClick = () => {
            this.setPopupVisible(!this.state.visible);
        };

        onMouseEnter = () => {
            const { mouseEnterDelay } = this.props;
            this.delaySetPopupVisible(true, mouseEnterDelay);
        };

        onMouseLeave = () => {
            const { mouseLeaveDelay } = this.props;
            this.delaySetPopupVisible(false, mouseLeaveDelay);
        };

        onFocus = () => {
            const { focusDelay } = this.props;
            this.delaySetPopupVisible(true, focusDelay);
        };

        onBlur = () => {
            const { blurDelay } = this.props;
            this.delaySetPopupVisible(false, blurDelay);
        };

        onPopupMouseEnter = () => {
            this.clearDelayTimer();
        };

        onPopupMouseLeave = () => {
            const { mouseLeaveDelay } = this.props;
            this.delaySetPopupVisible(false, mouseLeaveDelay);
        };

        clearDelayTimer() {
            if (this.delayTimer) {
                clearTimeout(this.delayTimer);
                this.delayTimer = null;
            }
        }

        render() {
            const {
                children,
                content,
                style,
                scope,
                direction,
                onVisibleChange,
                mouseLeaveDelay,
                mouseEnterDelay,
                focusDelay,
                blurDelay,
                trigger,
                ...passThroughProps
            } = this.props;

            const child = Children.only(children);

            const popupProps: IPopupProps & {
                onMouseEnter?: (event: MouseEvent) => void;
                onMouseLeave?: (event: MouseEvent) => void;
            } = {
                ...passThroughProps,
                children: content,
                target: 'anchor',
                anchor: this.innerRef,
                scope: scope || this.innerRef,
                directions: getDirections(direction),
                visible: this.state.visible,
                onClose: () => this.setPopupVisible(false),
            };

            const newChildProps = {} as any;

            if (trigger.indexOf('hover') !== -1) {
                newChildProps.onMouseEnter = forkFn(child.props.onMouseEnter, this.onMouseEnter);
                newChildProps.onMouseLeave = forkFn(child.props.onMouseLeave, this.onMouseLeave);
                popupProps.onMouseEnter = this.onPopupMouseEnter;
                popupProps.onMouseLeave = this.onPopupMouseLeave;
            }

            if (trigger.indexOf('focus') !== -1) {
                newChildProps.onFocus = forkFn(child.props.onFocus, this.onFocus);
                newChildProps.onBlur = forkFn(child.props.onBlur, this.onBlur);
            }

            if (trigger.indexOf('click') !== -1) {
                newChildProps.onClick = forkFn(child.props.onClick, this.onClick);
            }

            const dropdownTrigger = cloneElement(child, newChildProps);

            return (
                <span style={style} className={cnDropdown()} ref={this.innerRef}>
                    {dropdownTrigger}
                    <Popup {...(popupProps as any)} />
                </span>
            );
        }
    };
