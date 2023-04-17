import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'tables', component: TablesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
