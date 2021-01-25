import {Model} from '@nozbe/watermelondb';
import {field, date, readonly} from '@nozbe/watermelondb/decorators';

export default class Heart extends Model {
  static table = 'hearts';

  @field('description') description;
  @field('source') source;
  @field('author_name') author_name;
  @field('author_source') author_source;
  @field('browser_source') browser_source;
  @field('download_source') download_source;
  @readonly @date('hearted_date') hearted_date;
}
