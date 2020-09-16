import { useEffect, useLayoutEffect as useLayoutEffectOriginal } from 'react';
import { canUseDOM } from '../lib/canUseDOM';

export const useLayoutEffect = canUseDOM() ? useLayoutEffectOriginal : useEffect;
