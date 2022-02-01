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

	getValue(): String
	{
		return this.choice.value;
	}

	isEmpty(): boolean
	{
		return this.choice.value == "";
	}

	handleFocusOut(): void
	{
		this.focusOutEvent.emit();
	}

	
	emitDeletionEvent(): void
	{
		this.choiceDeletionEvent.emit(this.choice);
	}


}
