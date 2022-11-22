import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import '@angular/common/locales/global/pt';
import { ExercicioUmComponent } from './exercicio-um/exercicio-um.component';
import { ExercicioTresComponent } from './exercicio-tres/exercicio-tres.component';
import { ExercicioDoisComponent } from './exercicio-dois/exercicio-dois.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioUmComponent,
    ExercicioTresComponent,
    ExercicioDoisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
