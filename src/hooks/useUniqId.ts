import { createContext, useState, useContext } from 'react';

type Source = {
    value: number;
};

const createSource = (): Source => ({
    value: 1,
});

const counter = createSource();
const source = createContext(createSource());
const getId = (source: Source) => source.value++;

const generateUniqId = (context: Source, prefix = '') => {
    const id = getId(context || counter);
    return `${prefix}${id}`;
};

export const useUniqId = (prefix: string) => {
    const [id] = useState(generateUniqId(useContext(source), prefix));
    return id;
};
