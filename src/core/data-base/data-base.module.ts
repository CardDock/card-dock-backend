import { Global, Module } from '@nestjs/common';
import { DataBaseConnectService } from './infrastructure/services/data-base-connect.service';

@Global()
@Module({
	imports: [],
	controllers: [],
	providers: [DataBaseConnectService],
	exports: [DataBaseConnectService],
})
export class DataBaseModule {}
