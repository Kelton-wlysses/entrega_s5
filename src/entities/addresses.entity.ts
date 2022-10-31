/*
PK id_uuid
district VARCHAR NOT NULL
zipCode VARCHAR NOT NULL
number VARCHAR
city VARCHAR NOT NULL
state VARCHAR NOT NULL
*/

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
class Addresses{
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  district: string

  @Column({ length: 8 })
  zipCode: string

  @Column({ nullable: true })
  number: string

  @Column()
  city: string
  
  @Column({ length: 2 })
  state: string

}
export { Addresses }





