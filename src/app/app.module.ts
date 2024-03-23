import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponentComponent } from './Components/acomponent/acomponent.component';
import { BComponentsComponent } from './Components/bcomponents/bcomponents.component';
import { RandomServiceIT } from './injection-token';
import { RandomService } from './randomService';

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent,
    BComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
