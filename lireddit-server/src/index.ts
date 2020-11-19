import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './contstants';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init({
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !__prod__,
  });

  orm.em.create(Post, {})
};

main();
