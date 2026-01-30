import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrekDetailsComponent } from './components/trek-details/trek-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExploreMapComponent } from './components/explore-map/explore-map.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogsDetailsComponent } from './components/blogs/sub-components/blogs-details/blogs-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { EventComponent } from './components/event/event.component';
import { HeritageWalkComponent } from './components/heritage-walk/heritage-walk.component';
import { DayExcursionsComponent } from './components/day-excursions/day-excursions.component';
import { DetailComponent } from './components/day-excursions/detail/detail.component';
import { StepwellsComponent } from './components/stepwells/stepwells.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';

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
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'blogs/:id',
        component: BlogsDetailsComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    { path: 'explore/:type/:slug', component: GridViewComponent },
    //{ path: 'details/:type/:slug', component: DetailComponent }
    // {
    //     path: 'details/:type/:slug',
    //     component: YourDetailComponent
    // },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'heritage-walk',
        component: HeritageWalkComponent
    },
    {
        path: 'day-excursion',
        component: DayExcursionsComponent
    },
    {
        path: 'day-excursions/:id',
        component: DetailComponent
    },
    {
        path: 'stepwells',
        component: StepwellsComponent
    },
    {
        path: 'workshops',
        component: WorkshopsComponent
    },
    {
        path: 'event-regestration',
        component: EventFormComponent
    },
    {
        path: 'admin',
        component: AdminUsersComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

