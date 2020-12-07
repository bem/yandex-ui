import React, { RefObject, useState, createRef } from 'react';

import { withOutsideClick } from '@yandex-lego/components/withOutsideClick';
import { Button } from '@yandex-lego/components/Button/Button.bundle/desktop';

const ComponentWithOutsideClick = withOutsideClick(({ visible, targetRef, ...props }) => (
    <>
        {visible && (
            <div
                style={{
                    backgroundColor: 'lightgray',
                    borderRadius: '4px',
                    lineHeight: '70px',
                    width: '100px',
                    textAlign: 'center',
                }}
                ref={targetRef as RefObject<HTMLDivElement>}
                {...props}
            >
                Click outside
            </div>
        )}
    </>
));

export const Ignore = () => {
    const [visible, setVisible] = useState(false);

    const targetRef = createRef<HTMLButtonElement>();
    const ignoreRef = createRef<HTMLButtonElement>();

    return (
        <div>
            <Button
                view="action"
                size="m"
                onClick={() => setVisible((prev) => !prev)}
                ref={targetRef}
            >
                Click
            </Button> &nbsp;
            <Button
                view="default"
                size="m"
            >
                Ignore button
            </Button> &nbsp;
            <Button
                view="default"
                size="m"
            >
                Ignore button
            </Button> <br /> <br />
            <ComponentWithOutsideClick
                visible={visible}
                onOutsideClick={() => setVisible(false)}
                targetRef={targetRef}
                ignoreRefs={[ignoreRef]}
            />
        </div>
    );
};
