// NPM packages
import initThinky from 'thinky';

// our packages
import { db as dbConfig } from '../../config';

// init thinky
const thinky = initThinky(dbConfig);
const { type, r } = thinky;

// export
export { thinky, type, r };
