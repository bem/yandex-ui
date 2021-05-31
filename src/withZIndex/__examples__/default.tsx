import React, { FC, useState } from 'react';
import { withZIndex } from '@yandex-lego/components/withZIndex';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const Component: FC<any> = ({ zIndex, innerRef, top, left, bgColor, style, visible, ...rest }) => (
    <div
        style={{
            width: '50px',
            height: '50px',
            position: 'absolute',
            top,
            left,
            backgroundColor: bgColor,
            zIndex: zIndex,
        }}
        ref={innerRef}
        {...rest}
    />
);

const ComponentWithZIndex1 = withZIndex(Component);
const ComponentWithZIndex2 = withZIndex(Component);

export const Default = () => {
    const [first, setFirst] = useState(true);
    const [visible, setVisible] = useState(true);

    const handleSwap = () => {
        setFirst((prev) => !prev);
        setVisible(false);
        setTimeout(() => setVisible(true), 100);
    };

    return (
        <>
            <div style={{ position: 'relative', float: 'left' }}>
                <ComponentWithZIndex1
                    top={-10}
                    left={80}
                    bgColor="lightgray"
                    visible={visible}
                    zIndexGroupLevel={first ? 1 : 0}
                />
                <ComponentWithZIndex2
                    top={0}
                    left={90}
                    bgColor="#fc0"
                    visible={visible}
                    zIndexGroupLevel={first ? 0 : 1}
                />
            </div>
            <Button view="action" size="m" onClick={handleSwap}>
                Swap
            </Button>
        </>
    );
};
