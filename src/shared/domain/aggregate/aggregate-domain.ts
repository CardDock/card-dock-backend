import { DomainEvent } from '../events/domain.event';

export class AggregateDomain {
	private domainEvents: Array<DomainEvent> = [];

	protected record(event: DomainEvent): void {
		this.domainEvents.push(event);
	}

	public getDomainEvents(): DomainEvent[] {
		return this.domainEvents;
	}

	public clearDomainEvents(): void {
		this.domainEvents = [];
	}
}
