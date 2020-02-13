import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WeatherDataModule } from './modules/+weather-data/weather-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    WeatherDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
