import { Module, HttpModule } from '@nestjs/common';

import { WeatherDataController } from './weather-data.controller';
import { GetWeatherDataService } from './services/get-weather-data.service';

@Module({
  imports: [ HttpModule ],
  controllers: [ WeatherDataController ],
  providers: [ GetWeatherDataService ]
})

export class WeatherDataModule {  }
