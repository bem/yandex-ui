import path from 'path';
import fs from 'fs';

export const basicFixture = fs.readFileSync(path.join(__dirname, 'basic.html'), 'utf8');
