import { Global, Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WeatherDataController } from './weather-data.controller';
import { WEATHER_DATA_ENTITIES } from './entities';
import { WEATHER_DATA_SERVICES } from './services';

@Global()
@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([...WEATHER_DATA_ENTITIES])
  ],
  controllers: [ WeatherDataController ],
  providers: [ ...WEATHER_DATA_SERVICES ]
})

export class WeatherDataModule {  }
