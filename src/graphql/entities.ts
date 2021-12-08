import { Field, ObjectType } from 'type-graphql'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ValueTransformer,
} from 'typeorm'

const transformer: Record<'date' | 'bigint', ValueTransformer> = {
  date: {
    from: (date: string | null) => date && new Date(parseInt(date, 10)),
    to: (date?: Date) => date?.valueOf().toString(),
  },
  bigint: {
    from: (bigInt: string | null) => bigInt && parseInt(bigInt, 10),
    to: (bigInt?: number) => bigInt?.toString(),
  },
}

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'varchar', nullable: true })
  name!: string | null

  @Column({ type: 'varchar', nullable: true, unique: true })
  email!: string | null

  @Column({ type: 'varchar', nullable: true, transformer: transformer.date })
  emailVerified!: string | null

  @Column({ type: 'varchar', nullable: true })
  image!: string | null

  @OneToMany(() => Review, (review) => review.creator)
  reviews?: Review[]

  @OneToMany(() => Business, (business) => business.reviews)
  businesses?: Business[]

  @OneToMany(() => SessionEntity, (session) => session.userId)
  sessions!: SessionEntity[]

  @OneToMany(() => AccountEntity, (account) => account.userId)
  accounts!: AccountEntity[]
}

@Entity({ name: 'accounts' })
export class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ type: 'uuid' })
  userId!: string

  @Column()
  type!: string

  @Column()
  provider!: string

  @Column()
  providerAccountId!: string

  @Column({ type: 'varchar', nullable: true })
  refresh_token!: string

  @Column({ type: 'varchar', nullable: true })
  access_token!: string | null

  @Column({
    nullable: true,
    type: 'bigint',
    transformer: transformer.bigint,
  })
  expires_at!: number | null

  @Column({ type: 'varchar', nullable: true })
  token_type!: string | null

  @Column({ type: 'varchar', nullable: true })
  scope!: string | null

  @Column({ type: 'varchar', nullable: true })
  id_token!: string | null

  @Column({ type: 'varchar', nullable: true })
  session_state!: string | null

  @Column({ type: 'varchar', nullable: true })
  oauth_token_secret!: string | null

  @Column({ type: 'varchar', nullable: true })
  oauth_token!: string | null

  @ManyToOne(() => UserEntity, (user) => user.accounts, {
    createForeignKeyConstraints: true,
  })
  user!: UserEntity
}

@Entity({ name: 'sessions' })
export class SessionEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ unique: true })
  sessionToken!: string

  @Column({ type: 'uuid' })
  userId!: string

  @Column({ transformer: transformer.date })
  expires!: string

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user!: UserEntity
}

@Entity({ name: 'verification_tokens' })
export class VerificationTokenEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  token!: string

  @Column()
  identifier!: string

  @Column({ transformer: transformer.date })
  expires!: string
}

@ObjectType()
@Entity()
export class Business extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date

  @Field(() => String)
  @Column()
  name!: string

  @Field(() => String)
  @Column()
  location!: string

  @Field(() => String)
  @Column()
  about!: string

  @Field(() => Number)
  @Column()
  rating!: string

  @OneToMany(() => Review, (review) => review.business)
  reviews!: Review[]

  @ManyToOne(() => UserEntity, (user) => user.businesses)
  owner!: UserEntity
}

@ObjectType()
@Entity()
export class Review extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Field()
  @Column()
  text!: string

  @Field()
  @Column({ type: 'int', default: 0 })
  rating!: number

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt!: Date

  @Field()
  @Column()
  creatorId!: number

  @Field()
  @ManyToOne(() => UserEntity, (user) => user.reviews)
  creator!: UserEntity

  @Field()
  @ManyToOne(() => Business, (business) => business.reviews)
  business!: Business
}
