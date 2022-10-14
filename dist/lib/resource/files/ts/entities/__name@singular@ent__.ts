import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'
import { ObjectType, Int, ID, GraphQLISODateTime } from '@nestjs/graphql'
import { IDField, FilterableField } from '@nestjs-query/query-graphql'

@Entity()
@ObjectType()
export class <%= singular(classify(name)) %> {
  @IDField(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @FilterableField(() => Int, { description: 'Example field (placeholder)', nullable: true })
  @Column('integer', { nullable: true })
  exampleField1?: number

  @FilterableField()
  @Column()
  exampleField2!: string

  /**
   * NOTE: Please keep all entity-specific fields listed above `createdAt`.
   *
   * And please delete this comment after you read it. It's just a reminder.
   */

  @FilterableField(() => GraphQLISODateTime)
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date

  @FilterableField(() => GraphQLISODateTime)
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date

  @FilterableField(() => GraphQLISODateTime, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt?: Date
}
