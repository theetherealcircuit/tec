import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrekDetailsComponent } from './components/trek-details/trek-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExploreMapComponent } from './components/explore-map/explore-map.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'trail-details',
        component: TrekDetailsComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'explore-map',
        component: ExploreMapComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

