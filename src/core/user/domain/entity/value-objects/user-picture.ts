import { StringValueObject } from '@src/shared/domain/value-objects/string-value-object';

export class UserPicture extends StringValueObject {
	private static readonly DEFAULT_PICTURE = 'default.png';

	constructor(picture: string) {
		super(picture);
	}
}
