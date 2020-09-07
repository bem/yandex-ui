import { withRegistry } from '@bem-react/di';

import { Modal as ModalCommon } from './Modal';
import { modalRegistry } from './Modal.registry/touch-pad';
import './Modal@touch.css';

export * from './Modal';
export const Modal = withRegistry(modalRegistry)(ModalCommon);
