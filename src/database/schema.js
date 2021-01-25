import {appSchema} from '@nozbe/watermelondb';

import {Hearts} from './models';

export default appSchema({
  version: 2,
  tables: [Hearts],
});
