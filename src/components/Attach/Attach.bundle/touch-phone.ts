import { withRegistry, Registry } from '@bem-react/di';
import { compose, composeU } from '@bem-react/core';

// base
import { Attach as AttachTouchPhone, cnAttach } from '../Attach@touch-phone';
// _size
import { withSizeL } from '../_size/Attach_size_l';
import { withSizeM } from '../_size/Attach_size_m';
import { withSizeS } from '../_size/Attach_size_s';

// Registry dependencies — Button
import { Button as ButtonDesktop } from '../../Button/Button@touch-phone';
import { withSizeL as withButtonSizeL } from '../../Button/_size/Button_size_l';
import { withSizeM as withButtonSizeM } from '../../Button/_size/Button_size_m';
import { withSizeS as withButtonSizeS } from '../../Button/_size/Button_size_s';
import { withViewDefault as withButtonViewDefault } from '../../Button/_view/Button_view_default';
import { withThemeNormal as withButtonThemeNormal } from '../../Button/_theme/Button_theme_normal';

const registry = new Registry({ id: cnAttach() });

const Button = compose(
    withButtonThemeNormal,
    withButtonViewDefault,
    composeU(withButtonSizeL, withButtonSizeM, withButtonSizeS),
)(ButtonDesktop);

registry.set('Button', Button);

export * from '../Attach@touch-phone';

export const Attach = compose(
    composeU(withSizeL, withSizeM, withSizeS),
    withRegistry(registry),
)(AttachTouchPhone);
