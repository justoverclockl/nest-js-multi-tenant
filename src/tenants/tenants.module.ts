import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantsService } from './tenants.service';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {
          name: 'NameOfTheTenant',
          schema: TenantSchema, // here we can call the schema?
        },
      ],
      'DBNAMEONE',
    ), // here we can call the right database
  ],
  controllers: [],
  providers: [TenantsService],
})
export class TenantsModule {}
