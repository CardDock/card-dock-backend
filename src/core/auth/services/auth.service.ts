import { Injectable } from '@nestjs/common';
import { GoogleAuthService } from './google-auth.service';

@Injectable()
export class AuthService {
	constructor(private googleAuthService: GoogleAuthService) {}

	public async validateUser(
		emailUser: string,
		passwordUser: string,
	): Promise<unknown> {
		// primero mira si el usuario esta en la base de datos
		// compara las credenciales que envia con las que tienes en la base de datos
		// asi te aseguras que es correctamente quien dice ser
		// si todo esta bien, crea un token y lo devuelve
		const existingUser =
			await this.googleAuthService.searchGoogleUser2(emailUser);

		if (!existingUser) {
			return 'User no exist';
		}

		// if (existingUser.password !== passwordUser) {
		// 	return 'Password incorrect';
		// }

		// if (existingUser.password === passwordUser) {
		// 	return 'Token';
		// }
	}
}
