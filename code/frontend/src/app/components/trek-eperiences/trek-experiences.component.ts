import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  HostListener,
  ViewChild,
  inject,
} from '@angular/core';

import { featuredTrails } from '../../../assets/resources/trekExperiences.json';
import { TrekEperiencesDependency } from './trek-experiences.dependency';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trek-experiences',
  imports: [TrekEperiencesDependency],
  templateUrl: './trek-experiences.component.html',
  styleUrl: './trek-experiences.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrekExperiencesComponent implements AfterViewInit {

  featuredTrails: any = featuredTrails;

  @ViewChild('trailSwiper', { static: false }) swiperRef!: ElementRef;

  slidesPerView = 3; // default desktop

  private localStorage: LocalStorageService = inject(LocalStorageService);
  private router: Router = inject(Router);

  ngOnInit() {
    this.updateSlidesPerView();  // Apply correct value on init
  }

  /** 🔥 RESPONSIVE BREAKPOINT LOGIC */
  @HostListener('window:resize')
  onResize() {
    this.updateSlidesPerView();
    this.updateSwiper();
  }

  updateSlidesPerView() {
    const w = window.innerWidth;

    if (w < 768) {
      this.slidesPerView = 1;   // Mobile
    } else if (w < 1024) {
      this.slidesPerView = 2;   // Tablet
    } else {
      this.slidesPerView = 3;   // Desktop
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const swiperEl: any = this.swiperRef.nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: this.slidesPerView,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
      });

      swiperEl.initialize();

      // Hover pause/resume
      swiperEl.addEventListener('mouseenter', () => swiperEl.swiper.autoplay.stop());
      swiperEl.addEventListener('mouseleave', () => swiperEl.swiper.autoplay.start());
    }, 50);
  }

  /** 🔥 LIVE UPDATE SWIPER WHEN BREAKPOINT CHANGES */
  updateSwiper() {
    const swiperEl: any = this.swiperRef?.nativeElement;

    if (swiperEl?.swiper) {
      swiperEl.swiper.params.slidesPerView = this.slidesPerView;
      swiperEl.swiper.update();
    }
  }

  gotoTrail(trail: any) {
    this.localStorage.set('trail', trail);
    this.router.navigate(['/trail-details']);
  }

  pauseSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.pause();
  }

  resumeSwiper(): void {
    const swiperEl: any = this.swiperRef.nativeElement;
    swiperEl.swiper.autoplay.resume();
  }
}
