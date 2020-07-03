import React, { FC, MouseEventHandler } from 'react';

import { cnAttach } from '../Attach.const';
import '../Reset/Attach-Reset.css';
// TODO: https://st.yandex-team.ru/ISL-6940
import '../IconFile/Attach-IconFile.css';
import './Attach-Holder.css';

export interface IHolderProps {
    /**
     * Дополнительный className
     */
    className?: string;

    /**
     * Расширение файла
     */
    fileExtension?: string;

    /**
     * Название файла
     */
    fileName?: string;

    /**
     * ID Компонента
     */
    id: string;

    /**
     * Обработчик вызываемый при нажатии на крестик
     */
    onClearClick: MouseEventHandler<HTMLElement>;

    /**
     * Ширина текста
     */
    textWidth?: number;

    /**
     * Текст, когда файл не выбран
     */
    children?: string;
}

export const Holder: FC<IHolderProps> = ({
    children,
    className,
    fileExtension,
    fileName,
    id,
    onClearClick,
    textWidth,
    ...props
}) => (
    <span {...props} aria-hidden className={cnAttach('Holder', { file: fileExtension }, [className])}>
        {fileExtension && <span className={cnAttach('IconFile')} />}
        <label style={{ width: fileExtension && `${textWidth}px` }} className={cnAttach('Text')} htmlFor={id}>
            {fileName || children}
        </label>
        {fileExtension && <span className={cnAttach('Reset')} onClick={onClearClick} />}
    </span>
);
