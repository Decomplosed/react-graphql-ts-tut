import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string
}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register(
    @Arg()
  ) {}
}
