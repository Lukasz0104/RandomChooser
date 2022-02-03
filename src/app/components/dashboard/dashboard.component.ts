import { Component, OnInit } from '@angular/core';
import { Choice } from 'src/app/choice';
import { DataSharingService } from '../../services/DataSharing/data-sharing.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
	choices: Array<Choice> = new Array<Choice>();

	constructor(private dataSharing: DataSharingService) { }

	ngOnInit(): void
	{
		if (this.dataSharing.data.length < 2)
		{
			for (let line of this.dataSharing.data)
				this.choices.push(new Choice(line));

			while (this.choices.length < 2)
				this.choices.push(new Choice());
		}
		else
		{
			for (let line of this.dataSharing.data)
				this.choices.push(new Choice(line));

			this.choices.push(new Choice());
		}
		this.dataSharing.data = [];
	}

	countNotEmpty(): number
	{
		return this.choices.filter(c => c.value !== '').length;
	}

	deleteChoice(ch: Choice): void
	{
		const index = this.choices.indexOf(ch);
		if (index > -1)
		{
			this.choices.splice(index, 1);
		}
		this.manageChoices();
	}

	manageChoices(): void
	{
		const countFilled = this.countNotEmpty();

		if (countFilled < 2)
		{
			let removedCount = 0;

			for (let i = 0; this.choices.length > 2 && removedCount < 2 - countFilled; i++)
			{
				if (this.choices[i].value === '')
				{
					this.choices.splice(i, 1);
					removedCount++;
				}
			}
		}
		else
		{
			for (let i = this.choices.length; i-- > 0;)
			{
				if (this.choices[i].value === '')
				{
					this.choices.splice(i, 1);
				}
			}
			this.choices.push(new Choice());
		}
	}
}
