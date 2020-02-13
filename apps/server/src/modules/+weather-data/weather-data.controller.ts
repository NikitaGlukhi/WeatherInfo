import {
  Controller,
  Param,
  Get,
  UseFilters,
} from '@nestjs/common';

import { GetWeatherDataService } from './services/get-weather-data.service';

import { errorHandle } from '../../shared/helpers';
import { HttpExceptionFilter } from '../../shared/exception-filters';

@Controller('api/weather')
@UseFilters(new HttpExceptionFilter())
export class WeatherDataController {
  constructor(
    private readonly weatherService: GetWeatherDataService
  ) {}

  @Get('city/current/:city')
  async getCurrentWeatherDataByCityName(
    @Param('city') cityName: string
  ) {
    try {
      return (await this.weatherService.getCurrentWeatherDataByCityName(cityName)).data;
    } catch (err) {
      return errorHandle(err);
    }
  }

  @Get('city/forecast/:city')
  async getForecastWeatherByCityName(
    @Param('city') cityName
  ) {
    try {
      return (await this.weatherService.getForecastWeatherDataByCityName(cityName)).data;
    } catch (err) {
      return errorHandle(err);
    }
  }

  @Get('coords/current/:lat/:lon')
  async getCurrentWeatherDataByCoordinates(
    @Param('lat') lat: number,
    @Param('lon') lon: number
  ) {
    try {
      return (await this.weatherService.getCurrentWeatherDataByCoordinates(lat, lon)).data;
    } catch (err) {
      return errorHandle(err);
    }
  }

  @Get('coords/forecast/:lat/:lon')
  async getForecastWeatherByCoordinates(
    @Param('lat') lat: number,
    @Param('lon') lon: number
  ) {
    try {
      return (await this.weatherService.getForecastWeatherDataByCoordinates(lat, lon)).data;
    } catch (err) {
      return errorHandle(err);
    }
  }
}
