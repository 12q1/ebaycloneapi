// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  title: string

  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  price: number

  @Column('text',{nullable:false})
  sellerMail: string

  @Column('text',{nullable:false})
  sellerPhone: string
}