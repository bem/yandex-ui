import React, { useState } from 'react';
/* eslint-disable-next-line */
import toJsxString from 'react-element-to-jsx-string';
import { Textinput } from '../../../../src/Textinput/Textinput.bundle/desktop';
import { Checkbox } from '../../../../src/Checkbox/desktop/bundle';
import { Select } from '../../../../src/Select/desktop/bundle';
import { cnTheme } from '../../../../src/Theme';
import { theme } from '../../../../src/Theme/presets/default';

import styles from './Sandbox.module.css';

type SandboxProps = {
    displayName?: string;
    component?: any;
    knobs?: any;
};

const Knob: React.FC<any> = (props) => {
    const { label, value, data, onChange } = props;
    let control = null;
    if (typeof data === 'string') {
        control = (
            <Textinput view="default" size="s" value={value} onChange={onChange} />
        );
    } else if (typeof data === 'boolean') {
        control = (
            <Checkbox
                view="default"
                size="s"
                checked={value}
                onChange={() => onChange({ target: { value: !value } })}
            />
        );
    } else if (Array.isArray(data)) {
        control = (
            <Select
                view="default"
                size="s"
                // @ts-ignore
                options={data[0].map((i) => ({ value: i, content: i }))}
                onChange={onChange}
                value={value}
            />
        );
    }
    return (
        <div className={styles.Knob}>
            <label className={styles.KnobLabel}>
                <span className={styles.KnobLabelText}>{label}</span>
                {control}
            </label>
        </div>
    );
};

export const Sandbox: React.FC<SandboxProps> = (props) => {
    const { component: Component, knobs, displayName } = props;
    const [computedProps, setComputedProps] = useState<any>(() => {
        return Object.keys(knobs).reduce<any>((acc, key) => {
            if (Array.isArray(knobs[key])) {
                acc[key] = knobs[key][1];
            } else {
                acc[key] = knobs[key];
            }
            return acc;
        }, {});
    });
    const component = <Component {...computedProps} />;

    return (
        <div className={cnTheme(theme, [styles.host])}>
            <div className={styles.Sandbox}>
                <div className={styles.SandboxContent}>
                    <div className={styles.SandboxContentWrapper}>{component}</div>
                </div>
                <div className={styles.SandboxPanel}>
                    {Object.keys(knobs).map((knob, idx) => (
                        <Knob
                            key={`knob-${idx}`}
                            label={knob}
                            value={computedProps[knob]}
                            data={knobs[knob]}
                            onChange={(event: any) =>
                                setComputedProps({
                                    ...computedProps,
                                    [knob]: event.target.value,
                                })
                            }
                        />
                    ))}
                </div>
            </div>
            <div>
                {toJsxString(component, {
                    displayName: () => displayName || 'Unknown',
                })}
            </div>
        </div>
    );
};
