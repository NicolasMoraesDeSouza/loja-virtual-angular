import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component'

export const rooteRouterConfig: Routes = [
    
    {path: '', redirectTo: './home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent}
];