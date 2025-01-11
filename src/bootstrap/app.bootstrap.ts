import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { EnvironmentConfig } from 'src/config/environment.config';
import { HttpsConfigurationService } from 'src/config/https.config';

export class AppBootstrap {
	private readonly logger = new Logger(AppBootstrap.name);

	public async bootstrap() {
		try {
			await this.initApp();
		} catch (error: unknown) {
			this.handlerError(error);
		}
	}

	private async initApp() {
		EnvironmentConfig.load();

		const httpsOptions = HttpsConfigurationService.load();
		const app = await NestFactory.create(AppModule, { httpsOptions });
		const port = EnvironmentConfig.getPort();

		await app.listen(port);

		this.logger.log(`Aplicación ejecutándose en el puerto ${port}`);
	}

	private handlerError(error: unknown): void {
		if (error instanceof Error) {
			this.logger.error(`Error al indicar la aplicacion: ${error.message}`);
			process.exit(1);
		}
		this.logger.error(`Error desconocido: ${error}`);
	}
}
