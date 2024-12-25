import { DomainEvent } from '../events/domain.event';

export class AggregateDomain {
	private domainEvents: Array<DomainEvent> = [];

	record(eventDomain: DomainEvent): void {
		this.domainEvents.push(eventDomain);
	}
}
