import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCollectorComponent } from './input-collector.component';

describe('InputCollectorComponent', () =>
{
	let component: InputCollectorComponent;
	let fixture: ComponentFixture<InputCollectorComponent>;

	beforeEach(async () =>
	{
		await TestBed.configureTestingModule({
			declarations: [InputCollectorComponent]
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
});
