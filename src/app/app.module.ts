import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ScrollbarModule } from 'ngx-scrollbar';
import { NgProgressModule } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { SurahComponent } from './surah/surah.component';
import { SurahListComponent } from './surah-list/surah-list.component';
import { ArabicNumberPipe } from './pipes/arabic-number.pipe';
import { ControlComponent } from './control/control.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/1',
    pathMatch: 'full'
  },
  { path: ':surah', component: SurahComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SurahComponent,
    SurahListComponent,
    ArabicNumberPipe,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollbarModule,
    NgProgressModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
