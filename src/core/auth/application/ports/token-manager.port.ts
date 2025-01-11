export interface TokenManagerPort {
	signToken(payload: Record<string, unknown>): string;
}
