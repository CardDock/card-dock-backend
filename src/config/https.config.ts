import * as fs from 'fs';
import * as path from 'path';

export interface HttpsConfiguration {
	key: Buffer;
	cert: Buffer;
}

export class HttpsConfigurationService {
	private static readonly CERTIFICATES_PATH = path.join(
		__dirname,
		'../../certificates',
	);

	public static load(): HttpsConfiguration {
		const keyPath = path.join(__dirname, this.CERTIFICATES_PATH, 'key.pem');
		const certPath = path.join(__dirname, this.CERTIFICATES_PATH, 'cert.pem');

		this.validateCertificates(keyPath, certPath);

		return {
			key: fs.readFileSync(keyPath),
			cert: fs.readFileSync(certPath),
		};
	}

	private static validateCertificates(keyPath, certPath): void {
		if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
			throw new Error('Certificados SSL no encontrados');
		}
	}
}
