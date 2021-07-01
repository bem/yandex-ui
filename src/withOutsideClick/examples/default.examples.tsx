import React, { RefObject, useState } from 'react';

import { withOutsideClick } from '@yandex-lego/components/withOutsideClick';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

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

export const Default = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button
                view="action"
                size="m"
                onClick={() => setVisible((prev) => !prev)}
            >
                Click
            </Button> <br /> <br />
            <ComponentWithOutsideClick
                visible={visible}
                onOutsideClick={() => setVisible(false)}
            />
        </>
    );
};
