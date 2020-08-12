import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalindromeWordComponent } from './palindrome-word/palindrome-word.component';
import { PalindromeFluxComponent } from './palindrome-flux/palindrome-flux.component';
import { PalindromeService } from './services/palindrome.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PalindromeWordComponent,
    PalindromeFluxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PalindromeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
