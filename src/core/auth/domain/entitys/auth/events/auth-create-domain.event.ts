import { DomainEvent } from '@src/shared/domain/events/domain.event';
import { AuthEntity } from '../auth.entity';

export class AuthCreateDomainEvent extends DomainEvent {
	constructor(public readonly authEntity: AuthEntity) {
		super();
	}
}
