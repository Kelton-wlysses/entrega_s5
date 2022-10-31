import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Schedule } from './schedules_users_properties.entity';


@Entity('users')
class User{
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 60})
  name: string

  @Column({ length: 60, unique: true})
  email: string

  @Column()
  isAdm: boolean

  @Column({ default: true })
  isActive: boolean
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
  
  @Column({ length: 120 })
  @Exclude()
  password: string

  @OneToMany(() => Schedule, schedules => schedules.user )
  schedules: Schedule[]

}

export { User }





