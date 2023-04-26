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
      data: [
          { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
          { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
      ],
      layout: {width: 320, height: 240, title: 'A Fancy Plot'}
    }

    ngOnInit() {
    } 
}