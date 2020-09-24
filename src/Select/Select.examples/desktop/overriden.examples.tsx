import React, { useState, useRef, useLayoutEffect, createContext, useCallback, useContext, useMemo } from 'react';

import { Textinput } from '../../../Textinput/Textinput.bundle/desktop';
import { Spacer } from '../../../Spacer';
import { Select } from '../../Select.bundle/desktop';
import { EXAMPLE_DESKTOP_TOKEN, createDecorators, parameters } from '../examples-config';
import './overriden.examples.css';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    decorators: createDecorators({ scope: 'desktop' }),
    parameters,
};

const INITIAL_OPTIONS = [
    { value: 'a', content: 'Каждый' },
    { value: 'b', content: 'Охотник' },
    { value: 'c', content: 'Желает' },
    { value: 'd', content: 'Знать' },
    { value: 'e', content: 'Где' },
    { value: 'f', content: 'Сидит' },
    { value: 'g', content: 'Фазан' },
];

const SearchContext = createContext<any>({});

const RenderMenu = (props: any, Menu: any) => {
    const { onChange, value } = useContext(SearchContext);
    const controlRef = useRef<HTMLInputElement | null>(null);
    const prevActiveNode = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        if (props.focused) {
            prevActiveNode.current = document.activeElement as HTMLElement;
            controlRef.current && controlRef.current.focus();
        } else if (controlRef.current === document.activeElement && prevActiveNode.current !== null) {
            prevActiveNode.current.focus();
        }
    }, [props.focused]);

    return (
        <div className="MenuWrapper">
            <Spacer all="8px">
                <Textinput onChange={onChange} value={value} controlRef={controlRef} view="default" size="s" />
            </Spacer>
            <Menu {...props} />
        </div>
    );
};

export const Overriden = () => {
    const [value, setValue] = useState('a');
    const [options, setOptions] = useState<any[]>(INITIAL_OPTIONS);
    const content = useMemo(() => {
        const option = INITIAL_OPTIONS.find((option) => option.value === value);
        return option ? option.content : '';
    }, [value]);

    const [searchValue, setSearchValue] = useState();
    const onInputChange = useCallback((event) => {
        setSearchValue(event.target.value);
        setOptions(INITIAL_OPTIONS.filter((option) => option.content.toLowerCase().startsWith(event.target.value)));
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <SearchContext.Provider value={{ onChange: onInputChange, value: searchValue }}>
                <Select
                    view="default"
                    size="m"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    options={options}
                    renderMenu={RenderMenu}
                    placeholder={content}
                    showAlwaysPlaceholder
                />
            </SearchContext.Provider>
        </div>
    );
};

Overriden.story = {
    name: 'overriden',
};
