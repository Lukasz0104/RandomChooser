import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Choice } from 'src/app/choice';

import { ControlPanelComponent } from './control-panel.component';

describe('ControlPanelComponent', () =>
{
	let component: ControlPanelComponent;
	let fixture: ComponentFixture<ControlPanelComponent>;

	beforeEach(async () =>
	{
		await TestBed.configureTestingModule({
			declarations: [ControlPanelComponent],
			imports: [FormsModule]
		})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(ControlPanelComponent);
		component = fixture.componentInstance;
		component.choices = new Array<Choice>();
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});
	
	it('should emit clearEvent', () =>
	{
		spyOn(component.clearEvent, 'emit');
		const button: HTMLButtonElement = fixture.nativeElement.querySelector('#clear');
		button.click();

		expect(component.clearEvent.emit).toHaveBeenCalled();
	});

	it('should call draw() after button click', fakeAsync(() =>
	{
		const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#draw')
		spyOn(component, 'draw');

		button.dispatchEvent(new Event('click'));
		tick();

		expect(component.draw).toHaveBeenCalled();
	}));

	it('should pick random', () =>
	{
		component.choices.push(new Choice(), new Choice());
		component.draw();

		expect(component.choices.filter(c => c.chosen)).toHaveSize(1);
	});
});
