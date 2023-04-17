import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  constructor(
    private dataService: DataService
  )
  {

  }

  private getData() 
  {
    this.dataService.getAllData()
    .subscribe(res => {
      console.log(res);
    })
  }
}
