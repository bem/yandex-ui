import { configureRootTheme } from '../../Theme';
import { presets } from '../../Theme/presets';

configureRootTheme({ theme: presets.default });

export const themes = [presets.default, presets.brand, presets.inverse];

export const EXAMPLE_DESKTOP_TOKEN = 'Utility|Showcase/desktop';
export const EXAMPLE_TOUCH_PHONE_TOKEN = 'Utility|Showcase/touch-phone';
export const EXAMPLE_TOUCH_PAD_TOKEN = 'Utility|Showcase/touch-pad';

export const parameters = {
    docs: {
        readme: require('../readme.md'),
    },
};
