import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Front1aComponent } from './front1a/front1a.component';
import { Front3aComponent } from './front3a/front3a.component';
import { Front5aComponent } from './front5a/front5a.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    Front1aComponent,
    Front3aComponent,
    Front5aComponent,
    PrincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
