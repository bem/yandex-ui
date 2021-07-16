import React, { FC, forwardRef, useRef, useState } from 'react';
import { Popup, directions } from '@yandex-lego/components/Popup/desktop/bundle';
import { Textinput } from '@yandex-lego/components/Textinput/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';

export const TailSize = () => {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [tailSize, setTailSize] = useState(24);

    return (
        <>
            <style>{styles}</style>
            <div className="container-y84ep4">
                <Box ref={anchorRef} tailSize={tailSize} setTailSize={setTailSize} />
                {directions.map((direction) => (
                    <Popup
                        // Use dynamic key for update math of arrow, need only for dynamic tail size.
                        key={direction + tailSize}
                        anchor={anchorRef}
                        scope="inplace"
                        direction={direction}
                        hasTail
                        target="anchor"
                        view="default"
                        visible
                        mainOffset={16}
                        tailSize={tailSize}
                    >
                        <Content>{direction}</Content>
                    </Popup>
                ))}
            </div>
        </>
    );
};

const styles = `
    .container-y84ep4 {
        padding: 80px 128px;
    }

    .box-y84ep4 {
        background: #fff;
        border: 1px solid #E6E9F0;
        height: 158px;
        width: 342px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
    }
`;

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { tailSize, setTailSize } = props;

    return (
        <div className="box-y84ep4" ref={ref}>
            <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginRight: 24 }}>
                Размер Tail
            </Text>
            <Textinput
                value={tailSize}
                onChange={(event) => setTailSize(Number(event.target.value))}
                size="s"
                view="default"
                type="number"
                style={{ width: 70 }}
            />
            <Text color="ghost" typography="caption-xl" style={{ marginLeft: 4 }}>
                px
            </Text>
        </div>
    );
});

const Content: FC = (props) => {
    const { children } = props;

    return (
        <Text
            typography="caption-xl"
            color="ghost"
            style={{ padding: '8px 16px', display: 'block', textAlign: 'center' }}
        >
            Direction
            <br />
            <Text weight="bold">{children}</Text>
        </Text>
    );
};
