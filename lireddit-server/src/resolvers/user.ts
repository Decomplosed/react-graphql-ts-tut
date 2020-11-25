import { Resolver, Query, Mutation, Arg, InputType, Field } from 'type-graphql';


@Resolver()
export class UserResolver {
  @Mutation(() => String)
  register(
    @Arg()
  ) {}
}
