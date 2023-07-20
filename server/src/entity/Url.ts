import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Url {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    shortUrl: string

    @Column()
    longUrl: string
}
