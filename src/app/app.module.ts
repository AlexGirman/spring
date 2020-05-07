import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DisciplineComponent} from './component'
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about', component: DisciplineComponent }
];
@NgModule({
  declarations: [AppComponent,
    DisciplineComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
