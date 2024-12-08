import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AuthModule } from '@src/core/auth/auth.module';
import { PrismaService } from '@src/core/services/prisma.service';

@Module({
	imports: [AuthModule],
	controllers: [AppController],
	providers: [PrismaService],
	exports: [PrismaService],
})
export class AppModule {}
