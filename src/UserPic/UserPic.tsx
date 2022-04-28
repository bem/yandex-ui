import React, { FC, RefObject, ReactNode, useEffect } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

import './UserPic.css';

export interface IUserPicProps extends IClassNameProps {
    /**
     * Дополнительный контент после элемента `Image`
     */
    addonAfter?: ReactNode;

    /**
     * Ссылка на корневой DOM-элемент компонента
     */
    innerRef?: RefObject<HTMLDivElement>;

    /**
     * URL домена, на котором хранятся изображения аватарок
     *
     * @default 'https://avatars.mds.yandex.net'.
     */
    host?: string;

    /**
     * Уникальный идентификатор аватарки пользователя
     *
     * @default '0/0-0'
     */
    avatarId?: string;

    /**
     * Кастомная ссылка на изображение-аватар
     * Позволяет вывести своё изображение стилизованно под UserPic
     */
    lodpiUrl?: string;

    /**
     * Кастомная ссылка на изображение-аватар в двойном качестве
     * Позволяет вывести своё изображение стилизованно под UserPic
     */
    hidpiUrl?: string;

    /**
     * Наличие у аватарки окантовки «plus»
     */
    plus?: boolean;

    /**
     * Дополнительный класс
     */
    className?: string;
}

export const cnUserPic = cn('UserPic');

const getAvatarURL = (host = 'https://avatars.mds.yandex.net', avatarId = '0/0-0', isRetina: boolean) =>
    `${host}/get-yapic/${avatarId}/${isRetina ? 'islands-retina-middle' : 'islands-middle'}`;

/**
 * Компонент для создания иконки авторизованного пользователя (аватарки).
 * @param {IUserPicProps} props
 */
export const UserPic: FC<IUserPicProps> = ({
    host,
    avatarId,
    lodpiUrl,
    hidpiUrl,
    plus,
    className,
    innerRef,
    addonAfter,
    // @ts-ignore
    size,
    ...props
}) => {
    useEffect(() => {
        console.assert(size !== undefined, 'Модификатор size скоро станет обязательным, добавьте пожалуйста размер');
    }, []);

    if (!lodpiUrl) {
        lodpiUrl = getAvatarURL(host, avatarId, false);
        hidpiUrl = getAvatarURL(host, avatarId, true);
    }
    const srcSet = hidpiUrl ? `${lodpiUrl} 1x, ${hidpiUrl} 2x` : undefined;

    return (
        <div className={cnUserPic({ hasPlus: plus }, [className])} ref={innerRef}>
            <img {...props} src={lodpiUrl} className={cnUserPic('Image')} srcSet={srcSet} />
            {addonAfter}
        </div>
    );
};

UserPic.displayName = cnUserPic();
