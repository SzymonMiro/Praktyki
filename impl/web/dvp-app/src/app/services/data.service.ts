import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  /**
   * Pobiera listę wszystkich pojazdów.
   */
  public getAllData(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>(`${this.url}/all`);
  }
}