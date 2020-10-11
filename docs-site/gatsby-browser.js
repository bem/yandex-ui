// NOTE: При изменениях в этом файле необходимо также учитывать gatsby-ssr.
import React from 'react';

import { MDXLayoutProvider } from './src/components/MDXLayoutProvider';
import './src/styles/global.css';

export const wrapRootElement = ({ element }) => <MDXLayoutProvider>{element}</MDXLayoutProvider>;
