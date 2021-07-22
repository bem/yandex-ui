import React, { useContext, createContext, FC } from 'react';

import { PageContext } from '../gatsby-types';

const Context = createContext<PageContext | null>(null);

export interface PageContextProviderProps {
    context: PageContext;
}

export const PageContextProvider: FC<PageContextProviderProps> = (props) => {
    return <Context.Provider value={props.context}>{props.children}</Context.Provider>;
};

export function usePageContext() {
    const context = useContext(Context);

    if (!context) {
        throw new Error('Page context not provided');
    }

    return context;
}
