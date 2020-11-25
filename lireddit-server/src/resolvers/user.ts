import { MyContext } from 'src/types';
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  InputType,
  Field,
  Ctx,
} from 'type-graphql';
import { User } from '../entities/User';
import argon2 from 'argon2';

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async register(
    @Arg('options') options: UsernamePasswordInput,
    @Ctx() { em }: MyContext,
  ) {
    const hashedPassword = argon2.hash(options.password);
    const user = em.create(User, { username: options.username });
    await em.persistAndFlush(user);
  }
}
