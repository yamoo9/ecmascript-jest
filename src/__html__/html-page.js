import { readFileSync } from 'node:fs';
import { resolve } from 'path';

const filePath = resolve('public/index.html');
const htmlPage = readFileSync(filePath, { encoding: 'utf-8' });

export default htmlPage;
