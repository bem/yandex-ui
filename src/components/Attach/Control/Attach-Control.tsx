import React, { FC, ChangeEventHandler, RefObject } from 'react';

import { cnAttach } from '../Attach.const';
import './Attach-Control.css';

export interface IControlProps {
    /**
     * ID компонента.
     */
    id: string;

    /**
     * Обработчик, вызываемый при смене файла
     */
    onChange: ChangeEventHandler<HTMLInputElement>;

    /**
     * Имя компонента
     *
     * @default 'attachment'
     */
    name?: string;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLInputElement>;

    /**
     * HTML атрибут `disabled`
     */
    disabled?: boolean;

    /**
     * Допустимые типы файлов
     */
    accept?: string;
}

export const Control: FC<IControlProps> = ({
    disabled,
    id,
    innerRef,
    name = 'attachment',
    onChange,
    accept,
    ...props
}) => (
    <input
        {...props}
        autoComplete="off"
        className={cnAttach('Control')}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        ref={innerRef}
        tabIndex={-1}
        type="file"
        accept={accept}
    />
);
