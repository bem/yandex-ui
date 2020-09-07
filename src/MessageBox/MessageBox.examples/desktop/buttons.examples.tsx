import React from 'react';

import { Button } from '../../../Button/Button.bundle/desktop';
import { MessageBox } from '../../MessageBox.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import { cnTheme } from '../../../Theme';
import { theme } from '../../../Theme/presets/default';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

export const Buttons = () => (
    <div style={{ padding: '16px' }} className={cnTheme(theme)}>
        <MessageBox
            onClose={() => null}
            view="default"
            size="m"
            actions={
                <>
                    <Button view="clear" size="m">
                        Отклонить
                    </Button>
                    <Button view="action" size="m">
                        Принять
                    </Button>
                </>
            }
        >
            Новая почта с классными темами теперь для вас!
        </MessageBox>
    </div>
);

Buttons.story = {
    name: 'buttons',
};
