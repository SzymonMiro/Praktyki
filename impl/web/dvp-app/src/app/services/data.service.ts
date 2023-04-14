import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicles } from './';

@Injectable({
  providedIn: 'root'
})

export interface Vehicle {
  "Model": string;
  "Year": number;
  "Price": number;
  "Transmission": string;
  "Mileage": number;
  "FuelType": string;
  "Tax": number;
  "Mpg": number;
  "EngineSize": number;
}

export class DataService {
  private url = 'http://localhost/phpmyadmin/index.php?route=/database/structure&db=csv_db+6';

  constructor(private http: HttpClient) { }

  /**
   * Pobiera listę wszystkich pojazdów.
   */
  public getAllData(): Observable<Vehicles[]> {
    return this.http.get<Vehicles[]>(`${this.url}/all`);
  }
}

