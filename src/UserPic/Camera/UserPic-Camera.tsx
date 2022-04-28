import React, { FC, useEffect, useState } from 'react';

import { Link } from '../../Link';

import { cnUserPic } from '../UserPic';
import './UserPic-Camera.css';

export interface IUserPicCameraProps {
    /**
     * Название сервиса на котором находится UserPic.
     *
     * @default 'userpic'
     */
    origin?: string;

    /**
     * Ссылка, открывающаяся при клике на камеру.
     *
     * @default 'https://passport.yandex.ru/profile/publics'
     */
    cameraURL?: string;

    /**
     * target для ссылки камеры.
     */
    cameraURLTarget?: string;

    /**
     * Дополнительный класс.
     */
    className?: string;
}

export const UserPicCamera: FC<IUserPicCameraProps> = ({
    origin = 'userpic',
    cameraURL = 'https://passport.yandex.ru/profile/public',
    cameraURLTarget,
    className,
}) => {
    const [retpath, setRetpath] = useState('');

    useEffect(() => {
        // Устанавливаем retpath после того, как компонент был смонтирован в DOM,
        // используем useEffect а не canUseDOM для того, чтобы не было проблем разной верстки при SSR.
        setRetpath(`&retpath=${encodeURIComponent(window.location.href)}`);
    });

    return (
        <div className={cnUserPic('Camera', null, [className])}>
            <Link className={cnUserPic('Link')} href={`${cameraURL}?origin=${origin}${retpath}`} target={cameraURLTarget} />
        </div>
    );
};
