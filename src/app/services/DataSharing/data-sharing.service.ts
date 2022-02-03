import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataSharingService
{
	data: string[] = [];

	constructor() { }
}
