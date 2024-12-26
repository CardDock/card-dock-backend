import { Module } from '@nestjs/common';
import { AuthRepository } from './infrastructure/repository/auth.repository';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { GoogleAuthController } from './infrastructure/controller/google-auth.controller';
import { GoogleStrategyService } from './infrastructure/strategys/google-strategy.service';

@Module({
	imports: [DataBaseModule],
	controllers: [GoogleAuthController],
	providers: [
		GoogleStrategyService,
		EmailFindService,
		AuthRepository,
		{ provide: 'AuthRepositoryPort', useClass: AuthRepository },
	],
	exports: [EmailFindService],
})
export class AuthModule {}
