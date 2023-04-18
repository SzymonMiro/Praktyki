import { Component, OnInit } from '@angular/core';
import { DataService, Vehicle } from '../services/data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  constructor(
    private dataService: DataService
    ) {}

    public dataSource: Vehicle[] = [];
    public displayedColumns: string[] = ['Model', 'Year', 'Price', 'Transmission', 'Mileage', 'FuelType', 'Tax', 'Mpg', 'EngineSize'];
    
    ngOnInit() {
      this.getData();
    } 

  private getData() {
    this.dataService.getAllData().subscribe(res => {
      this.dataSource = res.slice(0, 20);
    });
  }
}