import { LoggerEntity } from '../entity/logger.entity';

export interface LoggerRepositoryPort {
	save(trade: LoggerEntity): Promise<void>;
}
