import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SingJwtController } from './infrastructure/controllers/sing-jwt.controller';
import { JwtStrategy } from './infrastructure/adapters/strategys/jwt.strategy';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthAplicationService } from './application/services/auth-aplication.service';
import { TokenManagerAdapter } from './infrastructure/adapters/auth.adapter';
import { AuthRepositoryAdapter } from './infrastructure/adapters/repository/auth-repository.adapter';
import { UserModule } from '@src/user/user.module';
import { EnvironmentConfig } from '@src/config/environment.config';

@Module({
	imports: [
		PassportModule,
		UserModule,
		JwtModule.register({
			secret: EnvironmentConfig.getJwtSecret(),
			signOptions: { expiresIn: '60m' },
		}),
	],
	controllers: [SingJwtController],
	providers: [
		{ provide: 'AuthRepositoryPort', useClass: AuthRepositoryAdapter },
		{ provide: 'TokenManagerPort', useClass: TokenManagerAdapter },
		JwtStrategy,
		AuthAplicationService,
	],
	exports: [],
})
export class AuthModule {}
