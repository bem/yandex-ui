import { compose } from '@bem-react/core';

// base
import { Modal as ModalTouchPhone } from '../Modal@touch-phone';
// _theme
import { withThemeNormal } from '../_theme/Modal_theme_normal';

export * from '../Modal@touch-phone';

export const Modal = compose(withThemeNormal)(ModalTouchPhone);
