import React from 'react';
import { Registry, withRegistry } from '@bem-react/di';
import { compose } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import { Select, ISelectProps, cnSelect } from '../../desktop/bundle';
import { withOutsideClick } from '../../../withOutsideClick/withOutsideClick';
import { withZIndex } from '../../../withZIndex/withZIndex';
import { Popup } from '../../../Popup/desktop/bundle';
import { Menu } from '../../../Menu/desktop/bundle';
import { Icon } from '../../../Icon/desktop/bundle';
import { Text } from '../../../Text/desktop/bundle';
import { ISelectRegistry } from '../../Select.registry';
import { Button } from '../../../Button/desktop/bundle';
import { ListTile } from '../../../ListTile/ListTile';
import { Textinput } from '../../../Textinput/desktop/bundle';
import { Spin } from '../../../Spin/desktop/bundle';
import { Spacer } from '../../../Spacer/Spacer';
import { UserPic } from '../../../UserPic/UserPic@desktop';
import './index.css';

const c = cn('ComboBox');

export type IItem = {
    id: string;
    avatar: string;
    title: string;
    subtitle: string;
    disabled?: boolean;
}

const SelectedItemContext = React.createContext<IItem | undefined>(undefined);

type ISearchTextContextProps = {
    searchText: string;
    searchInProgress: boolean;
    onChangeSearchText: (value: string) => void;
};

const SearchTextContext = React.createContext<ISearchTextContextProps | undefined>(undefined);

const Option = (props: IItem) => {
    return (
        <ListTile
            leading={<UserPic className={c('Avatar')} lodpiUrl={props.avatar} />}
            leftSpace="m"
            alignItems="center"
            rightSpace="m"
            trailing={<Icon glyph="type-check" />}
        >
            <Text as="div" typography="control-xl">{props.title}</Text>
            <Text as="div" typography="control-s" color="secondary">{props.subtitle}</Text>
        </ListTile>
    );
};

const Trigger: ISelectRegistry['Trigger'] = ({ className, ...props }) => {
    const item = React.useContext(SelectedItemContext);
    const pressKeys = React.useMemo(() => [], []);
    return (
        <Button
            {...props as any}
            pressKeys={pressKeys}
            className={`${className} ${c('Trigger')}`}
            iconRight={props.iconRight}
        >
            { item ? <Option {...item} /> : '-' }
        </Button>
    );
};

const MenuWithSearch: ISelectRegistry['Menu'] = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { searchText, searchInProgress, onChangeSearchText } = React.useContext(SearchTextContext)!;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const initialActiveElement = React.useRef<HTMLElement | null>(null);

    // Фокусируемся на текстовом поле при открытии попапа, возвращаем фокус при закрытии
    React.useLayoutEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const input = inputRef.current!;
        if (props.focused) {
            initialActiveElement.current = document.activeElement as HTMLElement;
            input.focus();
            input.setSelectionRange(0, Number.MAX_SAFE_INTEGER);
        } else if (input === document.activeElement && initialActiveElement.current) {
            initialActiveElement.current.focus();
        }
    }, [props.focused]);

    return (
        <div className={c('MenuWithSearch')}>
            <div className={c('Search')}>
                <Textinput
                    controlRef={inputRef}
                    view="default"
                    size="m"
                    value={searchText}
                    onChange={(e) => onChangeSearchText(e.target.value)}
                    iconRight={searchInProgress ? <Spacer all="10px"><Spin view="default" size="xxs" progress /></Spacer> : undefined}
                />
            </div>
            <Menu {...props as any} />
        </div>
    );
};

const registry = new Registry({ id: cnSelect() })
    .set('Trigger', Trigger)
    .set('Popup', compose(withOutsideClick, withZIndex)(Popup))
    .set('Menu', MenuWithSearch)
    .set('Icon', Icon);

const CustomSelect = withRegistry(registry)(Select);

type IComboBoxProps = Omit<ISelectProps, 'value' | 'options' | 'onChange'> & ISearchTextContextProps & {
    value: IItem;
    options: IItem[];
    onChange: (value?: IItem) => void;
}

export const ComboBox = ({
    searchText, searchInProgress, onChangeSearchText, value, options: items, onChange, ...props
}: IComboBoxProps) => {
    const options = React.useMemo(() => items.map((item) => ({
        ...item,
        value: item.id,
        content: (
            <Option {...item} />
        ),
    })), [items]);

    const searchTextValue = React.useMemo(() => ({
        searchText,
        searchInProgress,
        onChangeSearchText,
    }), [searchText, searchInProgress, onChangeSearchText]);

    const handleChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(items.find(((item) => item.id === e.target.value)));
    }, [onChange, items]);

    return (
        <SelectedItemContext.Provider value={value}>
            <SearchTextContext.Provider value={searchTextValue}>
                <CustomSelect
                    className={c()}
                    view="default"
                    size="m"
                    value={value && value.id}
                    onChange={handleChange}
                    options={options}
                    {...props}
                />
            </SearchTextContext.Provider>
        </SelectedItemContext.Provider>
    );
};
