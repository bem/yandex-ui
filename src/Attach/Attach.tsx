import React, {
    FC,
    ChangeEvent,
    MouseEvent,
    ChangeEventHandler,
    MouseEventHandler,
    RefObject,
    useState,
    useCallback,
    useRef,
    useEffect,
    KeyboardEvent,
} from 'react';
import { useComponentRegistry } from '@bem-react/di';

import { mergeRefs } from '../lib/mergeRefs';
import { Keys, isKeyCode } from '../lib/keyboard';
import { useUniqId } from '../useUniqId';
import { cnAttach, extensionsMap } from './Attach.const';
import { IAttachRegistry } from './Attach.registry/interface';
import './Attach.css';

export * from './Attach.const';

export interface IAttachProps {
    /**
     * Дополнительный className
     */
    className?: string;

    /**
     * Ссылка на DOM-элемент нативного контрола
     */
    controlRef?: RefObject<HTMLInputElement>;

    /**
     * Неактивное состояние компонента.
     * Состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;

    /**
     * Наличие элемента `Holder`
     */
    hasHolder?: boolean;

    /**
     * Текст внутри элемента `Holder`, когда файл не выбран
     */
    holderText?: string;

    /**
     * Ширина текста внутри элемента `Holder`
     */
    holderTextWidth?: number;

    /**
     * Уникальный id компонента
     *
     * @default useUniqId('xuniq')
     */
    id?: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLElement>;

    /**
     * Имя компонента.
     */
    name?: string;

    /**
     * Обработчик, вызываемый при смене файла
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;

    /**
     * Обработчик, вызываемый при очистке файла
     */
    onClearClick?: MouseEventHandler<HTMLElement>;

    /**
     * Размер компонента
     */
    size?: string;

    /**
     * Стилевое оформление компонента
     */
    theme?: string;

    /**
     * Внешний вид компонента
     */
    view?: string;

    /**
     * Содержимое кнопки
     */
    children: string;

    /**
     * Последовательность перехода между кнопками при нажатии на кнопку Tab
     * @default 0
     */
    tabIndex?: number;

    /**
     * Допустимые типы файлов
     */
    accept?: string;
}

type AttachState = {
    /**
     * Название файла
     */
    fileName?: string;

    /**
     * Расширение файла
     */
    fileExtension?: string;
};

/**
 * Компонент для создания кнопки выбора файла, предназначенного для отправки на сервер.
 * @param {IAttachProps} props
 */
export const Attach: FC<IAttachProps> = ({
    children,
    className,
    controlRef,
    disabled,
    hasHolder,
    holderText,
    holderTextWidth,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    id = useUniqId('xuniq'),
    innerRef,
    name,
    onChange,
    onClearClick,
    size,
    theme,
    view,
    tabIndex = 0,
    accept,
    ...props
}) => {
    const [{ fileName, fileExtension }, setFileMeta] = useState<AttachState>({});
    const { Button, Holder, Control } = useComponentRegistry<IAttachRegistry>(cnAttach());
    const controlInternalRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        mergeRefs(controlInternalRef, controlRef);
    }, [controlInternalRef, controlRef]);

    const onInternalChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const fileName = event.target.value.split('\\').pop() as string;
            const rawFileExtension = (fileName.split('.').pop() as string).toLowerCase();
            const fileExtension = extensionsMap[rawFileExtension] || 'unknown';

            if (onChange !== undefined) {
                onChange(event);
            }

            setFileMeta({ fileName, fileExtension });
        },
        [onChange],
    );

    const onInternalClearClick = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            if (controlInternalRef.current !== null) {
                if (onChange !== undefined) {
                    // Создаем синтетическое событие для эмуляции очистки контрола.
                    const syntheticEvent = Object.create(event);
                    syntheticEvent.target = controlInternalRef.current;
                    syntheticEvent.currentTarget = controlInternalRef.current;

                    controlInternalRef.current.value = '';

                    onChange(syntheticEvent);
                } else {
                    controlInternalRef.current.value = '';
                }
            }

            if (onClearClick !== undefined) {
                onClearClick(event);
            }

            setFileMeta({ fileName: undefined, fileExtension: undefined });
        },
        [onChange, onClearClick],
    );

    const onInternalKeyUp = useCallback(
        (event: KeyboardEvent<HTMLElement>) => {
            if (controlInternalRef.current !== null && isKeyCode(event.keyCode, [Keys.SPACE, Keys.ENTER])) {
                controlInternalRef.current.click();
            }
        },
        [controlInternalRef],
    );

    return (
        <span {...props} ref={innerRef} className={cnAttach({ disabled }, [className])}>
            <Button
                disabled={disabled}
                theme={theme as any}
                view={view as any}
                size={size as any}
                as="span"
                // Указываем role и aria-label для доступности.
                role="button"
                aria-label={children}
                tabIndex={disabled ? -1 : tabIndex}
                onKeyUp={onInternalKeyUp}
                className={cnAttach('Button')}
                // @ts-ignore
                autoComplete={null}
                // @ts-ignore
                type={null}
                addonAfter={
                    <Control
                        disabled={disabled}
                        id={id}
                        name={name}
                        onChange={onInternalChange}
                        innerRef={controlInternalRef}
                        accept={accept}
                    />
                }
            >
                {children}
            </Button>
            {hasHolder && (
                <Holder
                    id={id}
                    fileName={fileName}
                    fileExtension={fileExtension}
                    textWidth={holderTextWidth}
                    onClearClick={onInternalClearClick}
                >
                    {holderText}
                </Holder>
            )}
        </span>
    );
};

Attach.displayName = cnAttach();
