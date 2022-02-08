import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DataSharingService } from 'src/app/services/DataSharing/data-sharing.service';

import { InputCollectorComponent } from './input-collector.component';

describe('InputCollectorComponent', () =>
{
	let component: InputCollectorComponent;
	let fixture: ComponentFixture<InputCollectorComponent>;
	let service: DataSharingService;

	beforeEach(async () =>
	{
		await TestBed.configureTestingModule({
			declarations: [InputCollectorComponent],
			providers: [DataSharingService],
			imports: [FormsModule]
		})
			.compileComponents();
	});

	beforeEach(() =>
	{
		fixture = TestBed.createComponent(InputCollectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () =>
	{
		expect(component).toBeTruthy();
	});

	describe('Passing data to DataSharingService', () =>
	{
		const lines = ['ch1','ch2','ch3'];

		it('should remove empty lines', () =>
		{
			component.lines = lines.join('\n');
			service = TestBed.inject(DataSharingService);

			component.proceed();

			expect(service.data).toHaveSize(3);
			
			for (let i = 0; i < lines.length; i++)
			{
				expect(service.data[i]).toBe(lines[i]);
			}
		});
	});
});
