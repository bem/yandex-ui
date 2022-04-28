import React from 'react';
import { withBemMod } from '@bem-react/core';
import { useComponentRegistry } from '@bem-react/di';

import { cnUserPic, IUserPicProps } from '../UserPic';
import { IUserPicRegistry } from './UserPic_hasCamera.registry/interface';

export interface IUserPicHasCameraProps {
    /**
     * Показывать иконку камеры для стандартного аватара.
     */
    hasCamera?: boolean;

    /**
     * Название сервиса на котором находится UserPic.
     */
    origin?: string;

    /**
     * Ссылка, открывающаяся при клике на камеру.
     */
    cameraURL?: string;

    /**
     * target для ссылки камеры.
     */
    cameraURLTarget?: string;
}

/**
 * Модификатор, отвечающий за появление иконки камеры на user-pic без аватара.
 * @param {IUserPicHasCameraProps} props
 */
export const withCamera = withBemMod<IUserPicHasCameraProps, IUserPicProps>(
    cnUserPic(),
    { hasCamera: true },
    (UserPic) => {
        return ({ origin, cameraURL, hasCamera, addonAfter, cameraURLTarget, ...props }) => {
            const { Camera } = useComponentRegistry<IUserPicRegistry>(cnUserPic());
            const cameraAvailable = !props.avatarId || props.avatarId === '0/0-0';

            return (
                <UserPic
                    {...props}
                    addonAfter={
                        <>
                            {cameraAvailable &&
                                <Camera origin={origin} cameraURL={cameraURL} cameraURLTarget={cameraURLTarget} />}
                            {addonAfter}
                        </>
                    }
                />
            );
        };
    },
);
