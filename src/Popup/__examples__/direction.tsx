import React, { FC, forwardRef, useRef, useState } from 'react';
import { Popup, directions } from '@yandex-lego/components/Popup/desktop/bundle';
import { RadioButton } from '@yandex-lego/components/RadioButton/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/bundle';

export const Direction = () => {
    const anchorRef = useRef<HTMLDivElement>(null);
    const [hasTail, setTail] = useState(1);

    return (
        <>
            <style>{styles}</style>
            <div className="container-4bsz7d">
                <Box ref={anchorRef} hasTail={hasTail} setTail={setTail} />
                {directions.map((direction) => (
                    <Popup
                        // Use dynamic key for update math of arrow, need only for dynamic has tail.
                        key={direction + Boolean(hasTail)}
                        anchor={anchorRef}
                        scope="inplace"
                        direction={direction}
                        hasTail={Boolean(hasTail)}
                        target="anchor"
                        view="default"
                        visible
                        mainOffset={16}
                    >
                        <Content>{direction}</Content>
                    </Popup>
                ))}
            </div>
        </>
    );
};

const styles = `
    .container-4bsz7d {
        padding: 80px 128px;
    }

    .box-4bsz7d {
        background: #fff;
        border: 1px solid #E6E9F0;
        height: 158px;
        width: 342px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
    }
`;

const Box = forwardRef<HTMLDivElement, any>((props, ref) => {
    const { hasTail, setTail } = props;

    return (
        <div className="box-4bsz7d" ref={ref}>
            <Text color="ghost" typography="caption-xl" weight="bold" style={{ marginBottom: 16 }}>
                Направления Popup
            </Text>
            <RadioButton
                size="s"
                view="default"
                value={String(hasTail)}
                options={[
                    { value: '1', children: 'С хвостиком' },
                    { value: '0', children: 'Без хвостика' },
                ]}
                onChange={(event) => setTail(Number(event.target.value))}
            />
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
