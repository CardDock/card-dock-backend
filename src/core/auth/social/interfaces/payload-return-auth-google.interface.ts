export interface PayloadReturnauthGoogle {
	email: string;
	name: string;
	firstName: string;
	lastName: string;
	picture: string;
	tokens: TokensGoogle;
}

export interface getLoginGoogle {
	msg: string;
}

interface TokensGoogle {
	accessToken: string;
	refreshToken: string;
}
