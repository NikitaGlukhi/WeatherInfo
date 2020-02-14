import { Global, Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WeatherDataController } from './weather-data.controller';
import { GetWeatherDataService } from './services/get-weather-data.service';
import { WEATHER_DATA_ENTITIES } from './entities';

@Global()
@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([...WEATHER_DATA_ENTITIES])
  ],
  controllers: [ WeatherDataController ],
  providers: [ GetWeatherDataService ]
})

export class WeatherDataModule {  }
