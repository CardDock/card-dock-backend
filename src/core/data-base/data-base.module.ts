import { Module } from '@nestjs/common';
import { DataBaseConnectService } from './services/data-base-connect.service';

@Module({
	imports: [],
	controllers: [],
	providers: [DataBaseConnectService],
	exports: [DataBaseConnectService],
})
export class DataBaseModule {}
