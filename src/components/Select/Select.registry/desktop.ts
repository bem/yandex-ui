import { Registry } from '@bem-react/di';

import { cnSelect } from '../Select';

export * from '.';

export const selectRegistry = new Registry({ id: cnSelect() });

selectRegistry
    .set('Trigger', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Trigger" в реестр "${cnSelect()}".`);
    })
    .set('Icon', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Icon" в реестр "${cnSelect()}".`);
    })
    .set('Popup', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Popup" в реестр "${cnSelect()}".`);
    })
    .set('Menu', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Menu" в реестр "${cnSelect()}".`);
    });
