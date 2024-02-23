import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AxHorizontalProgressComponent } from './ax-widgets/molequle/ax-horizontal-progress/ax-horizontal-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    AxHorizontalProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
