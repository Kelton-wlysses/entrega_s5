/*
PK id_uuid
sold BOOLEAN DEFAULT false
value DECIMAL(12,2) NOT NULL
size INTEGER NOT NULL
createdAt DATE NOT NULL
updatedAt DATE NOT NULL
FK addressId UUID UNIQUE NOT NULL
FK categoryId UUID
*/

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Addresses } from './addresses.entity';
import { Category } from './categories.entity';
import { Schedule } from './schedules_users_properties.entity';

@Entity('properties')
class Property{
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ default: false })
  sold: boolean

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  value: number

  @Column({ type: 'integer' })
  size: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => Schedule, schedules => schedules.property )
  schedules: Schedule[]

  @OneToOne(() => Addresses, { eager: true }) @JoinColumn()
  addresses: Addresses

  @ManyToOne(() => Category)
  categorie: Category

}
export { Property }