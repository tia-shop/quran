import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juzs } from '../interfaces/juz';
import global from '../../global';
@Injectable({
  providedIn: 'root'
})
export class JuzService {

  constructor(private httpClient: HttpClient) { }

  getJuzs(): Observable<Juzs> {
    return this.httpClient.get<Juzs>(global.baseUrl + 'juzs?language=id');
  }
}
