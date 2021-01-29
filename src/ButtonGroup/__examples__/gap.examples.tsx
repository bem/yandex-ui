import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop/bundle';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

export const Gap = () => (
    <>
        <ButtonGroup>
            {[1, 2, 3].map((key) => (
                <Button view="action" size="m" key={'ButtonGroup_' + key + '_no_gap'}>
                    No gap
                </Button>
            ))}
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup gap="s">
            {[1, 2, 3].map((key) => (
                <Button view="action" size="m" key={'ButtonGroup_' + key + '_s'}>
                    gap S
                </Button>
            ))}
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup gap="m">
            {[1, 2, 3].map((key) => (
                <Button view="action" size="m" key={'ButtonGroup_' + key + '_m'}>
                    gap M
                </Button>
            ))}
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup gap="l">
            {[1, 2, 3].map((key) => (
                <Button view="action" size="m" key={'ButtonGroup_' + key + '_l'}>
                    gap L
                </Button>
            ))}
        </ButtonGroup>
        <br /> <br />
        <ButtonGroup gap="xl">
            {[1, 2, 3].map((key) => (
                <Button view="action" size="m" key={'ButtonGroup_' + key + '_xl'}>
                    gap XL
                </Button>
            ))}
        </ButtonGroup>
    </>
);
