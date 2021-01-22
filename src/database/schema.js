import {appSchema} from '@nozbe/watermelondb';

import {Hearts} from './models';

export default appSchema({
  version: 1,
  tables: [Hearts],
});
