import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType, Field, Int, String } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field()
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()
  @Property({ type: 'text' })
  title!: string;
}
