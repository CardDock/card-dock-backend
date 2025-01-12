import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@src/user/user.module';
import { GoogleAuthController } from './infrastructure/controller/google-auth.controller';
import { GoogleStrategy } from './infrastructure/strategy/google.strategy';
import { CreateUserApplicationService } from '@src/user/application/create-user-application.service';
import { CreateUserRepositoryAdapter } from '@src/user/infrastructure/adapters/repository/create-user-repository.adapter';
import { GoogleValidateApplicationService } from './application/service/google-validate-aplication.service';

@Module({
	imports: [PassportModule, UserModule],
	controllers: [GoogleAuthController],
	providers: [
		GoogleStrategy,
		CreateUserApplicationService,
		{ provide: 'UserRepositoryPort', useClass: CreateUserRepositoryAdapter },
		{
			provide: 'GoogleValidatePort',
			useClass: GoogleValidateApplicationService,
		},
	],
	exports: [],
})
export class Oauth2ProviderModule {}
