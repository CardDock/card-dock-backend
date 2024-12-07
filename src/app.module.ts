import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './core/auth/auth.module';
import { PrismaService } from './core/services/prisma.service';

@Module({
	imports: [AuthModule],
	controllers: [AppController],
	providers: [AppService, PrismaService],
	exports: [PrismaService],
})
export class AppModule {}
