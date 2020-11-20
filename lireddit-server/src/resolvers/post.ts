import { Query, Resolver } from 'type-graphql';

@Resolver()
export class PostResolver {
  @Query(() => String)
  posts() {}
}
