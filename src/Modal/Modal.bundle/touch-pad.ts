import { compose } from '@bem-react/core';

// base
import { Modal as ModalTouchPad } from '../Modal@touch-pad';
// _theme
import { withThemeNormal } from '../_theme/Modal_theme_normal';

export * from '../Modal@touch-pad';

export const Modal = compose(withThemeNormal)(ModalTouchPad);
