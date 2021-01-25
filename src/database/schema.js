import {appSchema} from '@nozbe/watermelondb';

import {Hearts} from './models';

export default appSchema({
  version: 3,
  tables: [Hearts],
});
