import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		ChoiceComponent,
		DashboardComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
