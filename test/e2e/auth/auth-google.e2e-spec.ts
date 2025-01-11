import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '@nestjs/passport';
import { INestApplication } from '@nestjs/common';
import { GoogleAuthController } from '@src/core/auth/controllers/google-auth.controller';

describe('GoogleAuthController', () => {
	let app: INestApplication;
	let googleAuthController: GoogleAuthController;

	beforeEach(async () => {
		const testingModule: TestingModule = await createTestingModule();

		app = testingModule.createNestApplication();
		await app.init();

		googleAuthController =
			testingModule.get<GoogleAuthController>(GoogleAuthController);
	});

	afterEach(async () => {
		await app.close();
	});

	it('debería redirigir al usuario al login de Google', async () => {
		const respuestaEsperada = {
			statusCode: 307,
			message: {
				user_auth_google: 'redirecting',
			},
		};

		const response = await googleAuthController.googleLogin();
		expect(response).toEqual(respuestaEsperada);
	});

	it('debería manejar correctamente el redirect de Google', async () => {
		const respuestaEsperada = {
			statusCode: 200,
			message: {
				user_auth_google: 'ok',
			},
		};

		const response = await googleAuthController.googleLoginRedirect();
		expect(response).toEqual(respuestaEsperada);
	});
});

async function createTestingModule(): Promise<TestingModule> {
	return await Test.createTestingModule({
		controllers: [GoogleAuthController],
	})
		.overrideGuard(AuthGuard('google'))
		.useValue({
			canActivate: jest.fn(() => true),
		})
		.compile();
}
