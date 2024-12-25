import { GoogleStrategy } from '../entitys/google-strategy.entity';

export interface GoogleStrategyRepositoryPort {
	create: (strategy: GoogleStrategy) => Promise<unknown>;
}
