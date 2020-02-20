import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { CityEntity } from './city.entity';

@Entity('countries')
export class CountryEntity {
  @PrimaryColumn({ type: 'varchar', length: 2, nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(type => CityEntity, data => data.country)
  city: CityEntity;
}
