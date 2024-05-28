import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [

    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'demo', component:DemoComponent}
];
