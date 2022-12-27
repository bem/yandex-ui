import React, { useRef, useState } from 'react';
import { Popup as PopupBase } from '@yandex-lego/components/Popup/desktop/bundle';
import { select } from '@storybook/addon-knobs';
import { withTargetAnchor } from '../touch-phone';

const DIRECTIONS = ['bottom'] as ['bottom'];

const Popup = withTargetAnchor(PopupBase);

export const DisableOverlay = () => {
    const linkRef = useRef(null);
    const childLinkRef = useRef(null);

    const [visible, setVisible] = useState(true);
    const [childVisible, setChildVisible] = useState(false);

    const disableOverlay = select('disable overlay', [true, false], true);

    const onMainPopupClose = () => {
        setVisible(false);
        setChildVisible(false);
    };

    return (
        <>
            <style>{styles}</style>
            <div className="container-p8gql3q">
                <a
                    ref={linkRef}
                    onClick={() => setVisible(true)}
                    className="link-p8gql3q"
                >
                    Открыть попап
                </a>
                <Popup
                    hasTail
                    scope="inplace"
                    view="default"
                    target="anchor"
                    anchor={linkRef}
                    visible={visible}
                    style={{ maxWidth: 400 }}
                    onClose={onMainPopupClose}
                    direction={DIRECTIONS}
                    className="main-popup-p8gql3q"
                >
                    <span className="status-p8gql3q">
                        Оверлей на дочернем попапапе: {disableOverlay ? 'выключен' : 'включен'}
                    </span>
                    <span className="explanation-p8gql3q">
                        {disableOverlay ? (
                            'При таком использовании родительский попап закрывается даже, если дочерний попап активен'
                        ) : (
                            'При таком использовании родительский попап невозможно закрыть, если дочерний попап активен'
                        )}
                    </span>
                    <a
                        ref={childLinkRef}
                        onClick={() => setChildVisible(true)}
                        className="link-p8gql3q"
                    >
                        Открыть дочерний попап
                    </a>
                    <Popup
                        hasTail
                        view="default"
                        scope="inplace"
                        target="anchor"
                        visible={childVisible}
                        direction={DIRECTIONS}
                        anchor={childLinkRef}
                        disableOverlay={disableOverlay}
                        className="child-popup-p8gql3q"
                    >
                        попап внутри попапа
                    </Popup>
                </Popup>
            </div>
        </>
    );
};

const styles = `
    .container-p8gql3q {
        display: flex;
        justify-content: center;

        font-family: var(--typography-font-family);
    }

    .status-p8gql3q {
        margin-bottom: 10px;
        font-weight: 500;
    }

    .explanation-p8gql3q {
        margin-bottom: 20px;
    }

    .main-popup-p8gql3q {
        display: flex;
        flex-direction: column;
    }

    .child-popup-p8gql3q,
    .main-popup-p8gql3q {
        padding: 10px;
    }

    .link-p8gql3q {
        color: #1EA7FD;
        text-decoration: underline;
        cursor: pointer;
    }
`;
