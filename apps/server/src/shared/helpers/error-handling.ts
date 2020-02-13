import {
  UnauthorizedException,
  NotFoundException,
  BadRequestException
} from '@nestjs/common';

export function errorHandle(err) {
  const errResponseMessage = err.response.data.message;

  switch (err.response.status) {
    case 401:
      return new UnauthorizedException(errResponseMessage);
    case 404:
      return new NotFoundException(errResponseMessage);
    default:
      return new BadRequestException(errResponseMessage);
  }
}
