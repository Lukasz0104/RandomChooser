import { Injectable } from '@angular/core';
import { Choice } from 'src/app/choice';

@Injectable({
	providedIn: 'root'
})
export class RandomizerService
{

	constructor() { }

	getRandom(collection: Array<Choice>, count = 1): Array<Choice>
	{
		const LEN = collection.length;

		let ret = Array.from(Array(LEN).keys()) // generate range [0, 1, ... ,N)
			.sort((_a, _b) => Math.random() - 0.5); // shuffle the range

		return ret.slice(0, count)
			.map(i => collection[i]);
	}
}
