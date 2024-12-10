import { Module } from '@nestjs/common';
import { GoogleAuthController } from './controllers/google-auth.controller';
import { GoogleStrategyService } from './services/google-strategy.service';
import { GoogleAuthService } from './services/google-auth.service';
import { PrismaService } from '../services/prisma.service';

@Module({
	imports: [],
	controllers: [GoogleAuthController],
	providers: [GoogleStrategyService, GoogleAuthService, PrismaService],
})
export class AuthModule {}
