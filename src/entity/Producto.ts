import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  cedula: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @Column('date')
  fechaNacimiento: Date;

  @Column({
    type: 'enum',
    enum: ['M', 'G', 'I'],
  })
  genero: 'M' | 'G' | 'I';

  @Column()
  estado: boolean;
}