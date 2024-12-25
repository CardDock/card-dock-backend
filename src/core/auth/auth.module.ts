import { Module } from '@nestjs/common';
import { GoogleStrategyService } from './services/google-strategy.service';
import { GoogleAuthService } from './services/google-auth.service';
import { AuthService } from './services/auth.service';
import { EmailFindController } from './infrastructure/controller/emailfind.controller';
import { AuthRepository } from './infrastructure/repository/auth.repository';
import { EmailFindService } from './application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
	imports: [DataBaseModule],
	controllers: [EmailFindController],
	providers: [
		GoogleStrategyService,
		GoogleAuthService,
		AuthService,
		EmailFindService,
		{ provide: 'AuthRepositoryPort', useClass: AuthRepository },
	],
	exports: [EmailFindService],
})
export class AuthModule {}
