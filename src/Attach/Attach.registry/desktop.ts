import { Registry } from '@bem-react/di';

import { cnAttach } from '../Attach.const';
import { Holder } from '../Holder/Attach-Holder';
import { Control } from '../Control/Attach-Control';

export const attachRegistry = new Registry({ id: cnAttach() });

attachRegistry
    .set('Holder', Holder)
    .set('Control', Control)
    .set('Button', () => {
        // TODO: Использовать error api из новой версии react.
        throw new Error(`Для работы "Attach" требуется установить компонент "Button" в реестр "${cnAttach()}".`);
    });
