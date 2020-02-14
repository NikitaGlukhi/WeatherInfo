export interface WeatherInfoModel {
  mail: string;
  description: string;
  icon: string;
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  windDeg: number;
  cloudsAll: number;
  sunrise: number;
  sunset: number;
  temp_min?: number;
  temp_max?: number;
  dt_txt?: string;
}
