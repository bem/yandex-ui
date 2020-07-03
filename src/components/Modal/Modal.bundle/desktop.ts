import { compose } from '@bem-react/core';

// base
import { Modal as ModalDesktop } from '../Modal@desktop';
// _theme
import { withThemeNormal } from '../_theme/Modal_theme_normal@desktop';

export * from '../Modal@desktop';

export const Modal = compose(withThemeNormal)(ModalDesktop);
