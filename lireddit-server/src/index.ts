import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './contstants';
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();
  app.listen(4000, () => {
    console.log('Server started on localhost:4000');
  });
};

main().catch((err) => {
  console.error(err);
});
