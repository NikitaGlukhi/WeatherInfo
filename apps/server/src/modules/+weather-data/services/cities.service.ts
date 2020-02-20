import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CityEntity } from '../entities/city.entity';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(CityEntity) private readonly cityEntity: Repository<CityEntity>
  ) {}

}
