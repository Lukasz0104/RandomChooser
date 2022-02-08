import { TestBed } from '@angular/core/testing';
import { Choice } from 'src/app/choice';

import { RandomizerService } from './randomizer.service';

describe('RandomizerService', () =>
{
	let service: RandomizerService;
	let choices: Array<Choice> = new Array<Choice>();

	beforeEach(() =>
	{
		TestBed.configureTestingModule({});
		service = TestBed.inject(RandomizerService);

		for (let i = 0; i < 10; i++)
		{
			choices.push(new Choice(`choice-${i + 1}`));
		}
	});

	it('should be created', () =>
	{
		expect(service).toBeTruthy();
	});

	it('should return one element when called with one parameter', () =>
	{
		let res = service.getRandom(choices)
		expect(res).toHaveSize(1);
	});

	it('should return different subsets', () =>
	{
		let ret = service.getRandom(choices, 3);
		expect(ret).not.toEqual(service.getRandom(choices, 3));
	});
});
