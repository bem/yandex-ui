import React from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

export const Align = () => (
    <>
        <Text as="div" typography="display-s" weight="light">
            Миссия Яндекса — помогать людям решать задачи и достигать своих целей в жизни.
        </Text>
        <Text as="div" typography="display-s" weight="light" style={{ direction: 'rtl' }}>
            משימתו של יאנדקס היא לעזור לאנשים לפתור בעיות ולהשיג את מטרותיהם בחיים.
        </Text>
    </>
);
