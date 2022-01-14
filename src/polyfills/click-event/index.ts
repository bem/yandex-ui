import { canUseDOM } from '../../lib/canUseDOM';
import { isIOS } from '../../lib/platform';

import './click-event.css';

if (canUseDOM() && isIOS()) {
	document.body.classList.add('click-event');
}
