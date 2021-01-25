import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from './schema';
import migrations from './schema-migrations';

export default new SQLiteAdapter({
  schema,
  migrations,
});
