import {fileURLToPath} from 'url';
import {dirname} from 'path';

/**
 * ESM-compatible __dirname replacement.
 * In the ncc ESM bundle, import.meta.url provides the file URL.
 * In CJS (ts-jest), this module is mocked to return __dirname.
 */
export const currentDirname = dirname(fileURLToPath(import.meta.url));
