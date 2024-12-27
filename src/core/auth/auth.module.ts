import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './infrastructure/repository/auth.repository';
import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { DataBaseModule } from '../data-base/data-base.module';
import { GoogleAuthController } from './infrastructure/controller/google-auth.controller';
import { GoogleStrategyService } from './infrastructure/strategys/google-strategy.service';
import { SingJwtController } from './infrastructure/controller/sing-jwt.controller';
import { AuthService } from './infrastructure/services/auth.service';
import { JwtKey } from './infrastructure/constants/jwt-key';
import { JwtStrategy } from './infrastructure/strategys/jwt.strategy';
import { EmailFindController } from './infrastructure/controller/emailfind.controller';
import { PassportModule } from '@nestjs/passport/dist';

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
		GoogleStrategyService,
		EmailFindService,
		AuthService,
		JwtStrategy,
	],
	exports: [],
})
export class AuthModule {}
