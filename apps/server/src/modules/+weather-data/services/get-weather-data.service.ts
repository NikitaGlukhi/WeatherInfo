import {
  Injectable,
  HttpService,
  UnauthorizedException,
  NotFoundException,
  BadRequestException
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

import { HttpRequestModel, Units } from '../../../shared/models';

@Injectable()
export class GetWeatherDataService {

  constructor(
    private readonly http: HttpService
  ) {}

  async getCurrentWeatherDataByCityName(cityName: string) {
    const params = {
      q: cityName,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: Units.METRIC
    };

    return await this.createHttpRequest({
      url: process.env.CURRENT_WEATHER_URL,
      method: 'get',
      config: { params }
    }).toPromise();
  }

  async getForecastWeatherDataByCityName(cityName: string) {
    const params = {
      q: cityName,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: Units.METRIC
    };

    return await this.createHttpRequest({
      url: process.env.FORECAST_WEATHER_URL,
      method: 'get',
      config: { params }
    }).toPromise()
  }

  async getCurrentWeatherDataByCoordinates(latitude: number, longitude: number) {
    const params = {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: Units.METRIC
    };

    return await this.createHttpRequest({
      url: process.env.CURRENT_WEATHER_URL,
      method: 'get',
      config: { params }
    }).toPromise()
  }

  async getForecastWeatherDataByCoordinates(latitude: number, longitude: number) {
    const params = {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPENWEATHERMAP_API_KEY,
      units: Units.METRIC
    };

    return await this.createHttpRequest({
      url: process.env.FORECAST_WEATHER_URL,
      method: 'get',
      config: { params }
    }).toPromise();
  }

  private createHttpRequest(request: HttpRequestModel): Observable<AxiosResponse> {
    const { url, method, config } = request;
    return this.http[method](url, config);
  }
}
