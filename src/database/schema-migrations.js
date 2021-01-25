import {schemaMigrations} from '@nozbe/watermelondb/Schema/migrations';

import {CreateHeartsTableToVersion03} from './migrations';

export default schemaMigrations({
  migrations: [CreateHeartsTableToVersion03],
});
