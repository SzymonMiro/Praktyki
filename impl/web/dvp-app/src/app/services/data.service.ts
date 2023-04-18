import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


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

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  /**
   * Pobiera listę wszystkich pojazdów.
   */
  public getAllData(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.url}/all`);
  }
}

