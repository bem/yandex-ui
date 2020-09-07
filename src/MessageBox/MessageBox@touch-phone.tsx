import { withRegistry } from '@bem-react/di';

import { registry } from './MessageBox.registry/touch-phone';
import { MessageBoxPopup as MessageBoxPopupCommon } from './MessageBoxPopup';

export * from './MessageBox';
export { MessageBoxPopupProps } from './MessageBoxPopup';

export const MessageBoxPopup = withRegistry(registry)(MessageBoxPopupCommon);
