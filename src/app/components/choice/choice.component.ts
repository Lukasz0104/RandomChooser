import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Choice } from 'src/app/choice';

@Component({
	selector: 'choice',
	templateUrl: './choice.component.html',
	styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit
{
	@Input()
	disableButton = true;

	@Input()
	choice!: Choice;

	@Input()
	showPlaceholder: boolean = true;

	@Output()
	choiceDeletionEvent = new EventEmitter<Choice>();

	@Output()
	focusOutEvent = new EventEmitter<any>();

	constructor() { }

	ngOnInit(): void { }

	handleFocusOut(): void
	{
		this.focusOutEvent.emit();
	}

	emitDeletionEvent(): void
	{
		this.choiceDeletionEvent.emit(this.choice);
	}

	isChosen(): boolean
	{
		return this.choice.chosen;
	}
}
