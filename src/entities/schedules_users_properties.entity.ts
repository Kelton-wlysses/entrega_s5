/*
PK id_uuid
date DATE NOT NULL
hour TIME NOT NULL
FK propertyId UUID NOT NULL
FK userId UUID NOT NULL
*/

import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { Property } from './properties.entity';
import { User } from './user.entity';

@Entity('schedules')
class Schedule{
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn({ type: 'date' })
  date: string
  
  @CreateDateColumn({ type: 'time' })
  hour: string

  @ManyToOne(() => User, { eager: true })
  user: User

  @ManyToOne(() => Property)
  property: Property

}
export { Schedule }
