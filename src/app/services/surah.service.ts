import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surahs, Surah } from '../interfaces/surah';
import global from '../../global';
@Injectable({
  providedIn: 'root'
})
export class SurahService {

  constructor(private httpClient: HttpClient) { }

  getSurahs(): Observable<Surahs> {
    return this.httpClient.get<Surahs>(global.baseUrl+'chapters?language=id');
  }

  getSurah(surahNumber): Observable<Surah> {
    return this.httpClient.get<Surah>(global.baseUrl + 'chapters/'+surahNumber+'?language=id');
  }
}
