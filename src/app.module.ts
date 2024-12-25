import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AuthModule } from '@src/core/auth/auth.module';
import { DataBaseModule } from './core/data-base/data-base.module';

@Module({
	imports: [AuthModule, DataBaseModule],
	controllers: [AppController],
	providers: [],
	exports: [],
})
export class AppModule {}
