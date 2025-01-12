import { Module } from '@nestjs/common';
import { AuthModule } from '@src/core/auth/auth.module';
import { UserModule } from './user/user.module';
import { Oauth2ProviderModule } from './oauth2-provider/oauth2-provider.module';

@Module({
	imports: [AuthModule, Oauth2ProviderModule, UserModule],
	controllers: [],
	providers: [],
	exports: [],
})
export class AppModule {}
