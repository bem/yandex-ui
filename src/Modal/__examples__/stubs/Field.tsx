import React, { FC, ReactNode } from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

const styles = {
    field: {
        marginBottom: 'var(--space-m)',
    },
    label: {
        marginBottom: 'var(--space-xs)',
    },
};

export interface FieldProps {
    label: ReactNode;
}

export const Field: FC<FieldProps> = (props) => {
    const { label, children } = props;

    return (
        <div style={styles.field}>
            <Text as="div" typography="body-short-m" color="secondary" style={styles.label}>
                {label}
            </Text>
            <div>{children}</div>
        </div>
    );
};
