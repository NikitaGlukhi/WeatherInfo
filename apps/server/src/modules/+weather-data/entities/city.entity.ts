import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { CountryEntity } from './country.entity';
import { WeatherInfoEntity } from './weather-info.entity';

export interface Coords {
  lat: number;
  lon: number;
}

@Entity('cities')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  zipCode: number;

  @Column({ type: 'simple-json', nullable: false })
  coords: Coords;

  @OneToMany(type => WeatherInfoEntity, data => data.city)
  weatherInfo: WeatherInfoEntity;

  @ManyToOne(type => CountryEntity, data => data.city)
  @JoinColumn()
  country: CountryEntity;
}
