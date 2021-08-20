import React, { ComponentType, ReactNode } from 'react';
import slug from 'slug';
import { useUniqId } from '@yandex-lego/components/useUniqId';
import { Link } from '../components/Typography/Link';

interface IProps {
    children: ReactNode;
}

export function withAnchor<T extends object>(WrappedText: ComponentType<T>): React.FC<IProps> {
    return (props: IProps) => {
        const { children } = props;
        const uniqId = useUniqId('slug');

        const anchorSlug = typeof children === 'string' ? slug(children) : uniqId;

        return (
            <Link id={anchorSlug} href={`#${anchorSlug}`}>
                <WrappedText {...(props as T)} />
            </Link>
        );
    };
}
