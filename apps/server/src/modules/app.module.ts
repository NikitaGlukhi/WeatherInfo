import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MODULES } from './index';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ...MODULES
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
