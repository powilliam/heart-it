import {tableSchema} from '@nozbe/watermelondb';
import {addColumns} from '@nozbe/watermelondb/Schema/migrations';

export default tableSchema({
  name: 'hearts',
  columns: [
    {name: 'description', type: 'string'},
    {name: 'source', type: 'string'},
    {name: 'author_name', type: 'string'},
    {name: 'author_source', type: 'string'},
    {name: 'hearted_date', type: 'number'},
    {name: 'browser_source', type: 'string'},
  ],
});

export const MIGRATE_HEARTS_TO_VERSION_2 = {
  toVersion: 2,
  steps: [
    addColumns({
      table: 'hearts',
      columns: [{name: 'browser_source', type: 'string'}],
    }),
  ],
};
