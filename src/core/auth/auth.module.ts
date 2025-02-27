import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { EmailFindService } from 'src/core/auth/application/services/email-find.service';
import { GoogleAuthController } from '../../oauth2-provider/infrastructure/controller/google-auth.controller';
import { SingJwtController } from './infrastructure/controllers/sing-jwt.controller';
import { JwtKey } from './infrastructure/constants/jwt-key';
import { JwtStrategy } from './infrastructure/adapters/strategys/jwt.strategy';
import { EmailFindController } from './infrastructure/controllers/emailfind.controller';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthAplicationService } from './application/services/auth-aplication.service';
import { TokenManagerAdapter } from './infrastructure/adapters/auth.adapter';
import { AuthRepositoryAdapter } from './infrastructure/adapters/repository/auth-repository.adapter';
import { UserModule } from '../user/user.module';

@Module({
	imports: [
		PassportModule,
		UserModule,
		JwtModule.register({
			secret: JwtKey.secret,
			signOptions: { expiresIn: '60m' },
		}),
	],
	controllers: [GoogleAuthController, SingJwtController, EmailFindController],
	providers: [
		{ provide: 'AuthRepositoryPort', useClass: AuthRepositoryAdapter },
		{ provide: 'TokenManagerPort', useClass: TokenManagerAdapter },
		JwtStrategy,
		AuthAplicationService,
	],
	exports: [],
})
export class AuthModule {}
