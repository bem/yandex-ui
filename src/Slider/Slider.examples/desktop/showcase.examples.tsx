import React, { FC } from 'react';
import { cn } from '@bem-react/classname';

import { Divider } from '../../../Divider';
import { ListTile } from '../../../ListTile';
import { Text } from '../../../Text/bundle';
import { Button } from '../../../Button/desktop/bundle';
import { Tumbler } from '../../../Tumbler/desktop/bundle';
import { Slider, SliderProps, useSliderState } from '../../desktop/bundle';
import './example.css';

import { configureRootTheme } from '../../../Theme';
import { presets } from '../../../Theme/presets';

configureRootTheme({ theme: presets.default });

// TODO: Перенести в общее место.
const Grid: FC<{ id?: string }> = ({ children, id }) => (
    <div id={id} className="Grid">
        {children}
    </div>
);

const Cell: FC<{ label?: string; id?: string }> = ({ children, label, id }) => (
    <div id={id} className={cn('Grid')('Cell')}>
        {label && (
            <Text as="h3" typography="control-xs" color="secondary">
                {label}
            </Text>
        )}
        <div className="Grid-CellContent">{children}</div>
    </div>
);

const SliderStateful: FC<Omit<SliderProps, 'onInput'>> = ({ value, ...props }) => {
    const state = useSliderState({ value });
    return <Slider {...props} {...state} />;
};

export const Showcase = () => {
    return (
        <>
            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                Slider (horizontal)
            </Text>
            <Grid id="horizontal">
                <Cell id="horizontal-sipmple" label="Simple [filled]">
                    <SliderStateful filled view="default" value={[10]} />
                </Cell>
                <Cell label="Simple [step=10 | filled]">
                    <SliderStateful filled step={10} view="default" value={[10]} />
                </Cell>
                <Cell label="Simple [step=10 | showTicks | filled]">
                    <SliderStateful filled showTicks step={10} view="default" value={[10]} />
                </Cell>
                <Cell label="Simple [step=10 | showTicks | showTickValues | filled]">
                    <SliderStateful filled showTicks showTickValues step={10} view="default" value={[10]} />
                </Cell>

                <Cell label="Range [filled]">
                    <SliderStateful filled view="default" value={[10, 50]} />
                </Cell>
                <Cell label="Range [step=10 | filled]">
                    <SliderStateful filled step={10} view="default" value={[10, 50]} />
                </Cell>
                <Cell label="Range [step=10 | showTicks | filled]">
                    <SliderStateful filled showTicks step={10} view="default" value={[10, 50]} />
                </Cell>
                <Cell label="Range [step=10 | showTicks | showTickValues | filled]">
                    <SliderStateful filled showTicks showTickValues step={10} view="default" value={[10, 50]} />
                </Cell>

                <Cell label="Simple [reverse | showTickValues | filled]">
                    <SliderStateful filled reverse showTickValues view="default" value={[10]} />
                </Cell>
                <Cell label="Range [reverse | showTickValues | filled]">
                    <SliderStateful filled reverse showTickValues view="default" value={[10, 50]} />
                </Cell>

                <Cell label="Simple">
                    <SliderStateful view="default" value={[10]} />
                </Cell>
                <Cell label="Range">
                    <SliderStateful view="default" value={[10, 50]} />
                </Cell>

                <Cell id="horizontal-disabled" label="Simple [step=5 | disabled | showTicks | showTickValues | filled]">
                    <SliderStateful filled disabled showTicks showTickValues step={5} view="default" value={[10]} />
                </Cell>
                <Cell label="Range [step=5 | disabled | showTicks | showTickValues | filled]">
                    <SliderStateful filled disabled showTicks showTickValues step={5} view="default" value={[10, 50]} />
                </Cell>

                <Cell label="Simple [step=100 | min=-500 | max=1000 | showTicks | showTickValues | filled]">
                    <SliderStateful
                        filled
                        showTicks
                        showTickValues
                        step={100}
                        min={-500}
                        max={1000}
                        view="default"
                        value={[100]}
                    />
                </Cell>

                <Cell label="Simple (align) [showTickValues | filled]">
                    <ListTile
                        alignItems="start"
                        leading={
                            <Button view="default" size="m">
                                Button
                            </Button>
                        }
                        trailing={
                            <Tumbler view="default" size="m" checked onChange={() => null} labelAfter="Tumbler" />
                        }
                        leftSpace="m"
                        rightSpace="m"
                    >
                        <SliderStateful filled showTickValues view="default" value={[10]} />
                    </ListTile>
                </Cell>
            </Grid>

            <Divider color="var(--color-bg-border)" style={{ margin: '32px 0' }} />

            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                Slider (outlined)
            </Text>

            <Grid id="outlined">
                <Cell label="Simple (outline)">
                    <div style={{ border: '1px solid #fc0' }}>
                        <SliderStateful view="default" value={[10]} />
                    </div>
                </Cell>
                <Cell label="Simple (outline) [showTickValues]">
                    <div style={{ border: '1px solid #fc0' }}>
                        <SliderStateful showTickValues view="default" value={[10]} />
                    </div>
                </Cell>
            </Grid>

            <Divider color="var(--color-bg-border)" style={{ margin: '32px 0' }} />

            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                Slider (overriden)
            </Text>

            <Grid id="overriden">
                <Cell label="Simple [showTickValues | renderTickLabel | filled]">
                    <SliderStateful
                        filled
                        showTickValues
                        view="default"
                        step={10}
                        value={[10]}
                        renderTickLabel={(props, TickLabel) => {
                            return props.index % 2 === 0 ? <TickLabel {...props} style={{ color: '#00985f' }} /> : null;
                        }}
                    />
                </Cell>
                <Cell label="Range (inner) [renderThumb | filled]">
                    <SliderStateful
                        filled
                        view="default"
                        step={10}
                        max={1000}
                        value={[100, 500]}
                        renderThumb={({ value, ...props }, Thumb) => {
                            return (
                                <Thumb {...props} style={{ width: 48, height: 28, borderRadius: 4 }}>
                                    {value}
                                </Thumb>
                            );
                        }}
                    />
                </Cell>
            </Grid>

            <Divider color="var(--color-bg-border)" style={{ margin: '32px 0' }} />

            <Text as="h2" typography="control-m" weight="medium" color="secondary">
                Slider (tokenize)
            </Text>

            <Grid id="tokenize">
                <Cell label="Simple [showTicks | showTickValues]">
                    <div
                        style={
                            {
                                '--slider-view-default-range-fill-color-base': '#00985f',
                                '--slider-view-default-range-fill-color-hovered': '#008554',
                                '--slider-view-default-tick-fill-color-base': '#00985f',
                                '--slider-view-default-tick-height': '14px',
                                '--slider-view-default-track-height': '4px',
                            } as any
                        }
                    >
                        <SliderStateful filled showTicks showTickValues view="default" step={10} value={[10]} />
                    </div>
                </Cell>
            </Grid>
        </>
    );
};
