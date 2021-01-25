import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import migrations from './migrations';

import {Heart} from './classes';

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: 'heart-it-database',
});

export default new Database({
  adapter,
  actionsEnabled: true,
  modelClasses: [Heart],
});
