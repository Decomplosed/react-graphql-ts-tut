import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User {}
