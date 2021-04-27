import React from 'react';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';
import { Text } from '@yandex-lego/components/Text/desktop/bundle';

export const Baseline = () => (
    <>
        <Text weight="medium" typography="body-long-m" style={{ display: 'inline-block', width: 275 }}>
            Подтвердить, что ответ достоверный?
        </Text>
        <Button view="raised" size="s" pin="circle-circle" baseline>
            Да
        </Button>
        &nbsp;&nbsp;
        <Button view="raised" size="s" pin="circle-circle" baseline>
            Нет
        </Button>
    </>
);
