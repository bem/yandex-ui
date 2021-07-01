import React from 'react';
import { ComboBox, IItem } from './index';
import { EXAMPLE_DESKTOP_TOKEN, parameters } from '../examples-config';
import { Text } from '../../../Text/desktop/bundle';
import { Link } from '../../../Link/desktop/bundle';

export default {
    title: EXAMPLE_DESKTOP_TOKEN,
    parameters,
};

const items: IItem[] = [
    {
        id: '1',
        avatar: require('./images/shadrin.png'),
        title: 'Роман Шадрин',
        subtitle: '2340 подписчиков',
    },
    {
        id: '2',
        avatar: require('./images/regina.png'),
        title: 'Регина Тодаренко',
        subtitle: '2340 подписчиков',
    },
    {
        id: '3',
        avatar: require('./images/tvrain.png'),
        title: 'Телеканал Дождь',
        subtitle: '2340 подписчиков',
    },
    {
        id: '4',
        avatar: require('./images/ivleeva.png'),
        title: 'AgentShow',
        subtitle: '2340 подписчиков',
    },
    {
        id: '5',
        avatar: require('./images/shadrin.png'),
        title: 'Вадим Галыгин',
        subtitle: '2340 подписчиков',
        disabled: true,
    },
];

export const ComboBoxExample = () => {
    const [value, setValue] = React.useState(items[1]);
    const [searchText, setSearchText] = React.useState('');
    const [progress, setProgress] = React.useState(false);

    const options = React.useMemo(() => {
        return items.filter((item) => {
            const text = `${item.title} ${item.subtitle}`.toLocaleLowerCase();
            const term = searchText.toLocaleLowerCase();
            return text.includes(term);
        });
    }, [searchText]);

    React.useEffect(() => {
        setProgress(true);
        const timer = setTimeout(() => setProgress(false), 300);
        return () => clearTimeout(timer);
    }, [searchText]);

    return (
        <>
            <Text as="p" typography="headline-m">
                А вы знали, что из компонентов <Text color="brand">Лего</Text> можно собрать <Text color="success">ComboBox</Text>?
            </Text>
            <ComboBox
                style={{ width: 300 }}
                value={value}
                onChange={(newValue) => newValue && setValue(newValue)}
                searchText={searchText}
                searchInProgress={progress}
                onChangeSearchText={setSearchText}
                options={options}
            />
            <Text as="p" typography="body-long-m">
                <Link view="default" href="https://github.yandex-team.ru/search-interfaces/frontend/tree/master/packages/lego-components/src/Select/Select.examples/ComboBox">
                    Ссылка на исходники
                </Link>
            </Text>
        </>
    );
};

ComboBoxExample.story = {
    name: 'ComboBox',
};
