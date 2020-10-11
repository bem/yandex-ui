// NOTE: При изменениях в этом файле необходимо также учитывать gatsby-browser.
import React from 'react';

import { MDXLayoutProvider } from './src/components/MDXLayoutProvider';

export const wrapRootElement = ({ element }) => <MDXLayoutProvider>{element}</MDXLayoutProvider>;
