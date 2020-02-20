import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { CityEntity } from './city.entity';
import { WeatherFoundType, WeatherInfoModel } from '../../../shared/models';

@Entity('weatherInfo')
export class WeatherInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  foundType: WeatherFoundType;

  @Column({ type: 'simple-json', nullable: false })
  info: WeatherInfoModel | WeatherInfoModel[];

  @ManyToOne(type => CityEntity, data => data.weatherInfo)
  @JoinColumn()
  city: CityEntity;
}
