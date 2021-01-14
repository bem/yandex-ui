import React from 'react';

import { ButtonGroup } from '@yandex-lego/components/ButtonGroup/desktop';
import { Button } from '@yandex-lego/components/Button/desktop/bundle';

const dividerHorizontal = (
    <span style={{ borderLeft: '1px solid #CCCCCC', boxSizing: 'border-box', height: '20px', margin: 'auto 0' }} />
);
const dividerVertical = (
    <span style={{ borderBottom: '1px solid #CCCCCC', boxSizing: 'border-box', width: '40px', margin: '0 auto' }} />
);

export const Showcase = () => {
    const views = ['default', 'action', 'raised', 'link', 'pseudo', 'clear'] as (
        | 'default'
        | 'action'
        | 'raised'
        | 'link'
        | 'pseudo'
        | 'clear')[];
    const pins = ['round', 'circle'] as ('round' | 'circle')[];
    const sizes = ['s', 'm', 'l'] as ('s' | 'm' | 'l')[];

    return views.map((view) => (
        <>
            {pins.map((pin) =>
                sizes.map((size) => (
                    <>
                        <ButtonGroup
                            pin={pin}
                            gap={view !== 'link' && view !== 'pseudo' && view !== 'clear' ? 's' : undefined}
                            divider={view === 'clear' ? dividerHorizontal : undefined}
                            key={`${view}_${pin}_${size}_horizontal`}
                        >
                            <Button view={view} size={size}>
                                Button 1
                            </Button>
                            <Button view={view} size={size}>
                                Button 2
                            </Button>
                            <Button view={view} size={size}>
                                Button 3
                            </Button>
                            <Button view={view} size={size}>
                                Button 4
                            </Button>
                        </ButtonGroup>
                        <br /> <br />
                    </>
                )),
            )}
            {sizes.map((size) => (
                <>
                    <ButtonGroup
                        pin="round"
                        gap={view !== 'link' && view !== 'pseudo' && view !== 'clear' ? 's' : undefined}
                        divider={view === 'clear' ? dividerVertical : undefined}
                        vertical
                        key={`${view}_round_${size}_vertical`}
                    >
                        <Button view={view} size={size}>
                            Button 1
                        </Button>
                        <Button view={view} size={size}>
                            Button 2
                        </Button>
                        <Button view={view} size={size}>
                            Button 3
                        </Button>
                        <Button view={view} size={size}>
                            Button 4
                        </Button>
                    </ButtonGroup>
                    <br /> <br />
                </>
            ))}
        </>
    ));
};
