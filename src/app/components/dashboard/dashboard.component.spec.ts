import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Choice } from 'src/app/choice';
import { DataSharingService } from 'src/app/services/DataSharing/data-sharing.service';
import { ChoiceComponent } from '../choice/choice.component';
import { ControlPanelComponent } from '../control-panel/control-panel.component';

import { DashboardComponent } from './dashboard.component';

// class MockDataSharingService
// {
// 	data: string[] = [''];
// }

describe('DashboardComponent', () =>
{
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;
	let service: DataSharingService;

	const createChoices = (n = 5) => {
		for (let i = 0; i < n; i++)
			component.choices.push(new Choice(`ch${i}`));
	}

	beforeEach(async () =>
	{
		await TestBed.configureTestingModule({
			declarations: [DashboardComponent, ChoiceComponent, ControlPanelComponent],
			providers: [DataSharingService],
			imports: [FormsModule]
		})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.componentInstance;
		// fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	it('should create two empty choices', () =>
	{
		fixture.detectChanges();

		expect(component.choices).toHaveSize(2);

		component.choices.forEach((c: Choice) => expect(c.value).toBe(''));
	});

	describe('should read data from shared service', () =>
	{
		it('should insert two empty choices when shared service is empty', () => {
			component.ngOnInit();

			expect(component.choices).toHaveSize(2);
			for (let i = 0; i < 2; i++)
			{
				expect(component.choices[i].value).toBe('');
			}

		});

		it('should read one choice and insert one empty choice', () =>
		{
			service = TestBed.inject(DataSharingService);
			
			service.data = ['choice1'];
			component.ngOnInit();
			fixture.detectChanges();

			expect(component.choices).toHaveSize(2);
			expect(component.choices[0].value).toBe('choice1');
			expect(component.choices[1].value).toBe('');
			expect(service.data).toHaveSize(0);
		});
		
		it('should read two choices and insert one empty choice', () =>
		{
			const data = ['choice1', 'choice2'];
			service = TestBed.inject(DataSharingService);

			service.data = data;
			fixture.detectChanges();

			expect(component.choices).toHaveSize(3);

			expect(component.choices[0].value).toBe('choice1');
			expect(component.choices[1].value).toBe('choice2');
			expect(component.choices[2].value).toBe('');
		});
	});

	it('should remove selection', () =>
	{
		createChoices();
		component.choices.forEach(c => c.chosen = true);

		component.removeSelection();

		component.choices.forEach(c => expect(c.chosen).toBeFalse());
	});

	it('should move empty choices to the end', () =>
	{
		createChoices(3);
		component.choices[0].value = '';
		component.choices[1].value = '';

		component.manageChoices();
		expect(component.choices).toHaveSize(2);
		expect(component.choices[0].value).toBe('ch2');
		expect(component.choices[1].value).toBe('');
	});

	describe('should manage choices', () =>
	{
		it('should remove spare choices', () =>
		{
			const choices = [new Choice(), new Choice('ch1'), new Choice()];
			choices.forEach(ch => component.choices.push(ch));

			component.manageChoices();
			
			expect(component.choices).toHaveSize(2);
			
			expect(component.choices[0].value).toBe('ch1');
			expect(component.choices[1].value).toBe('');
		});
		
		it('should remove empty choices', () =>
		{
			const choices = [new Choice(), new Choice('ch1'), new Choice('ch2'), new Choice()];
			choices.forEach(ch => component.choices.push(ch));

			component.manageChoices();
			
			expect(component.choices).toHaveSize(3);
			
			expect(component.choices[0].value).toBe('ch1');
			expect(component.choices[1].value).toBe('ch2');
			expect(component.choices[2].value).toBe('');
		});

		it('should clear choices', () =>
		{
			for (let i = 0; i < 5; i++)
			{
				component.choices.push(new Choice(`ch${i}`));
			}

			component.clearChoices();
			
			expect(component.choices).toHaveSize(2);
			for (let ch of component.choices)
			{
				expect(ch.value).toBe('');
			}
		});

		it('should delete choices', () =>
		{
			let choices: Choice[] = [];
			for (let i = 0; i < 5; i++)
			{
				choices.push(new Choice(`ch${i}`));
			}
			choices.forEach(c => component.choices.push(c));

			component.deleteChoice(choices[2]);

			expect(component.choices).toHaveSize(5);
			expect(component.choices[2]).toBe(choices[3]);
		});

		it('should not change array if called with non-existent choice', () =>
		{
			createChoices(5);
			component.manageChoices();

			expect(component.choices).toHaveSize(6);

			component.deleteChoice(new Choice('i should not be deleted'));

			expect(component.choices).toHaveSize(6);
		});
	});
});
