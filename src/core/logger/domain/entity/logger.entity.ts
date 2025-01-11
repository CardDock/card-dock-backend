export class LoggerEntity {
	constructor(
		public readonly id: string,
		public readonly message: string,
		public readonly level: string,
		public readonly metadata: unknown,
		public readonly createdAt: Date,
	) {}
}
