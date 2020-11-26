import React, { FC, createContext, useContext, useMemo } from 'react';

export type SSRContextValue = {
    /**
     * Текущее значение счетчика внутри контекста
     */
    value: number;
    /**
     * ID контекста, необходим при использовании вложенных `SSRProvider`
     */
    id: number;
};

/**
 * @internal
 */
export const initialContextValue: SSRContextValue = { value: 0, id: 0 };

export const SSRContext = createContext<SSRContextValue>(initialContextValue);

/**
 * Реакт-провайдер синхронизирующий данные верстки при гидратации приложения.
 *
 * @example
 * const Root = () => (
 *   <SSRProvider>
 *     <App />
 *   </SSRProvider>
 * )
 */
export const SSRProvider: FC = ({ children }) => {
    const context = useContext(SSRContext);
    // prettier-ignore
    const value = useMemo(() => ({
        value: 0,
        id: context === initialContextValue ? 0 : ++context.id,
    }), [context]);

    return <SSRContext.Provider value={value}>{children}</SSRContext.Provider>;
};
