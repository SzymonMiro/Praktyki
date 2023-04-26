import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() {}

   change() {
    var get = document.querySelector("body");
        get!.classList.toggle("dark-theme");
}
} 
