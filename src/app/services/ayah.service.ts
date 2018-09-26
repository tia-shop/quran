import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ayahs } from '../interfaces/ayah';
import global from '../../global';

@Injectable({
  providedIn: 'root'
})
export class AyahService {

  constructor(private httpClient: HttpClient) { }

  getAyahs(surahNumber, offset = 0): Observable<Ayahs> {
    return this.httpClient.get<Ayahs>(global.baseUrl + 'chapters/' + surahNumber +'/verses?offset='+offset+'&limit=10&translations%5B%5D=33&language=id');
  }
}
