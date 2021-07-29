import React, { ComponentType } from 'react';
import slug from 'slug';
import { Link } from '../components/Typography/Link';

interface IProps {
    children: string;
}

export function withAnchor<T extends object>(WrappedText: ComponentType<T>): React.FC<IProps> {
    return (props: IProps) => {
        const { children } = props;

        return (
            <Link id={slug(children)} href={`#${slug(children)}`}>
                <WrappedText {...(props as T)} />
            </Link>
        );
    };
}
