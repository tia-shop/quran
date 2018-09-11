import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SurahComponent } from './surah/surah.component';
import { SheetComponent } from './sheet/sheet.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/1',
    pathMatch: 'full'
  },
  { path: ':surah', component: SheetComponent },
  { path: 'juz/:juz', component: SheetComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SurahComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
