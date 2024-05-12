import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Storage } from "./Storage";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    firstName: string;

    @Column({
        nullable: true
    })
    lastName: string;

    @Column({
        unique: true
    })
    user: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string

    @Column({
        default: true
    })
    active: boolean;

    @OneToMany(() => Storage, (storage) => storage.user )
    storage: Storage[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}