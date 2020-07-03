import { withRegistry } from '@bem-react/di';

import { Modal as ModalCommon } from './Modal';
import { modalRegistry } from './Modal.registry/desktop';

export * from './Modal';
export const Modal = withRegistry(modalRegistry)(ModalCommon);
