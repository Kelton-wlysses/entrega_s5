/*
PK id_uuid
name VARCHAR UNIQUE NOT NULL
*/

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Property } from './properties.entity';

@Entity('categories')
class Category{
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Property, properties => properties.categorie )
  properties: Property[]

}
export { Category }