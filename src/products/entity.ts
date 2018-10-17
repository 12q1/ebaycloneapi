// src/products/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, IsNumber, IsEmail, MinLength } from 'class-validator'

@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @IsString()
  @MinLength(5)
  @Column('text', {nullable:false})
  title: string

  @IsString()
  @MinLength(50)
  @Column('text', {nullable:false})
  description: string

  @IsNumber()
  @Column('decimal')
  price?: number

  @IsEmail()
  @Column('text')
  sellerMail?: string

  @IsString()
  @MinLength(8)
  @Column('text')
  sellerPhone?: string
  
  @IsString()
  @Column('text')
  imgUrl: string
}