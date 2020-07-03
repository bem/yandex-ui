import { withRegistry } from '@bem-react/di';

import { registry } from './Tooltip.registry/desktop';
import { Tooltip as TooltipCommon } from './Tooltip';
import { TooltipStateful as TooltipStatefulCommon } from './Tooltip.stateful';

export * from './Tooltip';

export const Tooltip = withRegistry(registry)(TooltipCommon);

export const TooltipStateful = withRegistry(registry)(TooltipStatefulCommon);
