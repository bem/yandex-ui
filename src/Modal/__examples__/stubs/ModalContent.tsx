import React, { FC, ReactNode } from 'react';
import { Text } from '@yandex-lego/components/Text/bundle';

const styles = {
    wrapper: {
        width: '400px',
        padding: 'var(--space-l)',
    },
    header: {
        marginBottom: 'var(--space-l)',
    },
    body: {
        marginBottom: 'var(--space-l)',
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
};

export interface ModalContentProps {
    header?: ReactNode;
    footer?: ReactNode;
}

export const ModalContent: FC<ModalContentProps> = (props) => {
    const { header, footer, children } = props;

    return (
        <div style={styles.wrapper}>
            {header && (
                <header style={styles.header}>
                    <Text as="div" typography="headline-m" color="primary">
                        {header}
                    </Text>
                </header>
            )}

            <section style={styles.body}>{children}</section>

            {footer && <footer style={styles.footer}>{footer}</footer>}
        </div>
    );
};
