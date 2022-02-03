import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { InputCollectorComponent } from '../components/input-collector/input-collector.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent
	},
	{
		path: 'input',
		component: InputCollectorComponent
	},
	{
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
