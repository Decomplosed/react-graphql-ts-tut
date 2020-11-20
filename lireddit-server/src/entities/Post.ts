import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType } from 'type-graphql';


@Entity()
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property({ type: 'text' })
  title!: string;
}
