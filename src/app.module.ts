import { Module } from '@nestjs/common';
import { AuthModule } from '@src/core/auth/auth.module';
import { DataBaseModule } from './core/data-base/data-base.module';

@Module({
	imports: [AuthModule, DataBaseModule],
	controllers: [],
	providers: [],
	exports: [],
})
export class AppModule {}
