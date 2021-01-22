import { cn } from '@bem-react/classname';

export const cnHeader = cn('YandexHeader');
export const cnHeaderBase = cnHeader('Base');
export const cnHeaderLogoWrapper = cnHeader('LogoWrapper');
export const cnHeaderLogo = cnHeader('Logo');
export const cnHeaderLogoInline = cnHeader('Logo-Inline');
export const cnHeaderContent = cnHeader('Content');
export const cnHeaderIcon = cnHeader('Icon');
export const cnHeaderInlineIcon = cnHeader('InlineIcon');
export const cnHeaderImage = cnHeader('Image');
export const cnHeaderActions = cnHeader('Actions', [cnHeader('Item')]);
