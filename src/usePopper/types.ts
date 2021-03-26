import { RefObject } from 'react';

export { VirtualElement } from '@popperjs/core';

export type Boundary = RefObject<HTMLElement> | Array<RefObject<HTMLElement>>;
