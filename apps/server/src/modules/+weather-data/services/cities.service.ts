import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CityEntity } from '../entities/city.entity';
import { CountryEntity } from '../entities/country.entity';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(CityEntity) private readonly cityEntity: Repository<CityEntity>,
    @InjectRepository(CountryEntity) private readonly countryEntity: Repository<CountryEntity>
  ) {}

  async getCity(cityName: string): Promise<void | CityEntity> {
    return this.cityEntity.findOne({
      where: { name: cityName }
    })
      .then(res => {
        if (!res) {

        }
        return res;
      })
      .catch(err => {})
  }

  private addNewcity(cityName: string) {}

}
