import {createTable} from '@nozbe/watermelondb/Schema/migrations';

export default {
  toVersion: 3,
  steps: [
    createTable({
      name: 'hearts',
      columns: [
        {name: 'description', type: 'string'},
        {name: 'source', type: 'string'},
        {name: 'author_name', type: 'string'},
        {name: 'author_source', type: 'string'},
        {name: 'hearted_date', type: 'string'},
        {name: 'browser_source', type: 'string'},
        {name: 'download_source', type: 'string'},
      ],
    }),
  ],
};
