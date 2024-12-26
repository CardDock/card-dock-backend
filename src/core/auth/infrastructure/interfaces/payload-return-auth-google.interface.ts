export interface PayloadReturnauthGoogle {
	email: string;
	name: string;
	firstName: string;
	lastName: string;
	picture: string;
	accessToken: string;
}

export interface getLoginGoogle {
	statusCode: number;
	message: {
		user_auth_google: string;
	};
}
