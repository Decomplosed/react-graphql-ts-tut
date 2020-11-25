import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';

@InputType()
class UsernamePasswordInput {

}

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register(
    @Arg()
  ) {}
}
