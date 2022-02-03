import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InputCollectorComponent } from './components/input-collector/input-collector.component';

@NgModule({
	declarations: [
		AppComponent,
		ChoiceComponent,
		DashboardComponent,
		InputCollectorComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
