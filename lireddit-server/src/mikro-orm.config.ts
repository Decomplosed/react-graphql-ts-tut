import { Post } from './entities/Post';
import { __prod__ } from './contstants';

export default {
  entities: [Post],
  dbName: 'lireddit',
  type: 'postgresql',
  debug: !__prod__,
};
