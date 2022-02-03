import { Component, Input } from '@angular/core';
import { DataSharingService } from '../../services/DataSharing/data-sharing.service';

@Component({
	selector: 'input-collector',
	templateUrl: './input-collector.component.html',
	styleUrls: ['./input-collector.component.css']
})
export class InputCollectorComponent
{
	@Input()
	separator: string = '\n';

	@Input()
	lines: string = '';

	constructor(private dataSharing: DataSharingService) { }

	proceed(): void
	{
		let lines = this.lines.split(this.separator).filter(v => v !== '');
		this.dataSharing.data = lines;
	}
}
