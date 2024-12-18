import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { EnvironmentConfig } from 'src/config/environment.config';
import { HttpsConfigurationService } from 'src/config/https.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

		this.docSwagger(app);

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

	private docSwagger(app: INestApplication): void {
		const options = new DocumentBuilder()
			.setTitle('API')
			.setDescription('API de ejemplo')
			.setVersion('1.0')
			.build();

		const document = SwaggerModule.createDocument(app, options);
		SwaggerModule.setup('api', app, document);
	}
}
