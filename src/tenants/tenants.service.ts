import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel(TenantName, 'DBNAMEONE') private TenantModel.....>,
  ) {}
}
