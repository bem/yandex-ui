import { withBemMod } from '@bem-react/core';

import { cnCheckbox } from '../Checkbox';
import './Checkbox_lines_multi.css';

export interface ICheckboxLinesMultiProps {
    lines?: 'multi';
}

/**
 * @param {ICheckboxLinesMultiProps} props
 */
export const withLinesMulti = withBemMod<ICheckboxLinesMultiProps>(cnCheckbox(), { lines: 'multi' });
