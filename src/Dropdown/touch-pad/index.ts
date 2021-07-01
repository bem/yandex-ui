import { ExtractProps } from '@bem-react/core';
import { ComponentType } from 'react';
import { withDropdown, DropdownProps } from '../Dropdown';
import { Popup } from '../../Popup/touch-pad/bundle';

export const Dropdown = withDropdown<ExtractProps<typeof Popup>>(Popup) as ComponentType<DropdownProps>;
export * from '../Dropdown';
