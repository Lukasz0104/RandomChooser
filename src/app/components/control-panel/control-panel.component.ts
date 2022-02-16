import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice } from 'src/app/choice';
import { RandomizerService } from 'src/app/services/Randomizer/randomizer.service';

@Component({
	selector: 'control-panel',
	templateUrl: './control-panel.component.html',
	styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit
{
	@Input()
	choices!: Array<Choice>;

	@Input()
	count: number = 1;

	@Output()
	clearEvent = new EventEmitter<any>();

	@Output()
	unselectEvent = new EventEmitter<any>();

	constructor(private randomizer: RandomizerService) { }

	ngOnInit(): void { }

	emitClearEvent()
	{
		this.clearEvent.emit();
	}

	draw(): void
	{
		// clear previous
		this.unselectEvent.emit();

		// draw again
		setTimeout(
			() => this.randomizer
				.getRandom(this.choices, this.count)
				.forEach(c => c.chosen = true),
			500);
	}
}
