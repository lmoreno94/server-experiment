import { BaseEntity, Generated, PrimaryGeneratedColumn, Entity, Column, Index, CreateDateColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { Posts } from './Post';
@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated("uuid")
    id: string;

    @Column({
        nullable: true
    })
    name!: string;

    @Column({
        nullable: true
    })
    user!: string;

    @Column()
    @Index({ unique: true })
    @IsEmail({}, { message: 'Incorrect email' })
    @IsNotEmpty({ message: 'The email is required' })
    email: string;

    @Column()
    @Length(6, 30, { message: 'The password must be at least 6 but not longer than 30 characters' })
    @IsNotEmpty({ message: 'The password is required' })
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => Posts, post => post.user)
    post: Promise<Posts[]>;
}