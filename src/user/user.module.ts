import { Module } from '@nestjs/common';
import { CreateUserApplicationService } from './application/create-user-application.service';
import { CreateUserRepositoryAdapter } from './infrastructure/adapters/repository/create-user-repository.adapter';
import { DataBaseModule } from '@src/core/data-base/data-base.module';

@Module({
	imports: [DataBaseModule],
	controllers: [],
	providers: [
		{ provide: 'UserRepositoryPort', useClass: CreateUserRepositoryAdapter },
		CreateUserApplicationService,
		CreateUserRepositoryAdapter,
	],
})
export class UserModule {}
