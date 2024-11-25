export interface PayloadReturnauthGoogle {
	email: string;
	name: string;
	firstName: string;
	lastName: string;
	picture: string;
	tokens: TokensGoogle;
}

interface TokensGoogle {
	accessToken: string;
	refreshToken: string;
}
