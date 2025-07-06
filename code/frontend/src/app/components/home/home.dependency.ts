import { TrailsOfMonthComponent } from './../trails-of-month/trails-of-month.component';
import { CommonModule } from "@angular/common";
import { TrekExperiencesComponent } from '../trek-eperiences/trek-experiences.component';
import { TestimonialsComponent } from '../shared/testimonials/testimonials.component';
import { FaqComponent } from '../shared/faq/faq.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '../shared/banner/banner.component';

export const HomeDependency = [
    CommonModule,
    TrailsOfMonthComponent,
    TrekExperiencesComponent,
    TestimonialsComponent,
    FaqComponent,
    RouterModule,
    BannerComponent
];