import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';

import {Heart} from './classes';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'heart-it-database',
});

export default new Database({
  adapter,
  actionsEnabled: true,
  modelClasses: [Heart],
});
