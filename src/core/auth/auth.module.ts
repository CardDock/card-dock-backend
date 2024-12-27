import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './infrastructure/repository/auth.repository';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { GoogleAuthController } from './infrastructure/controller/google-auth.controller';
import { GoogleStrategyService } from './infrastructure/strategys/google-strategy.service';
import { AuthService } from './infrastructure/services/auth.service';

@Module({
	imports: [
		DataBaseModule,
		JwtModule.register({
			secret: '1234567890',
			signOptions: { expiresIn: '60m' },
		}),
	],
	providers: [
		{ provide: 'AuthRepositoryPort', useClass: AuthRepository },
		GoogleStrategyService,
		EmailFindService,
		AuthService,
	],
	exports: [],
})
export class AuthModule {}
