import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiamondStatisticsComponent } from './c/diamond-statistics/diamond-statistics.component';
import { DiamondsGridComponent } from './c/diamonds-grid/diamonds-grid.component';
import { AddDiamondComponent } from './c/add-diamond/add-diamond.component';

@NgModule({
  declarations: [
    AppComponent,
    DiamondsGridComponent,
    DiamondStatisticsComponent,
    AddDiamondComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
