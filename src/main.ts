import { AppBootstrap } from './core/bootstrap/app.bootstrap';

async function bootstrap() {
	const app = new AppBootstrap();
	await app.bootstrap();
}
bootstrap();
