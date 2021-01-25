import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
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
});
