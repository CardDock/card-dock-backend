import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DataBaseConnectService implements OnModuleInit, OnModuleDestroy {
	private prisma: PrismaClient;

	constructor() {
		this.prisma = new PrismaClient({
			log: ['query', 'info', 'warn', 'error'],
			errorFormat: 'minimal', // Puedes cambiar a 'pretty' para más detalles en desarrollo
		});
	}

	async onModuleInit() {
		await this.prisma.$connect();
	}

	async onModuleDestroy() {
		await this.prisma.$disconnect();
	}
}
