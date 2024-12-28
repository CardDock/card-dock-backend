export interface TokenSignerPort {
	signToken(payload: Record<string, unknown>): string;
}
