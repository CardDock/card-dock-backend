import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@src/core/user/user.module';
import { GoogleAuthController } from './infrastructure/controller/google-auth.controller';
import { GoogleStrategy } from './infrastructure/strategy/google.strategy';
import { CreateUserApplicationService } from '@src/core/user/application/create-user-application.service';
import { CreateUserRepositoryAdapter } from '@src/core/user/infrastructure/adapters/repository/create-user-repository.adapter';

@Module({
	imports: [PassportModule, UserModule],
	controllers: [GoogleAuthController],
	providers: [
		GoogleStrategy,
		CreateUserApplicationService,
		{ provide: 'UserRepositoryPort', useClass: CreateUserRepositoryAdapter },
	],
	exports: [],
})
export class Oauth2ProviderModule {}
