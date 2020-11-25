import { MyContext } from 'src/types';
import { Resolver, Query, Mutation, Arg, InputType, Field, Ctx } from 'type-graphql';

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
  register(@Arg('options') options: UsernamePasswordInput) {}
}
