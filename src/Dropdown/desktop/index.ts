import { ExtractProps } from '@bem-react/core';
import { withDropdown } from '../Dropdown';
import { Popup } from '../../Popup/Popup.bundle/desktop';

export const Dropdown = withDropdown<ExtractProps<typeof Popup>>(Popup);

export * from '../Dropdown';
