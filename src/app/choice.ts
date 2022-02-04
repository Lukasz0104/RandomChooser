export class Choice 
{
	constructor(val: string = '')
	{
		this.value = val;
	}

	value: string;
	chosen: boolean = false;
}