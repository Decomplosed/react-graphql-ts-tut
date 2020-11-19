import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './contstants';
import { Post } from './entities/Post';

const main = async () => {
  const orm = await MikroORM.init({

  });

  const post = orm.em.create(Post, { title: 'my first post' });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
