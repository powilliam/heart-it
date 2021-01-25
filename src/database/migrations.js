import {schemaMigrations} from '@nozbe/watermelondb/Schema/migrations';

import {MIGRATE_HEARTS_TO_VERSION_2} from './models';

export default schemaMigrations({
  migrations: [MIGRATE_HEARTS_TO_VERSION_2],
});
