import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Choice } from 'src/app/choice';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () =>
{
	let component: ChoiceComponent;
	let fixture: ComponentFixture<ChoiceComponent>;

	beforeEach(async () =>
	{
		await TestBed.configureTestingModule({
			declarations: [ChoiceComponent],
			imports: [FormsModule]
		})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(ChoiceComponent);
		component = fixture.componentInstance;
		component.choice = new Choice('test');
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	it('should emit choiceDeletionEvent', () =>
	{
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('input[type=button]');

		expect(button).toBeDefined();
		component.choiceDeletionEvent.pipe()
			.subscribe((c: Choice) => expect(c).toBe(component.choice));

		button.dispatchEvent(new Event('click'));
	});

	it('should emit focusOutEvent', () =>
	{
		spyOn(component.focusOutEvent, 'emit');

		fixture.nativeElement.querySelector('input').dispatchEvent(new Event('focusout'));

		expect(component.focusOutEvent.emit).toHaveBeenCalled();
	});
});
