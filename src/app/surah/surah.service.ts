import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import './surah';
import { Surah, Juz } from './surah';

@Injectable({
  providedIn: 'root'
})
export class SurahService {

  constructor(private httpClient: HttpClient) { }

  getSurahs(): Observable<Surah[]> {
    return this.httpClient.get<Surah[]>('../assets/surah.json');
  }

  getJuzs(): Observable<Juz[]> {
    return this.httpClient.get<Juz[]>('../assets/juz.json');
  }
}
