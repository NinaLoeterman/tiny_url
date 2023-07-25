import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Url extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    shortUrl: string

    @Column()
    longUrl: string
}
