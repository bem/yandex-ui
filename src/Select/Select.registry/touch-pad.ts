import { Registry } from '@bem-react/di';

import { cnSelect } from '../Select';

export type { ISelectRegistry } from './index';

export const selectRegistry = new Registry({ id: cnSelect() });

selectRegistry
    .set('Trigger', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Trigger" в реестр "${cnSelect()}".`);
    })
    .set('Icon', () => {
        throw new Error(`Для работы "Select" требуется установить компонент "Icon" в реестр "${cnSelect()}".`);
    });
