import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TomotoClockComponent } from './tomoto-clock/tomoto-clock.component';
import { CalcularComponent } from './calcular/calcular.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DrumMachineComponent } from './drum-machine/drum-machine.component';
import { ReactMarkdownComponent } from './react-markdown/react-markdown.component';
import { RandomQuoteMachineComponent } from './random-quote-machine/random-quote-machine.component';
import { TechnicalDocumentComponent } from './technical-document/technical-document.component';
import { ProdectLandingPageComponent } from './prodect-landing-page/prodect-landing-page.component';
import { ProductLandingPageComponent } from './product-landing-page/product-landing-page.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TomotoClockComponent,
    CalcularComponent,
    CalculatorComponent,
    DrumMachineComponent,
    ReactMarkdownComponent,
    RandomQuoteMachineComponent,
    TechnicalDocumentComponent,
    ProdectLandingPageComponent,
    ProductLandingPageComponent,
    SurveyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
