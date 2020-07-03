import React, { MouseEvent, KeyboardEvent, PureComponent, KeyboardEventHandler } from 'react';
import { withBemMod } from '@bem-react/core';

import { Keys } from '../../../lib/keyboard';
import { ILinkProps, ContainerElement, cnLink } from '../Link';

export interface ILinkPseudoProps {
    /**
     * Псевдоссылка
     */
    pseudo?: boolean;

    /**
     * Обработчик события `onKeyDown`
     */
    onKeyDown?: KeyboardEventHandler<ContainerElement>;
}

/**
 * Модификатор, делающий из ссылки псевдоссылку.
 * @param {ILinkPseudoProps} props
 */
export const withPseudo = withBemMod<ILinkPseudoProps, ILinkProps>(cnLink(), { pseudo: true }, (Link) => {
    class WithPseudo extends PureComponent<ILinkPseudoProps & ILinkProps> {
        render() {
            const { pseudo, ...props } = this.props;

            return <Link {...props} onClick={this.onClick} onKeyDown={this.onKeyDown} />;
        }

        protected onClick = (event: MouseEvent<ContainerElement>) => {
            event.preventDefault();

            if (this.props.onClick !== undefined) {
                this.props.onClick(event);
            }
        };

        protected onKeyDown = (event: KeyboardEvent<ContainerElement>) => {
            if (event.keyCode === Keys.SPACE) {
                // Отменяем scroll.
                event.preventDefault();
            }

            if (this.props.onKeyDown !== undefined) {
                this.props.onKeyDown(event);
            }
        };
    }

    return WithPseudo;
});
