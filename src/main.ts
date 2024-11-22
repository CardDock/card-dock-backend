/* eslint-disable no-console */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
	dotenv.config();

	const keyPath = path.join(__dirname, '../../certificates/key.pem');
	const certPath = path.join(__dirname, '../../certificates/cert.pem');

	if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    console.error('Error: No se encontraron los archivos de certificado.');
    process.exit(1);
  }

	const httpsOptions = {
		key: fs.readFileSync(keyPath),
		cert: fs.readFileSync(certPath),
	};

	const app = await NestFactory.create(AppModule, { httpsOptions });

	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
