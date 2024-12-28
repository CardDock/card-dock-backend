import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './infrastructure/repository/auth.repository';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { GoogleAuthController } from './infrastructure/adapters/google-auth.controller';
import { GoogleStrategy } from './infrastructure/strategys/google.strategy';
import { SingJwtController } from './infrastructure/adapters/sing-jwt.controller';
import { AuthService } from './infrastructure/services/auth.service';
import { JwtKey } from './infrastructure/constants/jwt-key';
import { JwtStrategy } from './infrastructure/strategys/jwt.strategy';
import { EmailFindController } from './infrastructure/adapters/emailfind.controller';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthAplicationService } from './application/services/auth-aplication.service';

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
		{ provide: 'AuthRepositoryPort', useClass: AuthRepository },
		{ provide: 'TokenSignerPort', useClass: AuthService },
		GoogleStrategy,
		EmailFindService,
		AuthService,
		JwtStrategy,
		AuthAplicationService,
	],
	exports: [],
})
export class AuthModule {}
