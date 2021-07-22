import React, { FC, useRef, useState } from 'react';
import { Popup } from '@yandex-lego/components/Popup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Boundary = () => {
    const boundaryRef = useRef(null);

    return (
        <>
            <style>{styles}</style>
            <div className="container-t35yhs" ref={boundaryRef}>
                <Card boundaryRef={boundaryRef} initialVisible />
                <Card boundaryRef={boundaryRef} />
                <Card boundaryRef={boundaryRef} />
            </div>
        </>
    );
};

const styles = `
    .container-t35yhs {
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 400px;
        width: 100%;
        overflow-y: scroll;
        padding: 0 24px;
    }

    .card-t35yhs {
        position: relative;
        flex: 0 0 auto;
        height: 316px;
        width: 400px;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='316' viewBox='0 0 400 316'%3E%3Crect x='0.5' y='0.5' width='399' height='315' rx='15.5' fill='white' stroke='%23E6E9F0'/%3E%3Crect x='4' y='4' width='392' height='156' rx='12' fill='%23E6E9F0'/%3E%3Crect x='32' y='244.001' width='336' height='8' rx='4' fill='%23A4A9BD'/%3E%3Crect x='32' y='260.001' width='336' height='8' rx='4' fill='%23A4A9BD'/%3E%3Crect x='32' y='276.001' width='168' height='8' rx='4' fill='%23A4A9BD'/%3E%3Crect x='32' y='176' width='185' height='17' rx='8.5' fill='%23A4A9BD'/%3E%3Crect x='32' y='203.001' width='124' height='17' rx='8.5' fill='%23A4A9BD'/%3E%3C/svg%3E%0A");
    }

    .card-t35yhs + .card-t35yhs {
        margin-top: 16px;
    }

    .card-button-t35yhs {
        position: absolute;
        top: 168px;
        left: 248px;
    }

    .menu-t35yhs {
        border-radius: 8px !important;
        background-color: #fff;
        box-shadow: 0px 0px 1px rgba(0, 20, 51, 0.3), 0px 4px 12px rgba(0, 20, 51, 0.15);
        display: flex;
        flex-direction: column;
        font-family: 'YS Text';
        fonst-size: 13px;
        overflow: hidden;
        padding: 12px 0;
    }

    .list-item-t35yhs {
        height: 32px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }

    .list-item-t35yhs:hover {
        background-color: #F7F8FA;
    }
`;

const Card: FC<any> = (props) => {
    const { initialVisible = false, boundaryRef } = props;
    const anchorRef = useRef(null);
    const [visible, setVisible] = useState(initialVisible);

    return (
        <div className="card-t35yhs">
            <Button
                innerRef={anchorRef}
                onClick={() => setVisible(!visible)}
                className="card-button-t35yhs"
                view="default"
                size="s"
            >
                Поделиться
            </Button>
            <Popup
                nonvisual
                target="anchor"
                anchor={anchorRef}
                direction={['bottom-start', 'top-start']}
                view="default"
                visible={visible}
                style={{ maxWidth: 280 }}
                onClose={() => setVisible(false)}
                scope="inplace"
                boundary={boundaryRef}
            >
                <div className="menu-t35yhs">
                    <div className="list-item-t35yhs">Facebook</div>
                    <div className="list-item-t35yhs">Twitter</div>
                    <div className="list-item-t35yhs">VK</div>
                    <div className="list-item-t35yhs">Одноклассники</div>
                </div>
            </Popup>
        </div>
    );
};
