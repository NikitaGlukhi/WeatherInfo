import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { CityEntity } from './city.entity';
import { WeatherFoundType, WeatherInfoModel } from '../../../shared/models';

@Entity('currentWeatherInfo')
export class WeatherInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128, nullable: false })
  foundType: WeatherFoundType;

  @Column({ type: 'simple-json', nullable: false })
  info: WeatherInfoModel | WeatherInfoModel[];

  @ManyToOne(type => CityEntity, data => data.currentWeatherInfo)
  @JoinColumn()
  city: CityEntity;
}
