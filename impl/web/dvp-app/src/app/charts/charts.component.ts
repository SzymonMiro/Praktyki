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
        url:"http://localhost:4200", 
        labels: ['Diesel', 'Electric','Hybrid', 'Petrol', 'Other', ],
        type: 'pie'
        
    }],
      layout: {autosize: true, title: 'Wykres',  'plot_bgcolor': 'rgba(0,0,0,0)',
      'paper_bgcolor': 'rgba(0,0,0,0)', font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#aaaaaa'
      } }
      
    }
    ngOnInit() {
    } 
}