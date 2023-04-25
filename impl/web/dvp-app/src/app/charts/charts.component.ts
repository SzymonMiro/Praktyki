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

    ngOnInit() {
      this.getData();
    } 
    
    private getData() {
      this.dataService.getAllData().subscribe(res => {
        var data = [{
          values: [],
          labels: ['Diesel', 'Other', 'Petrol'],
          type: 'pie'
        }];
        
        var layout = {
          height: 400,
          width: 500
        };
        Plotly.newPlot('myDiv', data, layout);
      });
    }
}
