import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
// import { CoupensComponent } from './coupens/coupens.component';
// import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'trainer',component:StatisticsComponent},
    {path:'students',component:ProductsComponent},
   
    // {path:'coupens',component:CoupensComponent},
    // {path:'pages',component:PagesComponent},
    {path:'courses',component:MediaComponent},
    {path:'settings',component:SettingsComponent},
    {path:'header',component:HeaderComponent}
];
