import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { AddComponent } from './component/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    HomeComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
