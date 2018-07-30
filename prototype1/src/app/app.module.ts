import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
	{ path: 'about', component: AboutComponent},
	{ path: 'home', component: HomeComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [
    BrowserModule,
		RouterModule.forRoot(appRoutes,
			{ enableTracing : false}
		)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
