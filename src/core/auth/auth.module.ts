import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { GoogleAuthController } from './infrastructure/controllers/google-auth.controller';
import { GoogleStrategy } from './infrastructure/strategys/google.strategy';
import { SingJwtController } from './infrastructure/controllers/sing-jwt.controller';
import { JwtKey } from './infrastructure/constants/jwt-key';
import { JwtStrategy } from './infrastructure/strategys/jwt.strategy';
import { EmailFindController } from './infrastructure/controllers/emailfind.controller';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthAplicationService } from './application/services/auth-aplication.service';
import { AuthAdapter } from './infrastructure/adapters/auth.adapter';
import { AuthRepositoryAdapter } from './infrastructure/adapters/repository/auth-repository.adapter';

@Module({
	imports: [
		DataBaseModule,
		PassportModule,
		JwtModule.register({
			secret: JwtKey.secret,
			signOptions: { expiresIn: '60m' },
		}),
	],
	controllers: [GoogleAuthController, SingJwtController, EmailFindController],
	providers: [
		{ provide: 'AuthRepositoryPort', useClass: AuthRepositoryAdapter },
		{ provide: 'TokenSignerPort', useClass: AuthAdapter },
		GoogleStrategy,
		JwtStrategy,
		EmailFindService,
		AuthAplicationService,
	],
	exports: [],
})
export class AuthModule {}
