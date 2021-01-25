import {Database} from '@nozbe/watermelondb';

import {Heart} from './classes';

import adapter from './sqlite-adapter';

export default new Database({
  adapter,
  actionsEnabled: true,
  modelClasses: [Heart],
});
