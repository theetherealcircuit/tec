import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from '@angular/core';
import { featuredTrails } from '../../../assets/resources/trekExperiences.json';
import { TrekEperiencesDependency } from './trek-experiences.dependency';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trek-experiences',
  imports: [TrekEperiencesDependency],
  templateUrl: './trek-experiences.component.html',
  styleUrl: './trek-experiences.component.scss',
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrekExperiencesComponent implements AfterViewInit {
  featuredTrails: any = featuredTrails;
  @ViewChild('trailSwiper', { static: true }) swiperRef!: ElementRef;
  private localStorage: LocalStorageService = inject(LocalStorageService);
  private router: Router = inject(Router);

  ngAfterViewInit() {
    const swiperEl: any = this.swiperRef.nativeElement;

    // Optional manual init if needed
    swiperEl.initialize();

    // Add hover event listeners
    swiperEl.addEventListener('mouseenter', () => {
      swiperEl.swiper.autoplay.stop();
    });

    swiperEl.addEventListener('mouseleave', () => {
      swiperEl.swiper.autoplay.start();
    });
  }

  pauseSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.pause();
  }

  resumeSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.resume();
  }

  gotoTrail(trail: any) {
    this.localStorage.set('trail', trail);
    this.router.navigate(['/trail-details']);
  }
}
