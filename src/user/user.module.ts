import { Module } from '@nestjs/common';
import { DataBaseModule } from '@src/core/data-base/data-base.module';

@Module({
	imports: [DataBaseModule],
	controllers: [],
	providers: [],
})
export class UserModule {}
