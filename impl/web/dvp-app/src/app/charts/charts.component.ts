import { Component } from '@angular/core';
import { DataService, Vehicle } from '../services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  constructor(
    private dataService: DataService
    ) {}

    public dataSource: Vehicle[] = [];
    public displayedColumns: string[] = ['FuelType'];

    public graph = {
      data: [{
        values: [7027, 3, 298, 3417, 36],
        labels: ['Diesel', 'Electric','Hybrid', 'Petrol', 'Other', ],
        type: 'pie'
    }],
      layout: {autosize: true, title: 'Wykres '}
    }

    ngOnInit() {
    } 
}