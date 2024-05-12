import { BaseEntity, Generated, PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, Length } from 'class-validator';
import { Users } from './User';

@Entity()
export class Posts extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated("uuid")
    id: string;
    
    @Column()
    @Length(6, 200, { message: 'The title must be at least 6 but not longer than 200 characters' })
    @IsNotEmpty({ message: 'The title is required' })
    title: string;

    @Column()
    @Length(6, 500, { message: 'The body must be at least 6 but not longer than 500 characters' })
    @IsNotEmpty({ message: 'The body is required' })
    body: string;
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    
    @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => Users, user => user.post, { onDelete: 'SET NULL', nullable: true })
    @JoinColumn({ name: 'autor_id' })
    user: Promise<Users>;
}